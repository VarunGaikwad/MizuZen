import background from "./background.json";

const getRandomUnsplashBackground = () => {
  const random = Number(
    new Date().toISOString().split("T")[0].replace(/-/g, "")
  );
  return background.at(random % 10);
};

export default getRandomUnsplashBackground;
