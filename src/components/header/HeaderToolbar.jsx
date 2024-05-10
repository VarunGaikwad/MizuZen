import DuckDuckGoSearchBar from "./DuckDuckGoSearchBar";
import ImportantLinks from "./ImportantLinks";

export default function HeaderToolbar() {
  return (
    <div>
      <div className="flex justify-center w-full">
        <DuckDuckGoSearchBar />
      </div>
      <ImportantLinks />
    </div>
  );
}
