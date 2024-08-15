import { KgButton } from "./KgButton";
import Hello from "./Hello";
import Random from "./random";

export default function App() {
  let name = "arif";
  let fullname = () => {
    return "md syedul arif";
  };
  return (
    <div>
      <h1>Best react course from {fullname()}</h1>
      <Hello />
      <Random />
      <Random />
    </div>
  );
}
