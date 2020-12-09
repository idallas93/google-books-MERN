import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import BookList from "../components/BookList";
import SearchResults from "../components/SearchResults";
import Button from "../components/Button";

function Search() {
  const [search, setSearch] = useState("Lord of the Rings");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");


useEffect(() => {
  if(!search) {
    return;
  }

  API.getGoogleBooks(search)
  .then(res => {
    if (res.data.length === 0) {
      throw new Error("No results found.");
    }
    if (res.data.status === "error") {
      throw new Error(res.data.message);
    }
    setTitle(res.data.items.volumeInfo.title);
    setUrl(res.data);
  })
  .catch(err => setError(err));
}, [search]);

const handleInputChange = event => {
setSearch(event.target.value);
};

return (
  <div>
    <Container style={{ minHeight: "100vh" }}>
      <h1 className="text-center">Search For Anything on Google Books</h1>
     
      <SearchForm
        handleInputChange={handleInputChange}
        results={search}
      />
            <SearchResults title={title}/>

      {/* <SearchResults title={title} url={url} /> */}
    </Container>
  </div>
);
}

export default Search;
