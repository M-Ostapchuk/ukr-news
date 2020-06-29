import React from "react";
import "./news-item.styles.scss";

const Item = ({ item, history, match }) => {
  return (
    <div
      className="item-container"
      onClick={() => history.push(`${match.path}/${item.id}`)}
    >
      <h3 className="item-title">{item.title}</h3>
      <img src={item.urlToImage} alt={item.title} />
      <span className="item-description">{item.description}</span>
    </div>
  );
};

export default Item;

// onClick={() => history.push(`${match.path}/${item.id}`)}
