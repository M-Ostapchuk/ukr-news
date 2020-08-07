import React from "react";
import "./item-overview.styles.scss";
import { connect } from "react-redux";
import { selectCollectionsWithId } from "../../redux/news/news.selectors";
import { createStructuredSelector } from "reselect";
import { ItemOverviewContainer } from "./item-overview.styles";
import { useParams } from "react-router";

const ItemOverview = ({ collection }) => {
  const { id } = useParams();
  const item = collection.find((item) => item.id === id);

  return (
    <ItemOverviewContainer>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <img src={item.urlToImage} alt={item.description} />
      <a className="overview-link" href={item.url}>
        Читати повністю
      </a>
    </ItemOverviewContainer>
  );
};

const MapStateToProps = createStructuredSelector({
  collection: selectCollectionsWithId,
});

export default connect(MapStateToProps)(ItemOverview);
