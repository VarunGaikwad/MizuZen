import "./globals.css";
import getRandomUnsplashBackground from "@/external_call/background";

export const metadata = {
  title: "Varun Gaikwad | MizuZen",
  description: "",
};

export default async function RootLayout({ children }) {
  const {
    urls,
    alternative_slugs,
    location,
    color,
    blur_hash,
    primary_color,
    compliment_color,
  } = await getRandomUnsplashBackground();

  return (
    <html lang="en">
      <body
        className="text-white"
        style={{
          background: `url(${urls.raw}) no-repeat center fixed`,
          backgroundSize: "cover",
        }}
      >
        {children}
      </body>
    </html>
  );
}
