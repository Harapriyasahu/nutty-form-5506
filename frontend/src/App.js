import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./Components/footer/Footer";
import NavbarMain from "./Components/NavbarMain/NavbarMain";

import AllRoutes from "./Routes/AllRoutes";

function App() {
  const token = useSelector((store) => store.AuthReducer.token);
  return (
    <div className="App">
      {token ? null : <NavbarMain />}
      <AllRoutes />
      {token ? null : <Footer />}
    </div>
  );
}

export default App;
