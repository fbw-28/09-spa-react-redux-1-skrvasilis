import React from "react";
import { connect } from "react-redux";

function ComponentX(props) {
  console.log(props)
  return (
    <div>
      <h1>B, x: {props.state.x}
      <button onClick={() => props.dispatch({ type: "incrementY" })}>
        Increment Y
      </button>
      </h1>{" "}
     
    </div>
  );
}

export default connect((state) => ({ state }))(ComponentX);
