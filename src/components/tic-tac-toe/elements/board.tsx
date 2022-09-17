import React from "react";

import Square from "./square";

const style = {
  border: "4px solid #004578",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({
  squares,
  onClick,
}: {
  squares: string[];
  onClick: (i: number) => void;
}) => (
  <div style={style}>
    {squares.map((square: string, i: number) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
