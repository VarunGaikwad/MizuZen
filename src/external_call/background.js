import dummy from "@/assets/dummy";

const { default: axios } = require("axios");

const { API_KEY, BASE_URL } = process.env,
  keywords = ["Tranquility", "Minimalism", "Nature", "Seasons"],
  params = {
    query: keywords.at(Math.random() * keywords.length),
    per_page: 1,
    orientation: "landscape",
  },
  getRandomUnsplashBackground = async () => {
    return dummy;
    const { data } = await axios.get(`${BASE_URL}/photos/WO008LBRPsc`, {
        params,
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
      }),
      { id, urls, color, user, location } = data,
      credits = {
        id,
        location: {
          city: location.city,
          country: location.country,
        },
        user: {
          name: user.name,
        },
      };

    return { urls, credits };
  },
  calculateTextColor = (code) => {
    const hexColor = code.replace("#", ""),
      red = parseInt(hexColor.substring(0, 2), 16),
      green = parseInt(hexColor.substring(2, 4), 16),
      blue = parseInt(hexColor.substring(4, 6), 16),
      luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255,
      primary_color = luminance > 0.5 ? "#000000" : "#FFFFFF",
      compliment_color = luminance > 0.5 ? "#7F7F7F" : "#CCCCCC";

    return {
      primary_color,
      compliment_color,
    };
  };

export default getRandomUnsplashBackground;
