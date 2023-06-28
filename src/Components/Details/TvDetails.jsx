import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const Url = "https://api.themoviedb.org/3";
const ApiKey = "c0a753282bdc2008ffe4d6e4e1d6462c";
const imgUrl = "https://image.tmdb.org/t/p/w500";




const TvDetails = () => {
    const [tvDetails, setTvDetails] = useState(null);
    const params = useParams();


    const getTvDetails = async(id)=>{
      const { data } = await axios.get(`${Url}/tv/${id}?api_key=${ApiKey}`)
        setTvDetails(data)
    }
  
    useEffect(() => {
      getTvDetails(params.id)
    }, []);




  return (
    <>
    {tvDetails?
      <div className='page row'>
        <div className="col-md-5">
        <img className="w-100 h-100 pointer"
         src={`${imgUrl}${tvDetails.poster_path}`}
          alt={tvDetails.title} />
        </div>

      <div className="col-md-7">
        <div className="mt-5">
        <h2 className='p-2'>{tvDetails.name}</h2>
      <p className='p-2'>{tvDetails.overview}</p>
      
          <div className=' mt-3'>
            <span className='text-info p-2 fs-4'> Rate :</span> <i className="fa-solid fa-star fa-2x p-3 text-warning"></i>
            <span className='p-1 fs-5'>{tvDetails.vote_average}</span>
            </div>
            
            <div className=' mt-3'>
            <span className='text-info p-2 fs-4'> Vote count :</span> 
            <span className='p-1 fs-5'>{tvDetails.vote_count}</span>
            </div>
            <div className=' mt-3'>
            <span className='text-info p-2 fs-4'> Popularity :</span> 
            <span className='p-1 fs-5'>{tvDetails.revenue}{tvDetails.popularity}</span>
            </div>
           
            <div className=' mt-3'>
            <span className='text-info p-2 fs-4'> Release Date :</span> 
            <span className='p-1 fs-5'>{tvDetails.release_date} {tvDetails.last_air_date}</span>
            </div>
        </div>
        <Link to={-1} className=" btn btn-primary my-5">Go Back</Link>
      </div>
    </div>
    :
    <div className="loadingScreen vh-100  d-flex justify-content-center align-items-center">
    <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
    </div>}
    
    </>
  )
}

export default TvDetails;








