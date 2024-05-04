"use client";

import React from "react";
import duckduckgo from "@/assets/duckduckgo.svg";
import Image from "next/image";

export default function DuckDuckGoSearchBar() {
  const onSearchSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.search.value,
      searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(searchTerm)}`;
    window.location.href = searchUrl;
  };

  return (
    <form onSubmit={onSearchSubmit} className="flex w-full lg:w-1/2">
      <Image
        className="size-10 mx-2"
        src={duckduckgo}
        height={1}
        width={1}
        alt="DuckDuckGoLogo"
      />
      <label htmlFor="searchInput" />
      <input
        autoComplete="off"
        placeholder="Search"
        id="searchInput"
        name="search"
        className="px-4 w-full bg-stone-950 bg-opacity-25 outline-none rounded-xl"
      />
    </form>
  );
}
