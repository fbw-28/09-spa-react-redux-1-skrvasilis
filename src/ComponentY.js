import React from "react";
import { connect } from "react-redux";

function ComponentY(props) {
  return (
    <div>
      <h1>C, y: {props.state.y}
      <button onClick={() => props.dispatch({ type: "incrementX" })}>
        Increment X
      </button>
      </h1>{" "}
    
    </div>
  );
}

export default connect((state) => ({ state }))(ComponentY);
