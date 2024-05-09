import getGeolocation from "./geolocation";

const { default: axios } = require("axios");

const { WEATHER_BASE_URL, WEATHER_API_KEY } = process.env,
  getWeatherInfo = async () => {
    try {
      const { loc, region, city } = await getGeolocation(),
        [latitude, longitude] = loc,
        params = {
          lat: latitude,
          lon: longitude,
          appid: WEATHER_API_KEY,
          units: "metric",
        },
        { data } = await axios.get(`${WEATHER_BASE_URL}/data/2.5/weather`, {
          params,
        });

      return data;
    } catch (error) {
      return {
        name: "Tokyo",
        main: {
          temp: 20.0,
        },
      };
    }
  };

export default getWeatherInfo;
