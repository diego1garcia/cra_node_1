import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
  <>
  <HelloWorld />
  <ItemListContainer greeting={"¡WELCOME EGAR´S ROOM !"}/>
  <ItemCount/>
  </>
  );    
}

export default App;
