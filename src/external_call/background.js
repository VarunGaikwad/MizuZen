import background from "./background.json";

let max = background.length - 1,
  random = Number(new Date().getTime()) % max;

const getRandomUnsplashBackground = () => {
  return background.at(getNextIndex());
};

const getNextIndex = () => {
  random++;
  if (random > max) {
    random = 0;
  }
  return random;
};

export default getRandomUnsplashBackground;
