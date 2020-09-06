import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  userCollectionsFetching: false,
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
    case UserActionTypes.GET_CURRENT_USER_START:
      return {
        ...state,
        userFetching: true
      };
    case UserActionTypes.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        err: null,
        userFetching: false,
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
        userCollectionsFetching: true,
      };
    case UserActionTypes.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        userCollections: action.payload,
        userCollectionsFetching: false,
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
