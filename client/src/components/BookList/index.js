import React from "react";
import { CardGroup, Card, Button } from "react-bootstrap";


// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
const BookList = (props) => {
    const Card = ({ title, author, url, thumbnail}) => {
    //   console.log(image)
      return (
        <div className="App">
               <div className="card">
                 <img className="card-img-top" src={thumbnail} style={{width: "15rem", height: "15rem", display: "block", margin: "auto", marginTop: "2rem"}}/>
                 <div className="card-body">
                 <h5 className="card-title"> {`${title} ${author} ${url}`} </h5>
                </div>
              </div>
              </div>
      );
    };


const userMap = props.books.map(function (el, index) {
    return (<Card
      key={index}
      // image={el.picture.large}
      title={el.volumeInfo.title}
      author={el.volumeInfo.authors}
      url={el.selfLink}
      thumbnail={el.picture.large}>
         <Card.Img variant="top" image={el.thumbnail.large} />
      <Card.Body>
    <Card.Title>{el.name.title} {el.name.first} {el.name.last} </Card.Title>
      </Card.Body> 
    </Card>)
  })

  return <div>{userMap}</div>;
}

export default BookList;