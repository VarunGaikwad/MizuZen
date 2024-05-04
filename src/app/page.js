import HeaderToolbar from "@/components/header/HeaderToolbar";
import MainBody from "@/components/main/MainBody";

export default function Home() {
  return (
    <main className="z-10 p-4 h-screen flex flex-col">
      <HeaderToolbar />
      <MainBody />
      <div>Footer</div>
    </main>
  );
}
