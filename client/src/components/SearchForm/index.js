import React from "react";

function SearchForm(props) {
  console.log(props)
    return (
        <form className="search">
          <div className="form-group">
            <label htmlFor="language"> Search Google Books API</label>
            <input
            name="BookSearch"
              value={props.bookSearch}
              onChange={props.handleInputChange}
              list="term"
              type="text"
              className="form-control"
              placeholder="Type name of book to search google books API"
              id="term"
            />
          </div>
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{props.searchBook}</h2>
        <a href={props.url}>{props.url}</a>
      </li>
    </ul>
          <button onClick={()=>{
        props.handleFormSubmit()
        console.log(props)
    }}>
            Search book
          </button>
        </form>
      );
}

export default SearchForm;
