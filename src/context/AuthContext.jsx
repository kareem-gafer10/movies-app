import { createContext ,useState,useEffect} from "react";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [userData, setUserData] = useState(null);

  const saveUserData = () => {
    const encodedToken = localStorage.getItem("userToken");
    const decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  };

  //  solve reload page
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
  }, []);

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ userData, saveUserData, handleLogout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
