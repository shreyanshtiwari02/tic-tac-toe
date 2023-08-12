import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {
  return (
    < >
      <Board/>
    </>
  );
}

  function Board() {
    // adding the state for X and O interchange
    const [xIsNext, setXIsNext] = useState(true);

    // adding states for each square component in the board
    const [squares, setSquares]=  useState(Array(9).fill(null))

    function handleClick(i){
      if(squares[i]) return;
      
      const nextSquares= squares.slice();
      
      if(xIsNext ){
        nextSquares[i]='X';
      }
      else{
        nextSquares[i]='O';
      }
      
      setXIsNext(!xIsNext);
      setSquares(nextSquares);
    
      
    }
    function handleFirstSquareClick(){ // you can do ths for all the cells beacause 
                                       // when u pass (i) function runs as soon as it is passed
       handleClick(0);
    }

  return (
    <>
      <div className="board-row">
        <Square value ={squares[0]}  onSquareClick= {handleFirstSquareClick}  />
        <Square value ={squares[1]}  onSquareClick= {() => handleClick(1)}  />
        <Square value ={squares[2]}  onSquareClick= {() => handleClick(2)}  />
      </div>
      <div className="board-row">
        <Square value ={squares[3]}  onSquareClick= {() => handleClick(3)}  />
        <Square value ={squares[4]}  onSquareClick= {() => handleClick(4)}  />
        <Square value ={squares[5]}  onSquareClick= {() => handleClick(5)}  />
      </div>
      <div className="board-row">
        <Square value ={squares[6]}  onSquareClick= {() => handleClick(6)}  />
        <Square value ={squares[7]}  onSquareClick= {() => handleClick(7)}  />
        <Square value ={squares[8]}  onSquareClick= {() => handleClick(8)}  />
      </div>
    </>
  );
}


function Square({value,onSquareClick}){

  return (
    <button className="square" onClick={onSquareClick}  >{value}</button>
  );

}


export default App;
