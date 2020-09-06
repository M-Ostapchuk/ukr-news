import React from "react";

// Components

// Styles
import "./item-overview.styles.scss";
import { ItemOverviewContainer } from "./item-overview.styles";

// Router 
import { useParams } from "react-router";

// Redux
import { connect } from "react-redux";
import { selectCollectionsWithId } from "../../redux/news/news.selectors";
import { createStructuredSelector } from "reselect";

// i18next
import { useTranslation } from "react-i18next";


const ItemOverview = ({ collection }) => {
  const { id } = useParams();
  const item = collection.find((item) => item.id === id);
  const { t } = useTranslation("common");

  return (
    <ItemOverviewContainer>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <img src={item.urlToImage} alt={item.description} />
      <a className="overview-link" href={item.url}>
        {t('button.readMore')}
      </a>
    </ItemOverviewContainer>
  );
};

const MapStateToProps = createStructuredSelector({
  collection: selectCollectionsWithId,
});

export default connect(MapStateToProps)(ItemOverview);
