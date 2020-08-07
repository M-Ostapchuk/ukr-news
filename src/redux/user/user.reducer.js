import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  userFetching: false,
  err: null,
  userCollections: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        err: null,
        currentUser: action.payload,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        err: null,
        currentUser: null,
      };
    case UserActionTypes.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        err: null,
        currentUser: action.payload,
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        err: null,
        currentUser: action.payload,
      };
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    case UserActionTypes.GET_CURRENT_USER_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        currentUser: null,
        err: action.payload,
      };
    case UserActionTypes.GET_USER_DATA_START:
      return {
        ...state,
        userFetching: true,
      };
    case UserActionTypes.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        userFetching: false,
        userCollections: action.payload,
      };
    case UserActionTypes.USER_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    case UserActionTypes.UPDATE_USER_COLLECTIONS:
      return {
        ...state,
        userCollections: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
