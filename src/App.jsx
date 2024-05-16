import { useEffect, useState } from "react";
import FooterToolbar from "./components/footer/FooterToolbar";
import HeaderToolbar from "./components/header/HeaderToolbar";
import MainBody from "./components/main/MainBody";
import getRandomUnsplashBackground from "./external_call/background";
import axios from "axios";

export default function App() {
  const [{ urls, credits }, setUnsplashBackground] = useState(
    getRandomUnsplashBackground()
  );

  const [url, setUrl] = useState(urls.thumb);

  const transitions = ["ease-in-out", "ease-out", "ease-in", "ease-linear"];

  useEffect(() => {
    const interval = setInterval(() => {
      setUnsplashBackground(getRandomUnsplashBackground());
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    axios.get(urls.raw).then(() => setUrl(urls.raw));
  }, [urls]);

  return (
    <main
      className={`bg-center bg-no-repeat bg-fixed bg-cover transition-all duration-1000 ${
        transitions[Math.floor(Math.random() * transitions.length)]
      }`}
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
