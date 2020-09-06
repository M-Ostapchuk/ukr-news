import React from "react";
import { useEffect } from "react";

// Components
import Item from "../../components/news-item/news-item.component";
import Spinner from "../../components/spinner/spinner.component";
import ItemOverview from "../../components/item-overview/item-overview.component";

// Styles
import {
  OverviewContainer,
  OverviewWrapper,
} from "../../components/page-overview/page.overview.styles";

// Router
import { Route } from "react-router";

// Redux
import { connect } from "react-redux";
import { setPageUrl } from "../../redux/news/news.actions";

// Reselect
import {
  selectCollectionsWithId,
  selectPageUrl,
  selectFetching,
} from "../../redux/news/news.selectors";
import { createStructuredSelector } from "reselect";

const HomePage = ({
  collections,
  setPageUrl,
  url,
  isFetching,
  match,
  history,
}) => {
  useEffect(() => {
    setPageUrl({ country: url.country, category: " " });
  }, []);

  return (
    <React.Fragment>
      <Route exact path={`${match.path}`}>
        <OverviewContainer>
          {isFetching ? (
            <Spinner />
          ) : (
            <OverviewWrapper>
              {collections.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  history={history}
                  match={match}
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

export default connect(MapStateToProps, MapDispatchToProps)(HomePage);
