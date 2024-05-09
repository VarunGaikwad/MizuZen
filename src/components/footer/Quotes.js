import React from "react";
import quotes from "@/external_call/quotes.json";

export default function Quotes() {
  const index = new Date().toISOString().slice(0, 10).replace(/-/g, "") % 30;
  return <q className="flex-1 text-lg text-center">{quotes[index].quote}</q>;
}
