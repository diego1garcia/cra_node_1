import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "../ItemList/ItemListContainer";
import NotFound from "./NotFound";
import ItemDetailContainer from "../ItemList/ItemDetailContainer";
import Cart from "../Cart/Cart";

const RoutesDef = () => {
  return (
    <Routes>
      <Route index ="/" element={<ItemListContainer/>}/>
        <Route path="/category/:name" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart"element={<div>Cart Page</div>}/>
        <Route 
          path="*"
          element={<NotFound />} />
          
        
        
        
    </Routes>
  );
};

export default RoutesDef;