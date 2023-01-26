import { Actions } from "../actionTypes/index";

const initialState = { isLightOn: true };

function flipReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.SWITCH:
      return {
        ...state,
        isLightOn: !state.isLightOn,
      };
    default:
      return state;
  }
}

export default flipReducer;
