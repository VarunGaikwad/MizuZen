import DuckDuckGoSearchBar from "./DuckDuckGoSearchBar";
import ImportantLinks from "./ImportantLinks";

export default function HeaderToolbar() {
  return (
    <div>
      <ImportantLinks />
      <div className="flex justify-evenly w-full">
        <div></div>
        <DuckDuckGoSearchBar />
        <div></div>
      </div>
    </div>
  );
}
