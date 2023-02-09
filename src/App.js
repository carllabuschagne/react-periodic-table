import logo from './logo.svg';
import './App.css';


console.log("app called");
 

function Element(props) {
  return (
    <div className='wrapper'>
      <h1>{props.symbol}</h1>
      <h3>{props.no}</h3>
      <h3>{props.name}</h3>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      
      <Element symbol="He" name="Helium" no="1"></Element>
      <Element symbol="O" name="Oxygen" no="2"></Element>
      <Element symbol="Br" name="Berilium" no="3"></Element>
      <Element symbol="C" name="Carbon" no="4"></Element>
      <Element symbol="He" name="Helium" no="5"></Element>
      <Element symbol="He" name="Helium" no="6"></Element>
      <Element symbol="He" name="Helium" no="7"></Element>
      <Element symbol="He" name="Helium" no="8"></Element>
      <Element symbol="He" name="Helium" no="9"></Element>
      <Element symbol="O" name="Oxygen" no="10"></Element>
      <Element symbol="Br" name="Berilium" no="11"></Element>
      <Element symbol="C" name="Carbon" no="12"></Element>
      <Element symbol="He" name="Helium" no="13"></Element>
      <Element symbol="He" name="Helium" no="14"></Element>
      <Element symbol="He" name="Helium" no="15"></Element>
      <Element symbol="He" name="Helium" no="16"></Element>
      <Element symbol="He" name="Helium" no="17"></Element>
      <Element symbol="He" name="Helium" no="18"></Element>
    
<br />

<Element symbol="He" name="Helium" no="1"></Element>
      <Element symbol="O" name="Oxygen" no="2"></Element>
      <Element symbol="Br" name="Berilium" no="3"></Element>
      <Element symbol="C" name="Carbon" no="4"></Element>
      <Element symbol="He" name="Helium" no="5"></Element>
      <Element symbol="He" name="Helium" no="6"></Element>
      <Element symbol="He" name="Helium" no="7"></Element>
      <Element symbol="He" name="Helium" no="8"></Element>
      <Element symbol="He" name="Helium" no="9"></Element>
      <Element symbol="O" name="Oxygen" no="10"></Element>
      <Element symbol="Br" name="Berilium" no="11"></Element>
      <Element symbol="C" name="Carbon" no="12"></Element>
      <Element symbol="He" name="Helium" no="13"></Element>
      <Element symbol="He" name="Helium" no="14"></Element>
      <Element symbol="He" name="Helium" no="15"></Element>
      <Element symbol="He" name="Helium" no="16"></Element>
      <Element symbol="He" name="Helium" no="17"></Element>
      <Element symbol="He" name="Helium" no="18"></Element>
    
    </div>
  );
}

export default App;
