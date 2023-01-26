import React from "react";
import { Actions } from "./redux/actionTypes";
import { connect } from "react-redux";

function Room({ isLightOn, dispatch }) {
  const flipLight = () => {
    dispatch({ type: Actions.SWITCH });
  };

  const lightedness = isLightOn ? "lit" : "dark";

  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={flipLight}>flip</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLightOn: state.isLightOn,
});

const ConnectedRoom = connect(mapStateToProps)(Room);

export default ConnectedRoom;
