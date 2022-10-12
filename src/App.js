import "./App.scss";
import Calculator from "./components/calculator/Calculator";
import Logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <img className="logo" src={Logo} alt="logo" />
      <Calculator />
    </div>
  );
}

export default App;
