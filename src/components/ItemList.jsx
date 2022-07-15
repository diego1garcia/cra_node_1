import React from "react";

function ItemList(props) {
    return (
        <>
        <h1>ItemList</h1>
        {
            props.items.map(
                cadaItem => {
                    return (
                        <p>{cadaItem.title}</p>
                    )
                }
            )
        }
        </>
    );
}

export default ItemList;