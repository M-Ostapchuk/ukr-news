import { createSelector } from "reselect";

export const selectNews = (state) => state.news;

export const selectCollections = createSelector(
  [selectNews],
  (news) => news.collections
);

export const selectPageUrl = createSelector(
  [selectNews],
  (news) => news.pageUrl
);

export const selectUrl = createSelector(
  [selectPageUrl],
  (pageUrl) =>
    `https://newsapi.org/v2/top-headlines?country=${pageUrl.country}&category=${pageUrl.category}&apiKey=587e67c49058413b8c59a9bc798f0bfb`
);

// export const selectSearchUrl = createSelector(
//   [selectNews],
//   (news) =>
//     `http://newsapi.org/v2/everything?q=${news.searchUrl}&from=2020-08-10&sortBy=popularity&apiKey=587e67c49058413b8c59a9bc798f0bfb`
// );

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
    collections.map((item) => {
      let docId = "";
      for (let i = 0; i < item.title.length; i++) {
        docId += item.title.codePointAt(i);
        docId = docId.slice(0, 21);
      }
      return Object.defineProperty(item, "id", {
        value: docId,
      });
    })
);

export const selectCollectionItem = (urlParam) => {
  return createSelector(selectCollectionsWithId, (items) =>
    items.find((item) => item.id === +urlParam)
  );
};
