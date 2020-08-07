import NewsActionTypes from "./news.types";

const INITIAL_STATE = {
  collections: [],
  isFetching: false,
  errMessage: undefined,
  pageUrl: {
    category: "",
    country: "ua",
  },
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case NewsActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    case NewsActionTypes.SET_PAGE_URL:
      return {
        ...state,
        pageUrl: { ...state.pageUrl, ...action.payload },
      };
    case NewsActionTypes.SET_COUNTRY:
      return {
        ...state,
        pageUrl: { ...state.pageUrl, ...action.payload },
      };
    case NewsActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errMessage: action.payload,
      };
    default:
      return state
      
  }
};

export default newsReducer;
