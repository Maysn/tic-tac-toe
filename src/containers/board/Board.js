import React from "react";
import "../board/Board.css";
import { onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../../firebase";

function Board(props) {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [X, setX] = useState(true);
  const [updatedBoard, setUpdatedBoard] = useState();

  useEffect(() => {
    const writeUserData = () => {
      set(ref(db, "board/"), board);
    };
    writeUserData();
  }, [board, setBoard]);

  useEffect(() => {
    const boardRef = ref(db, "board/");
    onValue(boardRef, (snapshot) => {
      const data = snapshot.val();
      setUpdatedBoard(data);
    });
  }, [setUpdatedBoard]);

  const play = (index) => {
    const boardCopy = [...updatedBoard];
    if (boardCopy[index]) return;
    boardCopy[index] = X ? "X" : "O";
    setBoard(boardCopy);
    console.log(board);
    setX(!X);
  };

  return (
    <div className="board">
      {updatedBoard?.map((cell, index) => (
        <div className="cell" key={index} onClick={() => play(index)}>
          {cell}
        </div>
      ))}
      <button
        onClick={() => setUpdatedBoard(["", "", "", "", "", "", "", "", ""])}
      >
        Reset
      </button>
    </div>
  );
}

export default Board;
