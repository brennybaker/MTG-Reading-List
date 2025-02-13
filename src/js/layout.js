import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import Cards from "./component/cards.jsx";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
  const [favorites, setFavorites] = useState([]);

  const handleClick = (item) => {
    if (!favorites.some((favorite) => favorite.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar favorites={favorites} handleClick={handleClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/single/:cards/:id" element={<Single />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);