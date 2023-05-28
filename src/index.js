import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// components 
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';


//stylesheets

import "./stylesheets/navbar.css";
import "./stylesheets/sidebar.css";


//


import watermark from "./assets/pegasus_water.png"
const root = ReactDOM.createRoot(document.getElementById('root'));
const watermark_css={

}

root.render(
  <React.StrictMode>
    {/* <img  src ={watermark} id="watermark"/> */}
   <Navbar first={"search"} second={"products"} third ={"order"} fourth={"Customers"} />
   <Sidebar/>
  </React.StrictMode>
);

reportWebVitals();
