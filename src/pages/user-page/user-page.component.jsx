import React, { Component, useEffect, useCallback } from "react";

// Components
import Item from "../../components/news-item/news-item.component";

// Styles
import {
  OverviewContainer,
  OverviewWrapper,
} from "../../components/page-overview/page.overview.styles";

// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCollectionsWithId,
  selectPageUrl,
  selectFetching,
} from "../../redux/news/news.selectors";

import ItemOverview from "../../components/item-overview/item-overview.component";

import { Route } from "react-router";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectUserCollections,
  selectUserFetching,
} from "../../redux/user/user.selectors";
import { updateUserCollections } from "../../redux/user/user.actions";
import { getCurrentUser, db } from "../../firebase/firebase";

const UserPage = ({
  match,
  history,
  userCollections,
  isUserFetching,
  updateUserCollections,
}) => {
  useEffect(() => {
    getUserDataHandler();
  }, [match]);

  const getUserDataHandler = async () => {
    const user = await getCurrentUser();
    const data = [];
    const collectionRef = db.collection(`users/${user.uid}/collections`);
    collectionRef.onSnapshot(async (snapshot) => {
      await snapshot.docs.forEach((doc) => {
        data.push(doc.data());
      });
      updateUserCollections(data);
      data.splice(0, data.length);
    });
  };

  return (
    <React.Fragment>
      <Route exact path={`${match.path}`}>
        <OverviewContainer>
          {isUserFetching ? (
            <Spinner />
          ) : (
            <OverviewWrapper>
              {userCollections.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  match={match}
                  history={history}
                  isWriteWhole="true"
                  isItemFromFirebase="true"
                />
              ))}
            </OverviewWrapper>
          )}
        </OverviewContainer>
      </Route>
      <Route path={`${match.path}/:id`} component={ItemOverview} />
    </React.Fragment>
  );
};

const MapStateToProps = createStructuredSelector({
  collections: selectCollectionsWithId,
  url: selectPageUrl,
  isFetching: selectFetching,
  userCollections: selectUserCollections,
  isUserFetching: selectUserFetching,
});

const MapDispatchToProps = (dispatch) => ({
  updateUserCollections: (data) => dispatch(updateUserCollections(data)),
});

export default connect(MapStateToProps, MapDispatchToProps)(UserPage);
