import React from "react";

const style = {
  background: "#deecf9",
  border: "2px solid #004578",
  fontSize: "40px",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }: { value: string; onClick: () => void }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
