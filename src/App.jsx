import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import Movies from "./pages/Movies";
// import Tv from "./pages/Tv";
// import People from "./pages/People";
// import MoviesDetails from "./pages/MoviesDetails";
// import TvDetails from "./pages/TvDetails";
// import PeopleDetails from "./pages/PeopleDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/Loading";



const Home=lazy(()=>import("./pages/Home"));
const Movies=lazy(()=>import("./pages/Movies"));
const Tv=lazy(()=>import("./pages/Tv"));
const People=lazy(()=>import("./pages/People"));
const MoviesDetails=lazy(()=>import("./pages/MoviesDetails"));
const TvDetails=lazy(()=>import("./pages/TvDetails"));
const PeopleDetails=lazy(()=>import("./pages/PeopleDetails"));








const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute>  },
        { path: "movies", element: <ProtectedRoute><Movies /></ProtectedRoute>  },
        { path: "movies/:id", element: <ProtectedRoute><MoviesDetails /></ProtectedRoute>  },
        { path: "tv", element: <ProtectedRoute><Tv /></ProtectedRoute>  },
        { path: "tv/:id", element: <ProtectedRoute><TvDetails /></ProtectedRoute>  },
        { path: "people", element:  <ProtectedRoute><People /></ProtectedRoute>  },
        { path: "people/:id", element:  <ProtectedRoute><PeopleDetails /></ProtectedRoute>  },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <Toaster />
      <AuthContextProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>

      </AuthContextProvider>
    </>
  );
};

export default App;
