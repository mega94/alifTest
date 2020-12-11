import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import allActions from "./actions";
import Hall from "./hall";

const Clock = props => {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const seconds = useSelector(state => state.seconds);
  // Replaces componentDidMount and componentWillUnmount
  useEffect(() => {
    var timerID = setInterval(() => {
      tick();
      dispatch(allActions.countSeconds.secondsActions(seconds));
      if (seconds === 4) {
        dispatch(allActions.countSeconds.secondsRes());
      }
    }, 1000);
    return () => clearInterval(timerID);
  }, [seconds, dispatch]);

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>Текущая время: {date.toLocaleTimeString()}.</h2>
      <Hall />
    </div>
  );
};

export default Clock;
