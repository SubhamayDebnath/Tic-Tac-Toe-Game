import React from "react";
import Card from "../Card/Card";
import { useState } from "react";
import ChecKWinner from "../../Helpers/CheckWinner";
import useSound from 'use-sound';
import clickSound from '../../Sounds/note-low.mp3'
import winnerSong from '../../Sounds/victory.mp3'
import gameOverSong from '../../Sounds/game-over-tie.mp3'
import "./Grid.css";
function Grid({ numOfCards }) {
  const [clickSoundPlay] = useSound(clickSound,{ volume: 0.005 });
  const [winnerSongPlay] = useSound(winnerSong,{ volume: 0.5 });
  const [gameOverSongPlay] = useSound(gameOverSong,{volume:0.5})
  const [board, setBoard] = useState(Array(numOfCards).fill(""));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [count, setCount] = useState(0);
  function play(index) {
    if (turn == true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }
    const win = ChecKWinner(board, turn ? "O" : "X");
    if (win) {
      setWinner(win);
      winnerSongPlay()
    }

    setBoard([...board]);
    setTurn(!turn);
    setCount(count + 1);
  }

  function reset() {
    setTurn(true);
    setWinner(null);
    setBoard(Array(numOfCards).fill(""));
    setCount(0);
  }
 
  return (
    <div className="grid_container">
      {!winner && (
        <h1 className="player_info">Player : {turn ? "O" : "X"}</h1>
      )}
      {
        count == 9 && (gameOverSongPlay())
      }
      {winner && (
        <>
          <h1 className="winner">Winner is {winner} 🥇</h1>
        </>
      )}
      <div className="grids">
        {board.map((elm, idx) => (
          <Card
            gameEnd={winner ? true : false}
            key={idx}
            onPlay={play}
            player={elm}
            index={idx}
            onClick={clickSoundPlay()}
          />
        ))}
      </div>
      <div className="btn_container">
        <button onClick={reset}>{winner ? "Play Again" : "Reset"}</button>
      </div>
    </div>
  );
}

export default Grid;
