import React from "react";
// import ArticleContext from "../../utils/ArticleContext";
// import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{props.title}</h2>
      </li>
    </ul>
  );
}
export default SearchResults;
