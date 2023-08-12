import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <div className="square-board">
      <Square/><Square/><Square/>
      </div>
      <div className="square-board">
      <Square/><Square/><Square/>
      </div>
      <div className="square-board">
      <Square/><Square/><Square/>
      </div>
    </div>
  );
}

function Square({value}){

  function handleClick(){
    console.log("Clicked!");
  }


  return (
    <button className="square" onClick={handleClick} >{value}</button>
  );

}


export default App;
