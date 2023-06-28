import { useContext } from "react";
import { moviesContext } from "../../context/Store";



const People = () => {

    const {trendingPerson} = useContext(moviesContext);
  

    const imgUrl = "https://image.tmdb.org/t/p/w500";




  const PersonContent = trendingPerson.map((person, i) => (
    <div key={i} className="col-md-2  gy-4">
      <div className="person position-relative">
          <div className='layer pointer position-absolute bottom-0 start-0 end-0 text-white d-flex align-items-center justify-content-center'>
          Click to see more
          </div>
          <img className="w-100 pointer" src={`${imgUrl}${person.profile_path}`} alt={person.name} />
        </div>
        <h3 className='h6 mt-3 text-center'>{person.name}</h3>
    </div>
  ));





  return (
     <div className="row page">
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
  )
}

export default People;