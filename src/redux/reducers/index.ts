import { combineReducers } from "redux";
import { receiptReducerFactory } from "./receipt";

/** type of global state */
// tslint:disable-next-line:no-empty-interface
interface IStoreState {}

export default combineReducers({
  receipt: receiptReducerFactory
});

export { IStoreState };
