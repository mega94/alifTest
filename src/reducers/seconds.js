const counter = (state = 0, action) => {
  switch (action.type) {
    case "seconds":
      return state + 1;
    case "res":
      return (state = 0);
    default:
      return state;
  }
};

export default counter;
