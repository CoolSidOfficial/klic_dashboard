import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";


//pages
import Products from './pages/products';
import Inventory from './pages/inventory';
import Sellers from './pages/sellers';
import Vendor from './pages/vendor';
import Layout from './pages/layout';
//stylesheets

import "./stylesheets/navbar.css";
import "./stylesheets/sidebar.css";



//videos
import FZFV from "./assets/404.mp4";


// logos
import FZF  from "./assets/error.jpg";
//
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route  path="/products" element={<Products/>}></Route>
    <Route path="/vendors" element={<Vendor/>}></Route>
    <Route path="/inventory" element={<Inventory/>}></Route>
    <Route path="/sellers" element={<Sellers/>}></Route>
</Route>
<Route path='*' element={<video   width="600" height="400" muted autoPlay  loop > <source src={FZFV} type="video/mp4"/>
  </video>}></Route>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
