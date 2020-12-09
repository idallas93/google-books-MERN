import React from "react";
// import "./style.css";

function SearchResults(props) {
  console.log(props.title)
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{props.title}</h2>
        {/* <a href={props.url}>{props.url}</a> */}
      </li>
    </ul>
  );
}

export default SearchResults;