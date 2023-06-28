
import { useContext } from "react";
import { Link } from "react-router-dom";
import { moviesContext } from "../../context/Store";




const imgUrl = "https://image.tmdb.org/t/p/w500";

const Movies = () => {
    const {trendingMovies} = useContext(moviesContext);




  const moviesContent = trendingMovies.map((movie, i) => (
    <div key={i} className="col-md-2  gy-4">
    <Link to={`/moviedetails/${movie.id}`}>
      <div className="movie position-relative">
          <div className='layer pointer position-absolute bottom-0 start-0 end-0 text-white d-flex align-items-center justify-content-center'>
          Click to see more
          </div>
          <div className="position-absolute top-0 end-0 bg-info p-1">
          {movie.vote_average.toFixed(1)}
          </div>
          <img className="w-100 pointer" src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
        </div>
        <h3 className='h6 mt-3 text-center'>{movie.title}</h3>
        </Link>
    </div>
  ));




  return (
    <div className="row page">
      <div className="col-md-4 d-flex align-items-center">
          <div>
          <div className="border-line w-25 mb-3"></div>
        <h2 >Trending movies <br /> to watch Right now!</h2>
        <p className='text-muted'>Most watched movies today</p>
        <div className="border-line mt-3"></div>
          </div>
        </div>
        {moviesContent}
    </div>
  )
}

export default Movies;