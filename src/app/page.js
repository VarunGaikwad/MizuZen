import FooterToolbar from "@/components/footer/FooterToolbar";
import HeaderToolbar from "@/components/header/HeaderToolbar";
import MainBody from "@/components/main/MainBody";
import getRandomUnsplashBackground from "@/external_call/background";

export default async function Home() {
  const { urls, credits } = await getRandomUnsplashBackground();

  return (
    <main
      className="bg-center bg-no-repeat bg-fixed bg-cover"
      style={{ backgroundImage: `url(${urls.raw})` }}
    >
      <div className="select-none z-10 h-screen p-4 flex flex-col bg-black bg-opacity-30 text-white">
        <HeaderToolbar />
        <MainBody />
        <FooterToolbar credits={credits} />
      </div>
    </main>
  );
}
