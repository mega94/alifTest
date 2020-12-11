import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";

const Hall = props => {
  const seconds = useSelector(state => state.seconds);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (seconds === 0) {
      setColor(generateRandomColor());
    }
  }, [seconds]);

  const generateRandomColor = () => {
    let r = Math.round(Math.random() * 255); //red 0 to 255
    let g = Math.round(Math.random() * 255); //green 0 to 255
    let b = Math.round(Math.random() * 255); //blue 0 to 255
    return "rgb(" + r + ", " + g + ", " + b + ")";
  };
  console.log(seconds);
  return (
    <div
      style={{
        padding: "5px",
        background: "'" + color !== "" ? color : "" + "'"
      }}
    >
      <span
        style={{
          color: "white"
        }}
      >
        Обновить фон через: {seconds}
      </span>
    </div>
  );
};

export default Hall;
