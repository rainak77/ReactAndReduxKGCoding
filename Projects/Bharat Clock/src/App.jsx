import "./App.css";
import CurrentTime from "./components/CurrentTime";
import Description from "./components/Description";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Description />
      <CurrentTime />
    </div>
  );
}

export default App;
