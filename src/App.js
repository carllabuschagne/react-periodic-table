import logo from "./logo.svg";
import "./App.css";
import data from "./data/elements.json";

console.log("app called");

const Styles = {
  item: {
    margin: "0px",
  },
};

const toggleStrikethrough = (category) => {
  switch (category) {
    case "alkali metal":
      return "alkali-metal";
    case "alkaline earth metal":
      return "alkali-earth-metal";
    case "lanthanide":
      return "lanthanide";
    case "actinide":
      return "actinide";
    case "transition metal":
      return "transition-metal";
    case "post-transition metal":
      return "post-transition-metal";
    case "metalloid":
      return "metalloid";
    case "diatomic nonmetal":
      return "diatomic-nonmetal";
    case "polyatomic nonmetal":
      return "polyatomic-nonmetal";
    case "noble gas":
      return "noble-gas";
    default:
      return "foo";
  }
};

function Element(props) {
  return data.map((data) => (
    <div
      className={
        "element element-" +
        data.number +
        " " +
        toggleStrikethrough(data.category)
      }
    >
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
