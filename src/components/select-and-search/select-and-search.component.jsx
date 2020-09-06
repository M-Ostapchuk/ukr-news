import React from "react";
import { useState } from "react";

// Components

// Styles
import "./select-and-search.styles.scss";
import { StyledDiv } from "./select-and-search.styles";

// Router

// Redux
import { connect } from "react-redux";
import {
  setCountry,
  searchCollectionStart,
} from "../../redux/news/news.actions";

// Select
import { createStructuredSelector } from "reselect";
import { selectPageUrl } from "../../redux/news/news.selectors";

// Firebase

// i18next
import { useTranslation } from "react-i18next";

// Font Awesome
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectAndSearch = ({
  url,
  setCountry,
  visible,
  searchCollectionStart,
}) => {
  const { i18n } = useTranslation("common");
  const [search, setSearch] = useState("");

  return (
    <StyledDiv visible={visible}>
      <form
        className="searchForm"
        onSubmit={(event) => {
          event.preventDefault();
          searchCollectionStart(
            `http://newsapi.org/v2/everything?q=${search.toLowerCase()}&from=2020-08-10&sortBy=popularity&apiKey=587e67c49058413b8c59a9bc798f0bfb`
          );
          setSearch("");
        }}
      >
        <input
          className="searchInput"
          type="text"
          placeholder="Search news"
          onChange={(event) => {
            event.preventDefault();
            const { value } = event.target;
            setSearch(value);
          }}
        />
        <button type="submit" className="searchButton">
          <FontAwesomeIcon
            className="icon"
            icon={faSearch}
            color="white"
            size="lg"
          />
        </button>
      </form>
      <select
        className="searchSelect"
        value={url.country}
        onChange={(event) => {
          setCountry({ country: event.target.value });
          localStorage.setItem("country", `${event.target.value}`);
          i18n.changeLanguage(event.target.value);
        }}
      >
        <option value="ua">Ukraine</option>
        <option value="us">United States</option>
        <option value="de">Germany</option>
      </select>
    </StyledDiv>
  );
};

const MapStateToProps = createStructuredSelector({
  url: selectPageUrl,
});
const MapDispatchToProps = (dispatch) => ({
  setCountry: (url) => dispatch(setCountry(url)),
  searchCollectionStart: (searchInput) =>
    dispatch(searchCollectionStart(searchInput)),
});

export default connect(MapStateToProps, MapDispatchToProps)(SelectAndSearch);
