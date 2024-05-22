import words from "../../external_call/japanese_word.json";

export default function JapaneseWord() {
  const index = localStorage.getItem("wordIndex") || new Date().getDate();
  localStorage.setItem("wordIndex", index);

  const { japanese, english } = words[index];

  return (
    <div className="text-center">
      <p className="text-8xl text-indigo-400">{japanese}</p>
      <p>{english}</p>
    </div>
  );
}
