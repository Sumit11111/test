import React from "react";

const Discount = () => {
  return (
  <div style={flag}>.  20
      <div style={after}></div>
    </div>
  );
};
const flag = {
  width: "15px",
  height: "12px",
  position: "relative",
  backgroundColor: "red",
  color: "white",
  fontSize: 8,
  fontWeight:'bold',
  alignItem:'right',
  margin:10
};

const after = {
  content: "sdsada ",
  position: "absolute",
  left: '-10px',
  bottom: 0,
  width: 0,
  height: 0,
  borderRight: "10px solid red",
  borderTop: "6px solid transparent",
  borderBottom: "6px solid transparent",
};

export default Discount;
