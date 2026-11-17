"use client";

import { useEffect, useId, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { HomeIcon } from "./HomeIcons";
import { fuzzySearch } from "@/lib/search/fuzzy";
import { useSearchIndex } from "@/lib/search/useSearchIndex";

/**
 * Home page search box with suggestions as you type.
 * Suggestions forgive small spelling mistakes ("depriciation", "mitocondria")
 * and match the start of words ("dep" finds Depreciation).
 * Enter on a highlighted suggestion opens it; Enter otherwise opens /search.
 */
export default function HomeSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const router = useRouter();
  const { index, ensure } = useSearchIndex();
  const wrapRef = useRef<HTMLFormElement>(null);
  const listId = useId();

  const hits = useMemo(
    () => (index && query.trim().length >= 2 ? fuzzySearch(index, query, 8) : []),
    [index, query]
  );
  const showList = open && query.trim().length >= 2 && index !== null;

  useEffect(() => setActive(-1), [query]);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    if (showList && active >= 0 && hits[active]) return go(hits[active].h);
    const q = query.trim();
    go(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!showList || hits.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % hits.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i <= 0 ? hits.length - 1 : i - 1));
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <form
      ref={wrapRef}
      className={`home-hero-search home-rise home-d4${showList ? " home-suggest-open" : ""}`}
      onSubmit={onSearch}
      role="search"
    >
      <HomeIcon name="search" size={18} aria-hidden={true} />
      <input
        id="home-search"
        type="search"
        placeholder="Search surahs, courses, IELTS topics, tools…"
        aria-label="Search the site"
        role="combobox"
        aria-expanded={showList}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={showList && active >= 0 ? `${listId}-${active}` : undefined}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          ensure();
        }}
        onFocus={() => {
          ensure();
          setOpen(true);
        }}
        onKeyDown={onKey}
        autoComplete="off"
        spellCheck={false}
      />
      <button type="submit">Search</button>

      {showList && (
        <ul id={listId} role="listbox" className="home-suggest" aria-label="Suggestions">
          {hits.length === 0 ? (
            <li className="home-suggest-empty" role="option" aria-selected={false}>
              No matches yet. Press Enter to search the whole site.
            </li>
          ) : (
            hits.map((h, i) => (
              <li
                key={h.h}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={i === active}
                className={`home-suggest-item${i === active ? " is-active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => {
                  e.preventDefault(); // keep focus; navigate on click
                  go(h.h);
                }}
              >
                <span className="home-suggest-emoji" aria-hidden="true">{h.e}</span>
                <span className="home-suggest-title">{h.t}</span>
                <span className="home-suggest-cat">{h.c}</span>
              </li>
            ))
          )}
        </ul>
      )}
    </form>
  );
}
