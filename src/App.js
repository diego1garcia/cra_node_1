import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
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
