import { Route, Routes} from "react-router-dom";
// Components
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Movies from "./Components/Movies/Movies";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import People from "./Components/People/People";
import Register from "./Components/Register/Register";
import TvShow from "./Components/TvShow/TvShow";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import MovieDetails from "./Components/Details/MovieDetails";
import TvDetails from "./Components/Details/TvDetails";
// Context
import MoviesContextProvider from "./context/Store";
import AuthContextProvider from "./context/AuthContext";



const App = () => {
  
  



  return (
    <>
    <AuthContextProvider>
    <MoviesContextProvider>
    <Navbar />
    <div className=" container">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>  } />
        <Route path="movies" element={<ProtectedRoute><Movies /></ProtectedRoute> }/>
        <Route path='moviedetails' element={<ProtectedRoute><MovieDetails /></ProtectedRoute>}>
        <Route path=':id' element={<ProtectedRoute><MovieDetails /></ProtectedRoute>} />
        </Route>

        <Route path="tv" element={ <ProtectedRoute><TvShow /></ProtectedRoute>}/>
        <Route path=':tvdetails' element={<ProtectedRoute><TvDetails /></ProtectedRoute>}>
        <Route path=':id' element={<ProtectedRoute><TvDetails /></ProtectedRoute>}/>
        </Route>
     
        <Route path="person" element={ <ProtectedRoute><People/></ProtectedRoute>}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </MoviesContextProvider>
    </AuthContextProvider>
    </>
  );
};

export default App;
