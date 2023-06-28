
import { useContext } from "react";
import { Link } from "react-router-dom";
import { moviesContext } from "../../context/Store";




const imgUrl = "https://image.tmdb.org/t/p/w500";

const Home = () => {
  const {trendingMovies,trendingTv,trendingPerson} = useContext(moviesContext);



  const moviesContent = trendingMovies.slice(0,10).map((movie, i) => (
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


  const TvContent = trendingTv.slice(0,10).map((tv, i) => (
    <div key={i} className="col-md-2  gy-4">
    <Link to={`/tvdetails/${tv.id}`}>
      <div className="tv position-relative">
          <div className='layer pointer position-absolute bottom-0 start-0 end-0 text-white d-flex align-items-center justify-content-center'>
          Click to see more
          </div>
          <div className="position-absolute top-0 end-0 bg-info p-1">
          {tv.vote_average.toFixed(1)}
          </div>
          <img className="w-100 pointer" src={`${imgUrl}${tv.poster_path}`} alt={tv.title} />
        </div>
        <h3 className='h6 mt-3 text-center'>{tv.name}</h3>
        </Link>
    </div>
  ));



  const PersonContent = trendingPerson.slice(0,10).map((person, i) => (
    <div key={i} className="col-md-2  gy-4">
    <Link to={`/persondetails/${person.id}`}>
      <div className="person position-relative">
          <div className='layer pointer position-absolute bottom-0 start-0 end-0 text-white d-flex align-items-center justify-content-center'>
          Click to see more
          </div>
          <img className="w-100 pointer" src={`${imgUrl}${person.profile_path}`} alt={person.name} />
        </div>
        <h3 className='h6 mt-3 text-center'>{person.name}</h3>
        </Link>
    </div>
  ));



  return (
    <>
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

        <div className="col-md-4 d-flex align-items-center">
          <div>
          <div className="border-line w-25 mb-3"></div>
          <h2>Trending TV shows <br /> to watch now!</h2>
          <p className='text-muted'>Most watched TV shows today</p>
        <div className="border-line mt-3"></div>
          </div>
        </div>
        {TvContent}

        <div className="col-md-4 d-flex align-items-center">
          <div>
          <div className="border-line w-25 mb-3"></div>
          <h2>Trending people <br />to watch Right <br />now </h2>
          <p className='text-muted'>Trending people today</p>
        <div className="border-line mt-3"></div>
          </div>
        </div>
        {PersonContent}

        </div>
    </>
  );
};

export default Home;
