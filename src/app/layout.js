import "./globals.css";

export const metadata = {
  title: "Varun Gaikwad | MizuZen",
  description: "",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
