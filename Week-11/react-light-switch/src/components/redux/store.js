import { createStore } from "redux";
import flipReducer from "./reducers/flipReducer";

export const store = createStore(flipReducer);
