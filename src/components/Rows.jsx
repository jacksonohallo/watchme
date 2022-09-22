import { InsertEmoticon } from "@material-ui/icons";
import Movie from "./Movie";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Rows = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
 

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-centre">
        <div id={"slider" }      className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item, id) => (
           
            <Movie item={item} /> 
          ))}
        </div>
      </div>
    </>
  );
};

export default Rows;
