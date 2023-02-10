import logo from './logo.svg';
import './App.css';


console.log("app called");


function Element(props) {
  return (
    <div className={"element element-"+props.no}>
      <h3>{props.no}</h3>
      <h1>{props.symbol}</h1>
      <h3>{props.atomic}</h3>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      
      <Element symbol="H" name="Hydrogen" no="1" atomic="1.008"></Element>
      <Element symbol="He" name="Helium" no="2" atomic="4.003"></Element>
      <Element symbol="Li" name="Lithium" no="3" atomic="6.94"></Element>
      <Element symbol="Be" name="Berium" no="4" atomic="9.012"></Element>
      <Element symbol="B" name="" no="5" atomic="10.81"></Element>
      <Element symbol="B" name="" no="6" atomic="10.81"></Element>
      <Element symbol="B" name="" no="7" atomic="10.81"></Element>
      <Element symbol="B" name="" no="8" atomic="10.81"></Element>
      <Element symbol="B" name="" no="9" atomic="10.81"></Element>
      <Element symbol="B" name="" no="10" atomic="10.81"></Element>
      <Element symbol="B" name="" no="11" atomic="10.81"></Element>
      <Element symbol="B" name="" no="12" atomic="10.81"></Element>
      <Element symbol="B" name="" no="13" atomic="10.81"></Element>
      <Element symbol="B" name="" no="14" atomic="10.81"></Element>
      <Element symbol="B" name="" no="15" atomic="10.81"></Element>
      <Element symbol="B" name="" no="16" atomic="10.81"></Element>
      <Element symbol="B" name="" no="17" atomic="10.81"></Element>
      <Element symbol="B" name="" no="18" atomic="10.81"></Element>
      
    
    </div>
  );
}

export default App;
