import React from "react";
import Movie from "../movie/Movie";

function MovieList({ data }) {
  return (
    <div className="listDiv">
      {data.map((obj, i) => (
        <Movie data={obj} key={i} />
      ))}
    </div>
  );
}

export default MovieList;
//adding commint