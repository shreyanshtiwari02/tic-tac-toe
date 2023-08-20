import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {


  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    // TODO
    setXIsNext(!xIsNext);
    setHistory([...history,nextSquares]); // using the spread operator to append to the current history array

  }
  function jumpTo(nextMove) {
    history.pop();
 
  }
  const moves = history.map((squares,move) =>{
    let description;
    if(move===0){
      description= " Go to game start";
    }
    else{
      description= "Go to move #"+move;
    }
    
    return(
      <li>
        <button onClick={()=> jumpTo(move)}>{description}</button>
      </li>
    );
  }
  
  )


  return (
    <div>

      <div className='game-board' >
        <Board xIsNext={xIsNext} squares= {currentSquares} onPlay={handlePlay} />
      </div>

      <div className="game-info">
        <ol>{moves}</ol>
      </div>

    </div>
  );
}

  function Board({ xIsNext, squares, onPlay }) {
    
    // adding states for each square component in the board
    // const [squares, setSquares]=  useState(Array(9).fill(null))
    function handleClick(i) {
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      onPlay(nextSquares);     
      
    }
    // function handleRestart() {
    //     const nullArray = Array(9).fill(null);
    //     // setSquares(nullArray);
    // }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    
    // function handleFirstSquareClick(){ // you can do ths for all the cells beacause 
    //                                    // when u pass (i) function runs as soon as it is passed
    //    handleClick(0);
    // }

    return (
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}