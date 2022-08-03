
import './App.css';
import NavBar from './components/ItemList/NavBar';
import CartContext from './components/Cart/CartContext';
import RoutesDef from './components/ItemList/RoutesDef';

function App() {
  // const [amountItems, setAmountItems] = useState(0);
  return (
    <>
    
      <CartContext>
      <NavBar/>  
      <RoutesDef/>
      </CartContext>
    
  </>
  );

}

export default App; 
