import React, { useState, useEffect } from "react";
import MovieList from "../movieList/MovieList";
import "./Home.css";

export default function Home() {
  const [data, setData] = useState([]);

  async function getTrendingMovies() {
    const url = process.env.REACT_APP_DB_URL;
    const response = await fetch(`${url}/trending`);
    const trendingMovies = await response.json();
    setData(trendingMovies);
  }

  // //newMovie will hold the whole object, and the id to know witch movie the user is commenting on 
  // function commentHandler(newMovie, id){

  // }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  // console.log('comment handler ', data);

  console.log(data)
  return (
    <div className="homeDiv">
      <MovieList data={data} />
    </div>
  );
}
