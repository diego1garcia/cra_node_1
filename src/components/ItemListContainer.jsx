import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";


function ItemListContainer(props) {

    const ItemsDATABASE = [
        [{
            "id": 1,
            "title": "enema mineral oil",
            "price": 169,
            "category": "CVS Pharmacy",
            "stock": 5
            
          }, {
            "id": 2,
            "title": "Naropin",
            "price": 397,
            "category": "Fresenius Kabi USA, LLC",
            "stock": 7
          }, {
            "id": 3,
            "title": "Lithium",
            "price": 610,
            "category": "Marco Pharma International LLC.",
            "stock": 2
          }, {
            "id": 4,
            "title": "Metformin Hydrochloride",
            "price": 651,
            "category": "Unit Dose Services",
            "stock": 1
          }, {
            "id": 5,
            "title": "Simply Numb Endure",
            "price": 745,
            "category": "Golden Touch LLC",
            "stock": 3
          }, {
            "id": 6,
            "title": "Ortho-Nesic With Capsaicin",
            "price": 440,
            "category": "Blaine Labs Inc.",
            "stock": 7
          }, {
            "id": 7,
            "title": "POPULUS DELTOIDES POLLEN",
            "price": 821,
            "category": "ALK-Abello, Inc.",
            "stock": 6
          }, {
            "id": 8,
            "title": "TIGAN",
            "price": 608,
            "category": "REMEDYREPACK INC.",
            "stock": 10
          }, {
            "id": 9,
            "title": "First Aid Triple Antibiotic and Pain Relief",
            "price": 284,
            "category": "LIFElabs, a Division of Atico International USA, INC.",
            "stock": 3
          }, {
            "id": 10,
            "title": "YOUTH SURGE",
            "price": 490,
            "category": "CLINIQUE LABORATORIES INC",
            "stock": 7
          }]
          
    ];

    let [items, setItems] = useState([]);

    console.log("%c Render ItemListContainer", "color:green");
    console.log(items);


    useEffect(
        () => {
            let promiseItems = new Promise ((resolve, reject) => {
                setTimeout(
                    () => {
                        resolve(ItemsDATABASE);
        
                    },
                    2000);
            });
        
            promiseItems.then(
                (respuesta) => {
                    setItems(ItemsDATABASE);
                }
            ).catch(
                (errorMsg) => console.error(errorMsg)
            ) 
            
        },
        []
    )

  
    return (
            <ItemList items={items}/>
            // {/* // <p style={{fontsize:80}}>
            // // {props.greeting}</p> */}
    );
}

export default ItemListContainer;