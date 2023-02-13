import logo from "./logo.svg";
import "./App.css";
import data from "./data/elements.json";

console.log("app called");

const Styles = {
  item: {
    margin: "0px",
  },
};

function Element(props) {
  return data.map((data) => (    
    <div className={"element element-" + data.number}>
      <h2 style={Styles.item}>{data.number}</h2>
      <h1 style={Styles.item}>{data.symbol}</h1>
      <h3 style={Styles.item}>{data.name}</h3>
      <h3 style={Styles.item}>{data.atomic_mass}</h3>
    </div>
  ));
}

function App() {
  return (
    <div className="App">
      <Element />
    </div>
  );
}

export default App;
