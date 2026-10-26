"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { HomeIcon } from "./HomeIcons";

export default function HomeSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/search?q=${encodeURIComponent(q)}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <form className="home-hero-search home-rise home-d4" onSubmit={onSearch} role="search">
      <HomeIcon name="search" size={18} aria-hidden={true} />
      <input
        id="home-search"
        type="search"
        placeholder="Search surahs, IELTS topics, tools…"
        aria-label="Search the site"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
      />
      <button type="submit">Search</button>
    </form>
  );
}
