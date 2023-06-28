import { createContext } from "react";
import  { useState, useEffect } from "react";
import axios from "axios";
export const moviesContext=createContext()

const Url = "https://api.themoviedb.org/3";
const ApiKey = "c0a753282bdc2008ffe4d6e4e1d6462c";

const MoviesContextProvider = (props)=>{


    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingPerson, setTrendingPerson] = useState([]);
  
    const getTrending = async (mediaType, callback) => {
      const { data } = await axios.get(
        `${Url}/trending/${mediaType}/week?api_key=${ApiKey}`
      );
      callback(data.results);
    };
  
    useEffect(() => {
      getTrending("movie", setTrendingMovies);
      getTrending('tv', setTrendingTv);
      getTrending('person', setTrendingPerson);
    }, []);





    return <moviesContext.Provider value={{trendingMovies,trendingTv,trendingPerson}}>
        {props.children}
    </moviesContext.Provider>
}


export default MoviesContextProvider;