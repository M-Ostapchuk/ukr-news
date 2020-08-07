import React from "react";
import "./news-item.styles.scss";
import {
  addItemToFirebase,
  deleteItemFromFirebase,
} from "../../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faCheckCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const Item = ({ item, history, match, isWriteWhole, isItemFromFirebase }) => {
  let docId = "";
  for (let i = 0; i < item.title.length; i++) {
    docId += item.title.codePointAt(i);
    docId = docId.slice(0, 21);
  }
  const [iconName, setIconName] = useState(faCheckCircle)
  return (
    <div className="item-container" >
      {isItemFromFirebase ? (
         <FontAwesomeIcon
          className="icon"
          size="lg"
          onClick={() => {
            deleteItemFromFirebase(docId)
            localStorage.removeItem(`${docId}`);
          }}
          onMouseEnter={() => {
            setIconName(faTrashAlt)
          }}
          onMouseLeave={() => {
            setIconName(faCheckCircle)
          }}
          icon={iconName}
        /> 
      ) : (
        <FontAwesomeIcon
          className="icon"
          onClick={() => {
            addItemToFirebase(item);
          }}
          icon={faPlusCircle}
          size="lg"
        />
      )}
      <h3
        onClick={() => {
          history.push(`${match.path}/${item.id}`);
        }}
        className="item-title"
      >
        {item.title}
      </h3>
      <img src={item.urlToImage} alt={item.title} />
      <span className="item-description">{item.description}</span>
      {isWriteWhole? (
        <a className="overview-link" href={item.url}>Читати повністю</a>
      ) : (null)}
    </div>
  );
};

export default Item;
