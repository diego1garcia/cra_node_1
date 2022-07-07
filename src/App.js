import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
  <>
  <HelloWorld />;

  <ItemListContainer greeting={"¡WELCOME EGAR´S ROOM !"}/>;
  </>
  );    
}

export default App;
