import React, { useEffect } from "react";

// Components
import Header from "../../components/header/header.component";
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
import { setPageUrl } from "../../redux/news/news.actions";

import ItemOverview from "../../components/item-overview/item-overview.component";

import { Route } from "react-router";
import Spinner from "../../components/spinner/spinner.component";

const Busines = ({
  collections,
  match,
  setPageUrl,
  url,
  isFetching,
  history,
}) => {
  const category = match.url.replace(/\//, "");

  useEffect(() => {
    setPageUrl({ country: url.country, category: category });
  }, []);

  return (
    <React.Fragment>
      <Route exact path={`${match.path}`}>
        <OverviewContainer>
          <Header />
          {isFetching ? (
            <Spinner />
          ) : (
            <OverviewWrapper>
              {collections.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  match={match}
                  history={history}
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
});

const MapDispatchToProps = (dispatch) => ({
  setPageUrl: (url) => dispatch(setPageUrl(url)),
});

export default connect(MapStateToProps, MapDispatchToProps)(Busines);
