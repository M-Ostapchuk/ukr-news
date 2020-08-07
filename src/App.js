import React, { useEffect } from "react";
import "./App.css";

// React router
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Header from "./components/header/header.component";

// Pages
import HomePage from "./pages/homepage/homepage.component";
import Busines from "./pages/bussines-page/buisnes.component";
import Entertainment from "./pages/entertainment-page/entertainment.component";
import Health from "./pages/health-page/health.component";
import Science from "./pages/science-page/science.component";
import Sports from "./pages/sports-page/sports.component";
import Technology from "./pages/technology-page/technology.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import UserPage from "./pages/user-page/user-page.component";

// Redux
import { connect } from "react-redux";
import { fetchCollectionStart } from "./redux/news/news.actions";

// Reselect
import { createStructuredSelector } from "reselect";
import { selectUrl } from "./redux/news/news.selectors";
import { getCurrentUserStart, getUserDataStart } from "./redux/user/user.actions";

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPlusCircle, faCheckCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { selectCurrentUser } from "./redux/user/user.selectors";

library.add(fab, faPlusCircle, faCheckCircle, faTrashAlt);

const App = ({ url, fetchCollectionStart, currentUser, getUserDataStart }) => {
  useEffect(() => {
    fetchCollectionStart(url);
  }, [url]);

  return (
    <div className='app-container'>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/homepage" />} />

        <Route path="/homepage" component={HomePage} />

        <Route path="/business" component={Busines} />

        <Route path="/entertainment" component={Entertainment} />

        <Route path="/health" component={Health} />

        <Route path="/science" component={Science} />

        <Route path="/sports" component={Sports} />

        <Route path="/technology" component={Technology} />

        <Route path="/signinandsignup" component={SignInAndSignUp} />

        <Route path="/userpage" component={UserPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  url: selectUrl,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: (url) => dispatch(fetchCollectionStart(url)),
  getCurrentUserStart: () => dispatch(getCurrentUserStart()),
  getUserDataStart: () => dispatch(getUserDataStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
