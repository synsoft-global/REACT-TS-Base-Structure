/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */
import {
  NActionTypeReceipt,
  NActionReceiptData,
  actionReceipt as receipt
} from "./receipt";
export { ThunkDispatchAction, ThunkResult } from "./_common";

/** Top-level action object */
const action = {
  receipt
};

namespace NAction {
  export type TAll = typeof action;
}

export default action;

export { NAction, NActionTypeReceipt, NActionReceiptData };
