const UserActionTypes = {
  SIGN_IN_START: "SIGN_IN_START",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
  GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
  GOOGLE_SIGN_IN_SUCCESS: "GOOGLE_SIGN_IN_SUCCESS",
  GOOGLE_SIGN_IN_FAILURE: "GOOGLE_SIGN_IN_FAILURE",
  SIGN_OUT_START: "SIGN_OUT_START",
  SIGN_OUT_SUCCESS: "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILURE: "SIGN_OUT_FAILURE",
  SIGN_UP_START: "SIGN_UP_START",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
  SIGN_UP_FAILURE: "SIGN_UP_FAILURE",
  GET_CURRENT_USER_START: "GET_CURRENT_USER_START",
  GET_CURRENT_USER_SUCCESS: "GET_CURRENT_USER_SUCCESS",
  GET_CURRENT_USER_FAILURE: "GET_CURRENT_USER_FAILURE",
  GET_USER_DATA_START: "GET_USER_DATA_START",
  GET_USER_DATA_SUCCESS: "GET_USER_DATA_SUCCESS",
  USER_FAILURE: "USER_FAILURE",
  UPDATE_USER_COLLECTIONS: "UPDATE_USER_COLLECTIONS"
};

export default UserActionTypes
