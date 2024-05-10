import axios from "axios";

let locationMemory = {};

const { GEO_BASE_URL, GEO_API_KEY } = import.meta.env,
  getGeolocation = async () => {
    if (locationMemory.length) {
      return locationMemory;
    }
    try {
      const {
        data: { loc, city, region },
      } = await axios.get(`${GEO_BASE_URL}?token=${GEO_API_KEY}`);

      locationMemory = {
        loc: loc.split(",").map((item) => Number(item).toFixed(2)),
        region,
        city,
      };

      return locationMemory;
    } catch (error) {
      console.log(error);
      return { loc: [35.6761919, 139.6503106], city: "Tokyo", region: "" };
    }
  };

export default getGeolocation;
