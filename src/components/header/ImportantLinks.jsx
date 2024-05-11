import FavIcon from "./FavIcon";

export default function ImportantLinks() {
  const links = [
    {
      name: "Google",
      url: "http://www.google.com",
    },
    {
      name: "ChatGPT",
      url: "https://chatgpt.com/",
    },
    {
      name: "People Zoho",
      url: "https://people.zoho.in/initiumdigital/zp#home/dashboard",
    },
    {
      name: "Payroll Zoho",
      url: "https://payroll.zoho.in/portal/60028230201#/dashboard",
    },
    {
      name: "SAP Community",
      url: "https://community.sap.com/",
    },
    {
      name: "SAP BAS",
      url: "https://9b64d66ctrial.us10.build.cloud.sap/lobby",
    },
    {
      name: "Gmail",
      url: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      name: "Chess.com",
      url: "https://www.chess.com/",
    },
    {
      name: "Duolingo",
      url: "https://www.duolingo.com/characters",
    },
  ];
  return (
    <div className="absolute mt-10 w-3/12 flex flex-wrap gap-4">
      {links.map(({ name, url }, idx) => (
        <FavIcon key={idx} name={name} url={url} />
      ))}
    </div>
  );
}
