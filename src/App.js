import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from "./components/ItemList/NavBar"
import Item from './components/ItemList/Item';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import CartContext from "./components/Cart/CartContext";
import Cart from './components/ItemList/Cart';
import ImprovableComp from './components/ImprobableComp/ImprobableComp';


function App() {
  // const [amountItems, setAmountItems] = useState(0);
  return (
    <>
    
      <CartContext>
      <BrowserRouter> 
      <NavBar/>  
      <ImprovableComp/>
      <Routes>
      
      <Route index ="/" element={<ItemListContainer/>}/>
        <Route path="/category/:name" element={<ItemListContainer/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        
        <Route 
          path="*"
          element={<div style={{ backgroundColor: "red" }}>
          {" "}
          ERROR 404 NOT FOUND
        </div>
      } />
          
        
        
        
    </Routes>
    </BrowserRouter>

    </CartContext>
    
  </>
  );

}

export default App; 
