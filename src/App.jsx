import { useEffect, useState } from "react";
import FooterToolbar from "./components/footer/FooterToolbar";
import HeaderToolbar from "./components/header/HeaderToolbar";
import MainBody from "./components/main/MainBody";
import getRandomUnsplashBackground from "./external_call/background";
import axios from "axios";

export default function App() {
  const { urls, credits } = getRandomUnsplashBackground();

  const [url, setUrl] = useState(urls.thumb);

  useEffect(() => {
    axios.get(urls.raw).then(() => setUrl(urls.raw));
  }, [urls.raw]);

  return (
    <main
      className="bg-center bg-no-repeat bg-fixed bg-cover transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="select-none z-10 h-screen p-4 flex flex-col bg-black bg-opacity-30 text-white">
        <HeaderToolbar />
        <MainBody />
        <FooterToolbar credits={credits} />
      </div>
    </main>
  );
}
