import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Nav from "./Pages/Nav/Nav";
import Header from "./Pages/Products/Components/Header";
import Products from "./Pages/Products/Products";
import AllItem from "./Pages/Products/Components/AllItem";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Header />}>
            <Route path="/products/:category" element={<Products />} />
            <Route path="/products/all" element={<AllItem />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
