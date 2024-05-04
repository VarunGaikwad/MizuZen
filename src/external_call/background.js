const { default: axios } = require("axios");

const { API_KEY, BASE_URL } = process.env,
  params = {
    query: "nature",
    per_page: 1,
    orientation: "landscape",
  },
  getRandomUnsplashBackground = async () => {
    return {
      urls: {
        raw: "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=M3w1OTU2OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ4MDIxNjd8&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1444464666168-49d633b86797?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1OTU2OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ4MDIxNjd8&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1444464666168-49d633b86797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTU2OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ4MDIxNjd8&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1444464666168-49d633b86797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTU2OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ4MDIxNjd8&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1444464666168-49d633b86797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTU2OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ4MDIxNjd8&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1444464666168-49d633b86797",
      },
      alternative_slugs: {
        en: "selective-focus-photography-of-blue-kingfisher-vUNQaTtZeOo",
        es: "fotografia-de-enfoque-selectivo-del-martin-pescador-azul-vUNQaTtZeOo",
        ja: "ブルーカワセミのセレクティブフォーカス撮影-vUNQaTtZeOo",
        fr: "photographie-selective-de-la-mise-au-point-du-martin-pecheur-bleu-vUNQaTtZeOo",
        it: "fotografia-a-fuoco-selettiva-del-martin-pescatore-blu-vUNQaTtZeOo",
        ko: "blue-kingfisher의-선택적-초점-사진-vUNQaTtZeOo",
        de: "selektive-fokusfotografie-des-blauen-eisvogels-vUNQaTtZeOo",
        pt: "fotografia-de-foco-seletivo-de-blue-kingfisher-vUNQaTtZeOo",
      },
      location: {
        name: "Oostvaardersplassen (Natuurreservaat), Lelystad, Nederland",
        city: "Lelystad",
        country: "Nederland",
        position: { latitude: 52.4467258594769, longitude: 5.41542433618156 },
      },
      color: "#404026",
      blur_hash: "L68NziDi0L^+EK-Vxa9vMxo#sof5",
      primary_color: "#FFFFFF",
      compliment_color: "#CCCCCC",
    };
    const { data } = await axios.get(`${BASE_URL}/photos/random`, {
        params,
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
      }),
      { urls, alternative_slugs, location, color, blur_hash } = data,
      { primary_color, compliment_color } = calculateTextColor(color);

    return {
      urls,
      alternative_slugs,
      location,
      color,
      blur_hash,
      primary_color,
      compliment_color,
    };
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
