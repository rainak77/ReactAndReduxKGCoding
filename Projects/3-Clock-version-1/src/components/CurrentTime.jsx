import getTime from "./GetIndianTime";
export default function CurrentTime() {
  let time = new Date();
  return (
    <div>
      This is the current date : {time.toLocaleDateString()} and time :{" "}
      {time.toLocaleTimeString()}
    </div>
  );
}
