import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import MovieItem from "./MovieItem";
// https://api.themoviedb.org/3/search/movie?api_key=1a763884400befdbd957d043e8e9e19c&query=''
const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("''");
  const debounce = useDebounce(query, 500);
  useEffect(() => {
    async function fetchData() {
      const response =
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1a763884400befdbd957d043e8e9e19c&query=${debounce}
        `);
      if (response?.data?.results) {
        setMovies(response.data.results);
      }
    }
    fetchData();
  }, [debounce]);
  function handleSetQuery(e) {
    setQuery(e.target.value);
  }
  return (
    <div className="p-10">
      <div className="w-full max-w-[500] mx-auto mb-20">
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => handleSetQuery(e)}
          className="w-full p-4 rounded-lg border-purple-500 shadow-md"
          placeholder="Search movie here . . ."
        />
      </div>
      <div className="grid grid-cols-3 gap-10">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieItem data={item} key={item.id}></MovieItem>
          ))}
        {movies.length <= 0 && <p>No result</p>}
      </div>
    </div>
  );
};

export default MovieSearch;
