import PropTypes from "prop-types";

Greeting.propTypes = {
  date: PropTypes.object,
};

export default function Greeting({ date }) {
  const time = date.getHours();

  let greetingOfTime = "";

  if (time < 12) greetingOfTime = "おはようございます 🌄";
  else if (time < 13) greetingOfTime = "昼ごはんの時間です！🍜";
  else if (time < 17) greetingOfTime = "こんにちは 🌤️";
  else if (time < 18) greetingOfTime = "おやつの時間です！🍪";
  else if (time < 20) greetingOfTime = "夕食の時間です！🍝";
  else greetingOfTime = "おやすみなさい 🌃";

  return (
    <p className="text-5xl">
      {greetingOfTime}, Varun <q>PreApeXis</q> Gaikwad
    </p>
  );
}
