import React, { useCallback } from "react";
import {
  OverviewContainer,
  OverviewWrapper,
} from "../../components/page-overview/page.overview.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCollectionsWithId,
  selectPageUrl,
  selectFetching,
} from "../../redux/news/news.selectors";
import Item from "../../components/news-item/news-item.component";
import { setPageUrl } from "../../redux/news/news.actions";
import { useEffect } from "react";

import Spinner from "../../components/spinner/spinner.component";

import { Route } from "react-router";

import ItemOverview from "../../components/item-overview/item-overview.component";


const Health = ({ collections, setPageUrl, match, url, isFetching, history }) => {
  const category = match.url.replace(/\//, "");

  useEffect(() => {
    setPageUrl({ country: url.country, category: category });
  }, [match.url]);



  return (
    <React.Fragment>
      <Route exact path={`${match.path}`}>
        <OverviewContainer>
          {isFetching ? (
            <Spinner />
          ) : (
            <OverviewWrapper>
              {collections.map((item) => (
                <Item item={item} key={item.id} history={history} match={match} />
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
});

const MapDispatchToProps = (dispatch) => ({
  setPageUrl: (url) => dispatch(setPageUrl(url)),
});

export default connect(MapStateToProps, MapDispatchToProps)(Health);
