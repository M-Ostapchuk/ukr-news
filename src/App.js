import React, { useEffect } from "react";
import "./App.css";

// React router
import { Switch, Route, Redirect } from "react-router-dom";

// Components
// ------

// Pages
import HomePage from "./pages/homepage/homepage.component";
import Busines from "./pages/bussines-page/buisnes.component";
import Entertainment from "./pages/entertainment-page/entertainment.component";
import Health from "./pages/health-page/health.component";
import Science from "./pages/science-page/science.component";
import Sports from "./pages/sports-page/sports.component";
import Technology from "./pages/technology-page/technology.component";

// Redux
import { connect } from "react-redux";
import { fetchCollectionStart } from "./redux/news/news.actions";

// Reselect
import { createStructuredSelector } from "reselect";
import { selectUrl } from "./redux/news/news.selectors";

const App = ({ url, fetchCollectionStart }) => {
  useEffect(() => {
    fetchCollectionStart(url);
  }, [url]);

  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/homepage" />} />

      <Route exact path="/homepage" component={HomePage} />

      <Route path="/business" component={Busines} />

      <Route path="/entertainment" component={Entertainment} />

      <Route path="/health" component={Health} />

      <Route path="/science" component={Science} />

      <Route path="/sports" component={Sports} />

      <Route path="/technology" component={Technology} />
    </Switch>
  );
};

const mapStateToProps = createStructuredSelector({
  url: selectUrl,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: (url) => dispatch(fetchCollectionStart(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
