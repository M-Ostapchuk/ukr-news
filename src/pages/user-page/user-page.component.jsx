import React, { useEffect } from "react";

// Components
import Item from "../../components/news-item/news-item.component";
import ItemOverview from "../../components/item-overview/item-overview.component";
import Spinner from "../../components/spinner/spinner.component";

// Styles
import {
  OverviewContainer,
  OverviewWrapper,
} from "../../components/page-overview/page.overview.styles";

// Router
import { Route } from "react-router";


// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCollectionsWithId,
  selectPageUrl,
} from "../../redux/news/news.selectors";
import { updateUserCollections } from "../../redux/user/user.actions";

// Select
import {
  selectUserCollections,
  selectFetchingUserCollections,
} from "../../redux/user/user.selectors";

// Firebase
import { db, getCurrentUser } from "../../firebase/firebase";

const UserPage = ({
  match,
  history,
  userCollections,
  isUserCollectionsFetching,
  updateUserCollections
}) => {
  useEffect(() => {
    getUserDataHandler();
  }, []);


  const getUserDataHandler = async () => {
    const data = [];
    const user = await getCurrentUser()
    const collectionRef = db.collection(`users/${user.uid}/collections`);
    collectionRef.onSnapshot(async (snapshot) => {
      await snapshot.docs.forEach((doc) => {
        data.push(doc.data());
      });
      await updateUserCollections(data);
      data.splice(0, data.length);
    });
  };


  return (
    <React.Fragment>
      <Route exact path={`${match.path}`}>
        <OverviewContainer>
          {isUserCollectionsFetching? (
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
  userCollections: selectUserCollections,
  isUserCollectionsFetching: selectFetchingUserCollections,
});

const MapDispatchToProps = (dispatch) => ({
  updateUserCollections: (data) => dispatch(updateUserCollections(data)),
});

export default connect(MapStateToProps, MapDispatchToProps)(UserPage);
