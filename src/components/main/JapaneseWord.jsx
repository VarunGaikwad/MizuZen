import { useState } from "react";
import words from "../../external_call/japanese_word.json";

export default function JapaneseWord() {
  const today_date = new Date().toISOString().split("T")[0],
    timestamp = localStorage.getItem("timestamp"),
    [romajiVisible, setRomajiVisible] = useState(false),
    onJapaneseClick = () => {
      setRomajiVisible(true);
    },
    onJapaneseHoverOut = () => {
      setRomajiVisible(false);
    };

  let index = Number(localStorage.getItem("wordIndex") || new Date().getDate());

  if (index > 31 || index > 30) {
    index = new Date().getDate();
  }

  if (timestamp !== today_date) {
    localStorage.setItem("timestamp", today_date);
    index = index + 1;
    localStorage.setItem("wordIndex", index);
  }

  const { japanese, romaji, english } = words[index];

  return (
    <div className="text-center mt-5">
      <p
        onClick={onJapaneseClick}
        onMouseLeave={onJapaneseHoverOut}
        className="text-8xl cursor-pointer"
      >
        {japanese}
      </p>
      <p className={`${romajiVisible ? "opacity-100" : "opacity-0"} text-2xl`}>
        {romaji}
      </p>
      <p className="text-4xl">{english}</p>
    </div>
  );
}
