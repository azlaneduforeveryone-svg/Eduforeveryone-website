#!/usr/bin/env python3
"""
IELTS Listening audio pre-generator (edge-tts + pydub).

Reads a listening_scripts.json file, renders each speaker turn with its own
neural voice, stitches the turns into one MP3 per section with natural pauses,
and writes a manifest.json the front end can read.

Run once whenever your scripts change. Output is static — no runtime API calls.

USAGE
  python generate_listening_audio.py                 # generate everything
  python generate_listening_audio.py --check         # validate only, no network
  python generate_listening_audio.py --only section-1
  python generate_listening_audio.py --out ../public/ielts/listening

REQUIREMENTS
  pip install edge-tts pydub
  ffmpeg must be installed and on PATH (pydub needs it for MP3 stitching).
    Windows : winget install Gyan.FFmpeg     (then restart the terminal)
    macOS   : brew install ffmpeg
    Linux   : sudo apt install ffmpeg
"""

import argparse
import asyncio
import json
import sys
import tempfile
from pathlib import Path

SCRIPTS_FILE = "listening_scripts.json"
DEFAULT_OUT = "public/ielts/listening"


def load_scripts(path: Path) -> dict:
    if not path.exists():
        sys.exit(f"ERROR: scripts file not found: {path}")
    data = json.loads(path.read_text(encoding="utf-8"))
    if "sections" not in data or "voices" not in data:
        sys.exit("ERROR: scripts JSON must contain 'voices' and 'sections'.")
    return data


def validate(data: dict) -> None:
    """Catch problems before spending time (and network) on generation."""
    voices = data["voices"]
    problems, total_chars = [], 0
    for sec in data["sections"]:
        sid = sec.get("id", "<missing id>")
        if not sec.get("turns"):
            problems.append(f"{sid}: no turns")
        for i, turn in enumerate(sec.get("turns", [])):
            spk = turn.get("speaker")
            if spk not in voices:
                problems.append(f"{sid} turn {i}: speaker '{spk}' has no voice mapping")
            if not turn.get("text", "").strip():
                problems.append(f"{sid} turn {i}: empty text")
            total_chars += len(turn.get("text", ""))
    print(f"Sections: {len(data['sections'])}  |  Total characters: {total_chars}")
    if problems:
        print("VALIDATION FAILED:")
        for p in problems:
            print("  -", p)
        sys.exit(1)
    print("Validation OK.")


async def render_turn(text: str, voice: str, rate: str, out_path: Path) -> None:
    import edge_tts  # imported lazily so --check works without the package
    await edge_tts.Communicate(text, voice, rate=rate).save(str(out_path))


async def build_section(sec: dict, voices: dict, defaults: dict,
                        out_dir: Path, tmp_dir: Path) -> dict:
    from pydub import AudioSegment

    sid = sec["id"]
    section_rate = sec.get("rate", defaults["rate"])
    gap = AudioSegment.silent(duration=defaults["gap_between_turns_ms"])
    gap_after_narrator = AudioSegment.silent(duration=defaults["gap_after_narrator_ms"])

    combined = AudioSegment.silent(duration=300)  # tiny lead-in
    transcript = []

    for i, turn in enumerate(sec["turns"]):
        spk, text = turn["speaker"], turn["text"].strip()
        voice = voices[spk]
        part_path = tmp_dir / f"{sid}_{i:03d}.mp3"
        print(f"  [{sid}] turn {i+1}/{len(sec['turns'])}  ({spk} · {voice})")
        await render_turn(text, voice, section_rate, part_path)

        seg = AudioSegment.from_file(part_path, format="mp3")
        combined += seg
        combined += gap_after_narrator if spk == "narrator" else gap
        transcript.append({"speaker": spk, "text": text})

    out_path = out_dir / f"{sid}.mp3"
    combined.export(out_path, format="mp3", bitrate=defaults["bitrate"])
    duration_sec = round(len(combined) / 1000, 1)
    print(f"  -> {out_path.name}  ({duration_sec}s)")

    return {
        "id": sid,
        "title": sec.get("title", sid),
        "audio": f"/{out_dir.as_posix().split('public/')[-1]}/{sid}.mp3"
                 if "public/" in out_dir.as_posix() else f"{sid}.mp3",
        "durationSec": duration_sec,
        "transcript": transcript,
    }


async def main_async(args) -> None:
    data = load_scripts(Path(args.scripts))
    validate(data)
    if args.check:
        print("\n--check passed. No audio generated.")
        return

    out_dir = Path(args.out)
    out_dir.mkdir(parents=True, exist_ok=True)
    voices, defaults = data["voices"], data["defaults"]

    sections = data["sections"]
    if args.only:
        sections = [s for s in sections if s["id"] == args.only]
        if not sections:
            sys.exit(f"ERROR: no section with id '{args.only}'")

    manifest = []
    with tempfile.TemporaryDirectory() as tmp:
        tmp_dir = Path(tmp)
        for sec in sections:
            print(f"\nBuilding {sec['id']} ...")
            manifest.append(await build_section(sec, voices, defaults, out_dir, tmp_dir))

    # Merge into existing manifest so --only doesn't wipe other sections
    manifest_path = out_dir / "manifest.json"
    existing = {}
    if manifest_path.exists():
        existing = {m["id"]: m for m in json.loads(manifest_path.read_text())}
    for m in manifest:
        existing[m["id"]] = m
    ordered = sorted(existing.values(), key=lambda m: m["id"])
    manifest_path.write_text(json.dumps(ordered, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"\nWrote {manifest_path}  ({len(ordered)} sections)")
    print("Done.")


def main() -> None:
    ap = argparse.ArgumentParser(description="Pre-generate IELTS listening audio with edge-tts.")
    ap.add_argument("--scripts", default=SCRIPTS_FILE, help="path to listening_scripts.json")
    ap.add_argument("--out", default=DEFAULT_OUT, help="output dir (under your Next.js /public)")
    ap.add_argument("--only", help="generate only this section id")
    ap.add_argument("--check", action="store_true", help="validate only; no network, no audio")
    asyncio.run(main_async(ap.parse_args()))


if __name__ == "__main__":
    main()
