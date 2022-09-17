import React from "react";

const style = {
  background: "lightblue",
  border: "2px solid darkblue",
  fontSize: "30px",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }: { value: string; onClick: () => void }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
