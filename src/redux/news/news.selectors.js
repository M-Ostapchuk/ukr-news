import { createSelector } from "reselect";

export const selectNews = (state) => state.news;

export const selectCollections = createSelector(
  [selectNews],
  (news) => news.collections
);

export const selectPageUrl = createSelector(
  [selectNews],
  (news) => news.pageUrl 
)

export const selectUrl = createSelector(
  [selectPageUrl],
  (pageUrl) => `https://newsapi.org/v2/top-headlines?country=${pageUrl.country}&category=${pageUrl.category}&apiKey=587e67c49058413b8c59a9bc798f0bfb`
);

export const selectFetching = createSelector(
  [selectNews],
  (news) => news.isFetching
);

export const selectErrorMessage = createSelector(
  [selectNews],
  (news) => news.errMessage
);

export const selectCollectionsWithId = createSelector(
  selectCollections,
  (collections) => 
    collections.map((item, index) => {
      return Object.defineProperty(item, 'id', {
        value: index + 1
      });
    })
);

export const selectCollectionItem = urlParam => {
  return createSelector(
    selectCollectionsWithId,
    items => items.find(item => item.id === +urlParam)
  )
}

