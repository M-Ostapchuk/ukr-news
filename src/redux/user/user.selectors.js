import { createSelector } from "reselect";

export const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectUserCollections = createSelector(
  [selectUser],
  (user) => user.userCollections
)

export const selectFetchingUserCollections = createSelector(
  [selectUser],
  (user) => user.userCollectionsFetching
)

export const selectUserFetching = createSelector(
  [selectUser],
  (user) => user.userFetching
)
