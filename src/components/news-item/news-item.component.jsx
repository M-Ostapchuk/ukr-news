import React from "react";
import { useState } from "react";

// Components

// Styles
import "./news-item.styles.scss";

// Router

// Redux
import { connect } from "react-redux";

// Select
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

// Firebase
import {
  addItemToFirebase,
  deleteItemFromFirebase,
} from "../../firebase/firebase";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faCheckCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";




const Item = ({ item, history, match, isWriteWhole, isItemFromFirebase, currentUser }) => {
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
            deleteItemFromFirebase(docId, currentUser)
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

const MapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(MapStateToProps)(Item);
