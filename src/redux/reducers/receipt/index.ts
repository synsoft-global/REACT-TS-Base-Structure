import { NActionTypeReceipt, NActionReceiptData } from "src/redux/actions";
import { AnyAction } from "redux";

// Initial State
const initialState = {
  receipts: [],
  receipt_data: {},
  startDate: null,
  endDate: null,
  selectedReceiptId: "",
  filterDiscount: false,
  filterDuplicate: false,
  filterInvalid: false,
  location_id: "",
  user_id: "",
  retailers: [],
  retailers_data: {},
  image_data: {}
};

export const receiptReducerFactory = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case "persist/REHYDRATE": {
      return state; // NOP, just wanted to log the payload
    }
    case NActionTypeReceipt.receiptDataSuccess: {
      return {
        ...state,
        filtered_receipt: (action as NActionReceiptData.IReceiptDataSuccess)
          .payload.receipts.sales_data,
        receipts: (action as NActionReceiptData.IReceiptDataSuccess).payload
          .receipts,
        location_id: (action as NActionReceiptData.IReceiptDataSuccess).payload
          .locationId,
        user_id: (action as NActionReceiptData.IReceiptDataSuccess).payload
          .userId
      };
    }
    case NActionTypeReceipt.receiptDataError: {
      return (action as NActionReceiptData.IReceiptDataError).payload;
    }
    case NActionTypeReceipt.selectIdSuccess: {
      return {
        ...state,
        selectedReceiptId: (action as NActionReceiptData.ISelectIdSuccess)
          .payload.selectedReceiptId,
        receipt_data: (action as NActionReceiptData.ISelectIdSuccess).payload
          .receipt
      };
    }
    case NActionTypeReceipt.selectIdError: {
      return (action as NActionReceiptData.ISelectIdError).payload;
    }
    case NActionTypeReceipt.selectFilterSuccess: {
      return {
        ...state,
        filterDiscount: (action as NActionReceiptData.ISelectIdSuccess).payload
          .filterDiscount,
        filterDuplicate: (action as NActionReceiptData.ISelectIdSuccess).payload
          .filterDuplicate,
        filterInvalid: (action as NActionReceiptData.ISelectIdSuccess).payload
          .filterInvalid,
        startDate: (action as NActionReceiptData.ISelectIdSuccess).payload
          .startDate,
        endDate: (action as NActionReceiptData.ISelectIdSuccess).payload
          .endDate,
        filtered_receipt: (action as NActionReceiptData.ISelectIdSuccess)
          .payload.receipts
      };
    }
    case NActionTypeReceipt.selectFilterError: {
      return (action as NActionReceiptData.ISelectFilterError).payload;
    }
    case NActionTypeReceipt.retailerDataSuccess: {
      return {
        ...state,
        retailers: (action as NActionReceiptData.IRetailerDataSuccess).payload
          .retailers,
        retailers_data: (action as NActionReceiptData.IRetailerDataSuccess)
          .payload
      };
    }
    case NActionTypeReceipt.retailerDataError: {
      return (action as NActionReceiptData.IRetailerDataError).payload;
    }
    case NActionTypeReceipt.imageDataSuccess: {
      return {
        ...state,
        image_data: (action as NActionReceiptData.IImageDataSuccess).payload
          .receipts
      };
    }
    case NActionTypeReceipt.imageDataError: {
      return (action as NActionReceiptData.IImageDataError).payload;
    }
    default:
      return null;
  }
};

// export default combineReducers(receiptReducerFactory);
