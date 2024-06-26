import { useEffect, useState } from "react";
import FooterToolbar from "./components/footer/FooterToolbar";
import HeaderToolbar from "./components/header/HeaderToolbar";
import MainBody from "./components/main/MainBody";
import { BackgroundImage } from "./external_call/background";
import axios from "axios";

export default function App() {
  const backgrounImage = new BackgroundImage(),
    [{ urls, credits }, setUnsplashBackground] = useState(
      backgrounImage.getRandomUnsplashBackground()
    ),
    [url, setUrl] = useState(urls.thumb),
    transitions = ["ease-in-out", "ease-out", "ease-in", "ease-linear"];

  useEffect(() => {
    const interval = setInterval(() => {
      setUnsplashBackground(backgrounImage.getRandomUnsplashBackground());
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [backgrounImage]);

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
      <div className="select-none z-10 h-screen p-4 flex flex-col bg-black bg-opacity-50 text-white">
        <HeaderToolbar />
        <MainBody />
        <FooterToolbar credits={credits} />
      </div>
    </main>
  );
}
