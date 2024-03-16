import "./App.css";
import Button from "./components/Button";
import FromValidator from "./components/From/FromValidator";
import Styling from "./components/Styling";

function App() {
  return (
    <div className="App">
      <Button />
      <Styling />
      <FromValidator />
    </div>
  );
}

export default App;
