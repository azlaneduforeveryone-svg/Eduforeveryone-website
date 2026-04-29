"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// Juz to Surah mapping
const JUZ_STARTS: Record<number, { surah: number; ayah: number; name: string }> = {
  1:  { surah:1,  ayah:1,  name:"Al-Fatiha"      },
  2:  { surah:2,  ayah:142,name:"Al-Baqarah"     },
  3:  { surah:2,  ayah:253,name:"Al-Baqarah"     },
  4:  { surah:3,  ayah:92, name:"Al-Imran"       },
  5:  { surah:4,  ayah:24, name:"An-Nisa"        },
  6:  { surah:4,  ayah:148,name:"An-Nisa"        },
  7:  { surah:5,  ayah:82, name:"Al-Maidah"      },
  8:  { surah:6,  ayah:111,name:"Al-Anam"        },
  9:  { surah:7,  ayah:88, name:"Al-Araf"        },
  10: { surah:8,  ayah:41, name:"Al-Anfal"       },
  11: { surah:9,  ayah:93, name:"At-Tawbah"      },
  12: { surah:11, ayah:6,  name:"Hud"            },
  13: { surah:12, ayah:53, name:"Yusuf"          },
  14: { surah:15, ayah:1,  name:"Al-Hijr"        },
  15: { surah:17, ayah:1,  name:"Al-Isra"        },
  16: { surah:18, ayah:75, name:"Al-Kahf"        },
  17: { surah:21, ayah:1,  name:"Al-Anbiya"      },
  18: { surah:23, ayah:1,  name:"Al-Muminun"     },
  19: { surah:25, ayah:21, name:"Al-Furqan"      },
  20: { surah:27, ayah:56, name:"An-Naml"        },
  21: { surah:29, ayah:46, name:"Al-Ankabut"     },
  22: { surah:33, ayah:31, name:"Al-Ahzab"       },
  23: { surah:36, ayah:28, name:"Ya-Sin"         },
  24: { surah:39, ayah:32, name:"Az-Zumar"       },
  25: { surah:41, ayah:47, name:"Fussilat"       },
  26: { surah:46, ayah:1,  name:"Al-Ahqaf"       },
  27: { surah:51, ayah:31, name:"Adh-Dhariyat"   },
  28: { surah:58, ayah:1,  name:"Al-Mujadila"    },
  29: { surah:67, ayah:1,  name:"Al-Mulk"        },
  30: { surah:78, ayah:1,  name:"An-Naba"        },
};

interface JuzPageProps { juzId: number; }

export default function JuzPage({ juzId }: JuzPageProps) {
  const juz = JUZ_STARTS[juzId];

  if (!juz) return (
    <div className="text-center py-20">
      <p className="text-2xl font-bold text-gray-900 mb-2">Invalid Juz</p>
      <Link href="/quran" className="text-teal-600 hover:underline">← Back to Quran</Link>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/quran" className="hover:text-teal-600">Quran</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Juz {juzId}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-b from-teal-600 to-teal-700 text-white rounded-2xl p-8 text-center mb-8">
        <p className="text-teal-200 text-sm font-semibold mb-1">Juz</p>
        <p className="text-6xl font-bold mb-2">{juzId}</p>
        <p className="text-teal-200">Starts from Surah {juz.name} · Ayah {juz.ayah}</p>
        <div className="mt-4">
          <Link href={`/quran/${juz.surah}`}
            className="inline-block bg-white text-teal-700 px-6 py-2.5 rounded-xl font-bold hover:bg-teal-50 transition-colors">
            Read from Surah {juz.surah} →
          </Link>
        </div>
      </div>

      {/* All 30 Juz grid */}
      <h2 className="text-xl font-bold text-gray-900 mb-5">All 30 Juz</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-8">
        {Array.from({ length: 30 }, (_, i) => i + 1).map(j => (
          <Link key={j} href={`/quran/juz/${j}`}
            className={`p-4 rounded-2xl border text-center font-bold transition-all
              ${j === juzId
                ? "bg-teal-600 text-white border-teal-700"
                : "bg-white border-gray-200 text-gray-700 hover:border-teal-300 hover:bg-teal-50"}`}>
            <p className="text-xl">{j}</p>
            <p className="text-xs mt-1 font-normal opacity-75">
              {JUZ_STARTS[j]?.name.slice(0, 8)}
            </p>
          </Link>
        ))}
      </div>

      {/* Back */}
      <div className="text-center">
        <Link href="/quran"
          className="inline-block px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors">
          ← All Surahs
        </Link>
      </div>
    </div>
  );
}
