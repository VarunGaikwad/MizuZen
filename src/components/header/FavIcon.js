"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function FavIcon({ name, url }) {
  const defaultImage =
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Ffavicon-png-favicon-1024.png&f=1&nofb=1&ipt=342c5eb0883d526c88e979095b1e2e20289e14ba491a62f0c93fab5b7eb0e244&ipo=images",
    [srcImg, setImage] = useState(
      `https://www.google.com/s2/favicons?sz=128&domain=${url}`
    );
  return (
    <Link href={url}>
      <div className="w-24 flex flex-col align-middle items-center justify-center text-center gap-2">
        <Image
          width={32}
          height={32}
          src={srcImg}
          alt={name}
          onError={() => {
            setImage(defaultImage);
          }}
        />
        <p className="text-xs">{name}</p>
      </div>
    </Link>
  );
}
