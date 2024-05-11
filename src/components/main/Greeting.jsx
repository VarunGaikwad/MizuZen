import PropTypes from "prop-types";

Greeting.propTypes = {
  date: PropTypes.object,
};

export default function Greeting({ date }) {
  const time = date.getHours();

  let greetingOfTime = "";

  if (time < 12) greetingOfTime = "Good morning 🌄";
  else if (time < 13) greetingOfTime = "Lunchtime! 🍜";
  else if (time < 17) greetingOfTime = "Good afternoon 🌤️";
  else if (time < 18) greetingOfTime = "Snack time! 🍪";
  else if (time < 20) greetingOfTime = "Dinner time! 🍝";
  else greetingOfTime = "Good night 🌃";

  return (
    <p className="text-5xl">
      {greetingOfTime}, Varun <q>PreApeXis</q> Gaikwad
    </p>
  );
}
