import React, { useState, useEffect } from "react";

// Components
import SelectAndSearch from "../select-and-search/select-and-search.component";

// Styles
import {
  HeaderContainer,
  HeaderWrapper,
  OptionLink,
  activeStyle,
  ShevronIconContainer,
  BarsIconContainer,
} from "./header.styles";

// Router

// Redux
import { connect } from "react-redux";
import { signOutStart } from "../../redux/user/user.actions";

// Select
import { createStructuredSelector } from "reselect";
import { selectPageUrl } from "../../redux/news/news.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

// Firebase

// Font awesome
import { faChevronCircleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// i18Next
import { useTranslation } from "react-i18next";

const Header = ({ currentUser, signOutStart }) => {
  const { t } = useTranslation("common");

  const [isVisible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderContainer show={show}>
        <OptionLink activeStyle={activeStyle} to="/homepage">
          {t("header.homepage")}
        </OptionLink>
        <OptionLink activeStyle={activeStyle} to="/business">
          {t("header.busines")}
        </OptionLink>
        <OptionLink activeStyle={activeStyle} to="/entertainment">
          {t("header.entertainment")}
        </OptionLink>
        <OptionLink activeStyle={activeStyle} to="/health">
          {t("header.health")}
        </OptionLink>
        <OptionLink activeStyle={activeStyle} to="/science">
          {t("header.science")}
        </OptionLink>
        <OptionLink activeStyle={activeStyle} to="/sports">
          {t("header.sports")}
        </OptionLink>
        <OptionLink activeStyle={activeStyle} to="/technology">
          {t("header.technology")}
        </OptionLink>
        {currentUser ? (
          <React.Fragment>
            <OptionLink
              userlinkstyles="true"
              activeStyle={activeStyle}
              to="/userpage"
            >
              My Collections
            </OptionLink>
            <OptionLink
              signoutlinkstyles="true"
              to=""
              onClick={() => signOutStart()}
            >
              Sign out
            </OptionLink>
          </React.Fragment>
        ) : (
          <OptionLink signinlinkstyles="true" to="/signinandsignup">
            Sign in
          </OptionLink>
        )}
        <ShevronIconContainer>
          <FontAwesomeIcon
            className="icon"
            icon={faChevronCircleDown}
            color="blue"
            size="lg"
            onClick={() => {
              setVisible(!isVisible);
            }}
          />
        </ShevronIconContainer>
        <SelectAndSearch visible={isVisible} />
      </HeaderContainer>
      <BarsIconContainer>
        <FontAwesomeIcon
          className="icon"
          icon={faBars}
          color="blue"
          size="lg"
          onClick={() => {
            setShow(!show);
          }}
        />
      </BarsIconContainer>
    </HeaderWrapper>
  );
};
const MapStateToProps = createStructuredSelector({
  url: selectPageUrl,
  currentUser: selectCurrentUser,
});
const MapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(MapStateToProps, MapDispatchToProps)(Header);
