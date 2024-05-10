import Greeting from "./Greeting";
import PercentageClock from "./PercentageClock";

export default function MainBody() {
  return (
    <div className="flex-1 flex flex-col gap-4 justify-center items-center">
      <PercentageClock />
      <Greeting />
    </div>
  );
}
