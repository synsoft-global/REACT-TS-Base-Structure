import {
  ThunkResult,
  SERVER_BASE_URL,
  SERVER_IMAGE_BASE_URL,
  API_KEY
} from "./_common";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #region ACTION TYPES
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// we use individual const's to avoid type widening and put them in a namespace so they are grouped in TypeDoc
namespace NActionTypeReceipt {
  export const receiptDataSuccess = "RECEIPT_DATA_SUCCESS";
  export const receiptDataError = "RECEIPT_DATA_ERROR";
  export const selectIdSuccess = "SELECT_ID_SUCCESS";
  export const selectIdError = "SELECT_ID_ERROR";
  export const selectFilterError = "SELECT_FILTER_ERROR";
  export const selectFilterSuccess = "SELECT_FILTER_ERROR";
  export const retailerDataSuccess = "RETAILER_DATA_SUCCESS";
  export const retailerDataError = "RETAILER_DATA_ERROR";
  export const imageDataSuccess = "IMAGE_DATA_SUCCESS";
  export const imageDataError = "IMAGE_DATA_ERROR";
}

// #endregion ACTION TYPES
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #region ACTION INTERFACES
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** actions related to user authorization */
namespace NActionReceiptData {
  export interface IReceiptDataError {
    type: typeof NActionTypeReceipt.receiptDataError;
    payload: string;
  }

  export interface IReceiptDataSuccess {
    type: typeof NActionTypeReceipt.receiptDataSuccess;
    payload: any;
  }

  export interface ISelectIdSuccess {
    type: typeof NActionTypeReceipt.selectIdSuccess;
    payload: any;
  }

  export interface ISelectIdError {
    type: typeof NActionTypeReceipt.selectIdError;
    payload: any;
  }

  export interface ISelectFilterSuccess {
    type: typeof NActionTypeReceipt.selectFilterSuccess;
    payload: any;
  }

  export interface ISelectFilterError {
    type: typeof NActionTypeReceipt.selectFilterError;
    payload: any;
  }

  export interface IRetailerDataError {
    type: typeof NActionTypeReceipt.retailerDataError;
    payload: string;
  }

  export interface IRetailerDataSuccess {
    type: typeof NActionTypeReceipt.retailerDataSuccess;
    payload: any;
  }

  export interface IImageDataError {
    type: typeof NActionTypeReceipt.imageDataError;
    payload: string;
  }

  export interface IImageDataSuccess {
    type: typeof NActionTypeReceipt.imageDataSuccess;
    payload: any;
  }

  export type TReceiptData =
    | IReceiptDataError
    | IReceiptDataSuccess
    | ISelectIdSuccess
    | ISelectIdError
    | ISelectFilterError
    | ISelectFilterSuccess
    | IRetailerDataError
    | IRetailerDataSuccess
    | IImageDataError
    | IImageDataSuccess;
}

// #endregion ACTION INTERFACES
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #region ACTION CREATORS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const actionReceipt = {
  receiptDataError: (
    errorString: string
  ): NActionReceiptData.IReceiptDataError => ({
    type: NActionTypeReceipt.receiptDataError,
    payload: errorString
  }),

  receiptDataSuccess: (
    receipts: any,
    locationId: string,
    userId: string
  ): NActionReceiptData.IReceiptDataSuccess => ({
    type: NActionTypeReceipt.receiptDataSuccess,
    payload: { receipts, locationId, userId }
  }),

  selctedIdError: (errorString: string): NActionReceiptData.ISelectIdError => ({
    type: NActionTypeReceipt.selectIdError,
    payload: errorString
  }),

  selctedIdSuccess: (
    selectedReceiptId: any,
    receipt: any
  ): NActionReceiptData.ISelectIdSuccess => ({
    type: NActionTypeReceipt.selectIdSuccess,
    payload: { selectedReceiptId, receipt }
  }),

  selctedFilterError: (
    errorString: string
  ): NActionReceiptData.ISelectFilterError => ({
    type: NActionTypeReceipt.selectFilterError,
    payload: errorString
  }),

  selctedFilterSuccess: (
    filterDiscount: boolean,
    filterDuplicate: boolean,
    filterInvalid: boolean,
    startDate: string,
    endDate: string,
    receipts: any
  ): NActionReceiptData.ISelectFilterSuccess => ({
    type: NActionTypeReceipt.selectFilterSuccess,
    payload: {
      filterDiscount,
      filterDuplicate,
      filterInvalid,
      startDate,
      endDate,
      receipts
    }
  }),

  retailerDataError: (
    errorString: string
  ): NActionReceiptData.IRetailerDataError => ({
    type: NActionTypeReceipt.retailerDataError,
    payload: errorString
  }),

  retailerDataSuccess: (
    RetailerData: any
  ): NActionReceiptData.IRetailerDataSuccess => ({
    type: NActionTypeReceipt.retailerDataSuccess,
    payload: RetailerData
  }),

  imageDataError: (
    errorString: string
  ): NActionReceiptData.IImageDataError => ({
    type: NActionTypeReceipt.imageDataError,
    payload: errorString
  }),

  imageDataSuccess: (ImageData: any): NActionReceiptData.IImageDataSuccess => ({
    type: NActionTypeReceipt.imageDataSuccess,
    payload: ImageData
  }),

  thunk: {
    /** login user - TODO: redirect to license or home page upon successful login */
    getRecieptData: (
      locationId: string,
      userId: string
    ): ThunkResult<Promise<any>> => async dispatch => {
      try {
        const resp = await fetch(
          SERVER_BASE_URL +
            "/smcs/sales_data/1c8465d119ecf0ae4d8456d4a1e8351e/f341fa45e6867b6fb466",
          {
            method: "POST",
            headers: {
              apikey: API_KEY
            }
          }
        );
        const receipts = await resp.json();
        if (receipts.status !== "success") {
          throw new Error("Receipts not found");
        }
        dispatch(
          actionReceipt.receiptDataSuccess(receipts, locationId, userId)
        );
        return Promise.resolve(receipts);
      } catch (e) {
        dispatch(actionReceipt.receiptDataError(e.message));
        return Promise.reject(e);
      }
    },

    setSelctedId: (
      selectedReceiptId: string,
      receipt: any
    ): ThunkResult<Promise<any>> => async dispatch => {
      try {
        dispatch(actionReceipt.selctedIdSuccess(selectedReceiptId, receipt));
        return Promise.resolve({ selectedReceiptId, receipt });
      } catch (e) {
        dispatch(actionReceipt.selctedIdError(e.message));
        return Promise.reject(e);
      }
    },

    setSelctedFilter: (
      filterDiscount: boolean,
      filterDuplicate: boolean,
      filterInvalid: boolean,
      startDate: string,
      endDate: string,
      receipts: any
    ): ThunkResult<Promise<any>> => async dispatch => {
      try {
        dispatch(
          actionReceipt.selctedFilterSuccess(
            filterDiscount,
            filterDuplicate,
            filterInvalid,
            startDate,
            endDate,
            receipts
          )
        );
        return Promise.resolve({
          filterDiscount,
          filterDuplicate,
          filterInvalid,
          startDate,
          endDate,
          receipts
        });
      } catch (e) {
        dispatch(actionReceipt.selctedFilterError(e.message));
        return Promise.reject(e);
      }
    },

    getRetailerData: (): ThunkResult<Promise<any>> => async dispatch => {
      try {
        const resp = await fetch(SERVER_BASE_URL + "/smcs/retailers", {
          method: "GET",
          headers: {
            apikey: API_KEY
          }
        });
        const retailers = await resp.json();
        if (retailers.status !== "success") {
          throw new Error("Retailers not found");
        }
        dispatch(actionReceipt.retailerDataSuccess(retailers));
        return Promise.resolve(retailers);
      } catch (e) {
        dispatch(actionReceipt.retailerDataError(e.message));
        return Promise.reject(e);
      }
    },

    getImageData: (
      userId: string,
      locationId: string,
      deviceId: string,
      receiptId: string
    ): ThunkResult<Promise<any>> => async dispatch => {
      try {
        const resp = await fetch(
          SERVER_IMAGE_BASE_URL +
            "/integrations/pos/printer/smcs/receipt/" +
            userId +
            "/" +
            locationId +
            "/" +
            deviceId +
            "/" +
            receiptId,
          {
            method: "GET"
          }
        );
        const ImageData = await resp.json();
        if (!ImageData.receipts) {
          throw new Error("Retailers not found");
        }
        dispatch(actionReceipt.imageDataSuccess(ImageData));
        return Promise.resolve(ImageData);
      } catch (e) {
        dispatch(actionReceipt.imageDataError(e.message));
        return Promise.reject(e);
      }
    }
  }
};

// #endregion ACTION CREATORS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { actionReceipt, NActionTypeReceipt, NActionReceiptData };
