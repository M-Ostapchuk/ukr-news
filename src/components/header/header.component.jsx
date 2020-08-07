import React from "react";
import { HeaderContainer, OptionLink, activeStyle } from "./header.styles";
import { connect } from "react-redux";
import { setCountry } from "../../redux/news/news.actions";
import { selectPageUrl } from "../../redux/news/news.selectors";
import { createStructuredSelector } from "reselect";
import "./header.styles.scss";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";



const Header = ({ setCountry, url, user, signOutStart }) => {

  return (
    <HeaderContainer>
      <OptionLink activeStyle={activeStyle} to="/homepage">
        Home
      </OptionLink>
      <OptionLink activeStyle={activeStyle} to="/business">
        Busines
      </OptionLink>
      <OptionLink activeStyle={activeStyle} to="/entertainment">
        Entertainment
      </OptionLink>
      <OptionLink activeStyle={activeStyle} to="/health">
        Health
      </OptionLink>
      <OptionLink activeStyle={activeStyle} to="/science">
        Science
      </OptionLink>
      <OptionLink activeStyle={activeStyle} to="/sports">
        Sports
      </OptionLink>
      <OptionLink activeStyle={activeStyle} to="/technology">
        Technology
      </OptionLink>
      {user ? (
        <React.Fragment>
        <OptionLink userLinkStyles activeStyle={activeStyle} to="/userpage">
         Hi {user.displayName}
      </OptionLink>
        <OptionLink signOutLinkStyles to='' onClick={() => signOutStart()} >Sign out</OptionLink>
        </React.Fragment>
        ) : (
          <OptionLink signInLinkStyles to="/signinandsignup">Sign in</OptionLink>
      )}

      {/* <select
        value={url.country}
        onChange={(e) => {
          setCountry({ country: e.target.value });
        }}
      >
        <option value="ua">Ukraine</option>
        <option value="us">United States</option>
        <option value="de">Germany</option>
      </select> */}
    </HeaderContainer>
  );
};
const MapStateToProps = createStructuredSelector({
  url: selectPageUrl,
  user: selectCurrentUser
});
const MapDispatchToProps = (dispatch) => ({
  setCountry: (url) => dispatch(setCountry(url)),
  signOutStart: () => dispatch(signOutStart())
});

export default connect(MapStateToProps, MapDispatchToProps)(Header);
