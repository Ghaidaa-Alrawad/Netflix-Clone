import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function FavList() {
  const [favMovies, setFavMovie] = useState([]);

  async function handelFavMovie() {
    const url = `${process.env.REACT_APP_SERVER_URL}/favMovies`;
    let response = await fetch(url);
    let recivedData = await response.json();
    setFavMovie(recivedData);
  }

  async function handleDelete(id) {
    const url = `${process.env.REACT_APP_SERVER_URL}/favMovies/${id}`;
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : "da114938a366856e060effed241b7a61",
        "Accept": "application/json",
        "User-Agent": "MyMovieApp/1.0"      },
    });
    if (response.status === 200) {
      alert("Deleted successfully");
    }
    handelFavMovie();
  }

  useEffect(() => {
    handelFavMovie();
  }, []);

  console.log(favMovies);

  return (
    <div>
      {favMovies.map((movie, id) => (
        // <Card style={{ width: "20rem", height: "20rem" }} className="mainCard">
        //   <Card.Body className="cardB">
        //     <Card.Title>{movie.title}</Card.Title>
        //     <div className="button">
        //       <Button
        //         className="buttonModal"
        //         style={{ backgroundColor: "rgb(57, 62, 70)", border: "solid " }}
        //         onClick={() => handleDelete(movie.id)}
        //       >
        //         DELETE{" "}
        //       </Button>
        //     </div>
        //   </Card.Body>
        // </Card>

        <p>
            {movie.title}
       < button onClick={() => handleDelete(movie.id)}>
                   DELETE{" "}
       </button>
        </p>
      ))}
    </div>
  );
}
