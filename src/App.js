import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Men from "./Components/Men/Men";
import Women from "./Components/Women/Women";
import Kids from "./Components/Kids/Kids";
import About from "./Components/About/About";
import Signup from "./Components/Signup/Signup";
import { Cart } from "./Components/Cart/Cart";
import { Product } from "./Components/Product/Product";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Men" element={<Men />}></Route>
            <Route path="/Women" element={<Women />}></Route>
            <Route path="/Kids" element={<Kids />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/productdetail" element={<Product/>}></Route>
       </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
