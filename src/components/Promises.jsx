// import { useEffect } from "react";
// import { useState } from "react";
// import Spinner from "../Spinner";


// const Promises = () => {

//     const [loading, setLoading] = useState(false);
//     const condition = true;

//     const promise = new Promise((resolve, reject) => {
//         if(condition){
//             setTimeout (() => resolve("Valor de resolve"), 3000);
//         }else{
//             setTimeout(() => reject("mensaje de error"), 3000);
//         }
//         })

//     useEffect(() => {
//         setLoading(true);
//         Promises
//             .then((res) => console.log("promesa cumplida", res))
//             .catch((err) => console.log("promesa rechazada", err))
//             .finally (() => {
//                 console.log("esto se ejecuta se cumpla o no la promesa");
//                 setLoading(false);
//             });
//     });

//     if (loading) return <Spinner/>;
//     return (
//         <>
//         <h1>no hay promesa ejecuntandose</h1></>
//     )

// };