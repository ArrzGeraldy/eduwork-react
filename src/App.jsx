import "./App.css";
import Button from "./components/Button";
import FromValidator from "./components/From/FromValidator";
import Navbar from "./components/Navbar";
import Styling from "./components/Styling";

function App() {
  return (
    <div className="App">
      <Navbar title="React" />
      <Button />
      <Styling />
      <FromValidator />
    </div>
  );
}

export default App;
