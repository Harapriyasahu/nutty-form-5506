import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./Components/footer/Footer";
import Navvbar from "./Components/main_navbar/Navvbar";

import AllRoutes from "./Routes/AllRoutes";

function App() {
  const token = useSelector((store) => store.AuthReducer.token);
  return (
    <div className="App">
      {token ? null : <Navvbar />}
      <AllRoutes />
      {token ? null : <Footer />}
    </div>
  );
}

export default App;
