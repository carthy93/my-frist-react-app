import "./App.css";
import Welcome from "./components/Welcome";
import Test from "./components/Test";
import Track from "./components/Track";
import Process from "./components/Process";

function App() {
  return (
    <div className="App">
      <h1> Hello React </h1>
      <Welcome />
      <Test />
      <Track />
      <Process />
    </div>
  );
}

export default App;
