import FavIcon from "./FavIcon";
import links from "../../external_call/links.json";
export default function ImportantLinks() {
  return (
    <div className="absolute mt-10 w-3/12 flex flex-wrap gap-4">
      {links.map(({ name, url }, idx) => (
        <FavIcon key={idx} name={name} url={url} />
      ))}
    </div>
  );
}
