import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import data from "../utils/data.json";
import { useParams } from "react-router-dom";
import Spinner from "../../Spinner"
import {getDoc, doc, getFirestore, collection, getDocs, query, where, limit} from "firebase/firestore";




const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState ([]);
  const [loading, setLoading] = useState(false)
  const promise = new Promise ((resolve) => {
    setTimeout(() => resolve(data), 3000)
  });

  const getItem = ()=> {
    promise.then((res) =>{
     const products = res;
     if (name) {
       setItems(products.filter((product) => product.category == name))
     }else {
      setItems(products);
     }
      setLoading(false);
  })
};

  useEffect (() => {
    //   const db = getFirestore();
    //   const docRef = doc(db, "items", "1");
    //   getDoc(docRef).then((snapshot) => {
    //    const data = {id: snapshot.id, ...snapshot.data()}; 
       
      
    // });

    // const db =getFirestore();
    // const itemsCollection = collection(db, "items");
    // getDocs(itemsCollection).then ((snapshot) => {
    //   const data = snapshot.docs.map( (doc) => (
    //     {id: doc.id,
    //     ...doc.data()}));
    //     console.log(data);
    // });

    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const filteredCollection = query(
      itemsCollection,
      where("query", "==", "jackets"),
    );
    getDocs(filteredCollection).then((snapshot)=> {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
      ...doc.data(),

      }));
      console.log(data);
    } );
      
   
  



      setLoading(true)
      getItem();
  
  }, [name]);

  if (loading) return <Spinner/>;
  
  return (
  <>
      <div className="mt-5">
      <ItemList items={items} />
      </div>
  </>
  );
};

export default ItemListContainer;