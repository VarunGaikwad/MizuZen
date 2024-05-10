export default function Greeting() {
  const time = new Date().getHours();

  let GreetingOfTime = "";

  if (time < 12) GreetingOfTime = "Good morning ☀️";
  else if (time === 12) GreetingOfTime = "Lunchtime! 🍽️";
  else if (time === 13) GreetingOfTime = "Snack time! 🍪";
  else if (time < 17) GreetingOfTime = "Good afternoon 🌤️";
  else if (time < 20) GreetingOfTime = "Good evening 🌆";
  else GreetingOfTime = "Good night 🌙";

  return (
    <p className="text-5xl">
      {GreetingOfTime}, Varun <q>PreApeXis</q> Gaikwad
    </p>
  );
}
