import "./App.css";
import { Actions } from "./redux/actionTypes";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch({ type: e.target.value });
  };

  return (
    <div className="App">
      <div className="countDisplay">
        {useSelector((state) => state).StepCounter.step}
      </div>
      <div className="buttons">
        <button
          className="resetStepButton"
          value={Actions.RESET_STEP}
          onClick={handleClick}
        >
          Reset Steps
        </button>

        <button
          className="addStepButton"
          value={Actions.INC_STEP}
          onClick={handleClick}
        >
          Add Steps
        </button>
      </div>
    </div>
  );
}

export default App;
