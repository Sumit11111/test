import React from "react";
const Rate = () => {
  return <p style={styles.lineOverText}>₹6,8756</p>;
};

const styles = {
  lineOverText: {
    textDecoration: "line-through",
    fontSize: 10,
    marginLeft:50
  },
};

export default Rate;
