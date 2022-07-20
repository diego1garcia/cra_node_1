import React from "react";



function ItemList(props){

    console.log("Render ItemList", props.items);

    return(
        <>
        <h1>ItemList</h1>
        {
            props.items.map(
                cadaItem =>{
                 return(
                <div key={cadaItem.id}>
                <p> {cadaItem.title} </p>
                <p> {cadaItem.price}</p>
                <p>{cadaItem.stock}</p>
                <p>{cadaItem.picture}</p>
                <hr/>
                </div>
                );
        })}
        </>
    );
}

export default ItemList;


