import NewsActionTypes from "./news.types";

export const fetchCollectionStart = (url) => ({
  type: NewsActionTypes.FETCH_COLLECTIONS_START,
  payload: url,
});

export const fetchCollectionSuccess = (collectionMap) => ({
  type: NewsActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionFailure = (errMessage) => ({
  type: NewsActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errMessage,
});

export const searchCollectionStart = (url) => ({
  type: NewsActionTypes.SEARCH_COLLECTIONS_START,
  payload: url,
});

export const searchCollectionSuccess = (collectionMap) => ({
  type: NewsActionTypes.SEARCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const searchCollectionFailure = (errMessage) => ({
  type: NewsActionTypes.SEARCH_COLLECTIONS_FAILURE,
  payload: errMessage,
});

export const setPageUrl = (pageUrl) => ({
  type: NewsActionTypes.SET_PAGE_URL,
  payload: pageUrl,
});

export const setCountry = (pageUrl) => ({
  type: NewsActionTypes.SET_COUNTRY,
  payload: pageUrl,
});
