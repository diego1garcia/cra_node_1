import logo from './logo.svg';
import './App.css';
import HelloWorld from '../src/components/Nav/NavBar';
import ItemListContainer from '../src/components/ItemList/ItemListContainer';
import ItemCount from './components/ItemCount';
// import Promises from './components/Promises';

function App() {
  return (
  <>
  <HelloWorld />
  <ItemListContainer greeting={"¡WELCOME to EGAR´S ROOM !"}/>
  <ItemCount/>
  {/* <Promises/> */}
  </>
  );    
}

export default App;
