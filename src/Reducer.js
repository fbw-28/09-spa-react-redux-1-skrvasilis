const initialState = {
  x: 10,
  y: 13,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "incrementY":
      return {...state, y:state.y+1}

    case "incrementX":
      return {...state, x:state.x+1}
    default:
      return state;
  }
};
