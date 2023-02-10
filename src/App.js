import logo from './logo.svg';
import './App.css';
import data from './data/elements.json';

console.log("app called");

 


function Element(props) {
 
  return (

    data.map((data) => (
 
      <div className={"element element-"+data.number}>
        <h3>{data.number}</h3>
        <h1>{data.symbol}</h1>
        <h3>{data.atomic_mass}</h3>
      </div> 
    ))
);
}


function App() {
  return (
    <div className="App">
      <Element />
      
      
    
    </div>
  );
}

export default App;
