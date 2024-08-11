import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProducList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";


function App() {
  return (
    
    <BrowserRouter>
     <Navbar/>

     <div className="container">
      
       <Routes>
         <Route path="/" element={<ProducList/>}/>
         <Route path="/cart" element={<Cart/>}/>

       </Routes>

     </div>
    
    </BrowserRouter>

  );
}

export default App;
