import "./App.css";
import Pokemon from "./components/Pokemon";
import Home from "./components/Home";

const App = (props) => {
  return (
    <div className="App">
      <Home />
      <Pokemon />
    </div>
  );
};

export default App;
