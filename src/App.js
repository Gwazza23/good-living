import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Nav from "./Pages/Nav/Nav";
import Header from "./Pages/Products/Components/Header";
import Products from "./Pages/Products/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Header />}>
            <Route path="/products/:category" element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
