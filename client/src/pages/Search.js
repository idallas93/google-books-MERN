import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import BookList from "../components/BookList";
import SearchResults from "../components/SearchResults";


function Search() {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setBookSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getGoogleBooks(bookSearch)
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  };


  return (
    <Container fluid>
      <SearchForm
        bookSearch={bookSearch}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <Row>
          <Col size="xs-12">
            {!books.length ? (
              <h1 className="text-center">No books to display</h1>
            ) : (
              <BookList
              key={books.title}
              title={books.title}
              href={books.href}
              ingredients={books.ingredients}
              thumbnail={books.thumbnail}>
              </BookList>
            )}
          </Col>
        </Row>
    </Container>
  );
}

export default Search;
