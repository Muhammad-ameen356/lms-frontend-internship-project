import logo from "./logo.svg";
import "./App.scss";
import NavbarComponent from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
    </BrowserRouter>
  );
}

export default App;
