import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function FavList() {
  const [favMovies, setFavMovie] = useState([]);

  const [value, setValue] = useState("");

  async function handelFavMovie() {
    const url = `${process.env.REACT_APP_DB_URL}/favMovie`;
    console.log("URL", process.env.REACT_APP_DB_URL);
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "da114938a366856e060effed241b7a61",
        Accept: "application/json",
        "User-Agent": "MyMovieApp/1.0",
      },
    });
    let recivedData = await response.json();
    setFavMovie(recivedData.data);
    console.log("receved d", recivedData);
  }

  async function handleDelete(id) {
    const url = `${process.env.REACT_APP_DB_URL}/favMovie/${id}`;
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "da114938a366856e060effed241b7a61",
        Accept: "application/json",
        "User-Agent": "MyMovieApp/1.0",
      },
    });
    if (response.status === 200) {
      alert("Deleted successfully");
    }
    handelFavMovie();
  }

  async function handleUpdate(id, value) {
    const url = `${process.env.REACT_APP_DB_URL}/favMovie/${id}`;
    const data = { newComment: value };
    let response = await fetch(url, {
      method: "PUt",
      headers: {
        "Content-Type": "application/json",
        Authorization: "da114938a366856e060effed241b7a61",
        Accept: "application/json",
        "User-Agent": "MyMovieApp/1.0",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      alert("updated successfully");
    }

    handelFavMovie();
  }

  useEffect(() => {
    handelFavMovie();
  }, []);

  console.log("FAV Movies", favMovies);

  return (
    <div className="mainDiv">
      {favMovies.map((movie, id) => (
        <Card key={movie.id} style={{ width: "18rem" }} className="favMainCard">
          <Card.Img variant="top" src={movie.img} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              <input
                defaultValue={movie.comments}
                onBlur={(e) => {
                  setValue(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </Card.Text>
            <Button
              className="favButton"
              style={{ backgroundColor: "rgb(57, 62, 70)", border: "solid " }}
              onClick={() => handleUpdate(movie.id, value)}
            >
              Update{" "}
            </Button>
            <Button
              className="buttonModal"
              style={{ backgroundColor: "rgb(57, 62, 70)", border: "solid " }}
              onClick={() => handleDelete(movie.id)}
            >
              DELETE{" "}
            </Button>{" "}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
