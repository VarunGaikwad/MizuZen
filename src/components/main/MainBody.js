import BinaryClock from "./BinaryClock";
import PercentageClock from "./PercentageClock";
import Greeting from "./Greeting";

export default function MainBody() {
  return (
    <div className="flex-1 flex flex-col gap-4 justify-center items-center">
      <PercentageClock />
      <Greeting />
    </div>
  );
}
