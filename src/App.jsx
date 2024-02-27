import "./App.css";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Styling from "./components/Styling";

function App() {
  return (
    <div className="App">
      <Navbar title="React" />
      <Button />
      <Styling />
    </div>
  );
}

export default App;
