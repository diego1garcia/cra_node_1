import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
import {Card, Button} from "react-bootstrap";
import Data from "./data.json";


const ClickTracker = () => {
    const [count, setCount] = useState(1);
    const registarClick = (operacion) => {
        if (operacion === "-" && count > 0) {
            setCount(count-1);
        }else if (operacion === "+" && count < 6){
            setCount(count+1);
        }

    }

    return (
        <>
        <Card style={{ width: '18rem', marginleft: '20px' }}>
        <Card.Img variant="top" src="https://bensimonar.vtexassets.com/arquivos/ids/738642-800-1200?v=637878986800770000&width=800&height=1200&aspect=true" />
        <Card.Body>
        <Card.Title>Campera Vintage Cordero</Card.Title>
        <Card.Text>
        Campera de jean con corderito crudo en su interior. classic fit. broches niquel y 2 bolsillos con solapa y botón. tratamiento sin lavado. composición: 98% algodón 2% elastano. denim premium ORIGEN: NACIONAL
        </Card.Text>
        <button onClick={()=> registarClick("-")}>-</button>
        {count} 
        <button onClick={()=> registarClick("+")}>+</button>
        <Button variant="success">Agregar al carrito</Button>
        </Card.Body>
        </Card>
        </>
        

    )
};

export default ClickTracker;

// const ClickTracker = ({ item }) => {
//     const [count, setCount] = useState(1);
//     const { title, price, stock, pictureUrl, id, discount } = item;
//     const registarClick = (operacion) => {
//                 if (operacion === "-" && count > 0) {
//                     setCount(count-1);
//                 }else if (operacion === "+" && count < 6){
//                     setCount(count+1);
//                 }
        
//             }
        
//     return(
//         <>
// //         <Card style={{ width: '18rem', marginleft: '20px' }}>
// //         <Card.Img variant="top" src="https://bensimonar.vtexassets.com/arquivos/ids/738642-800-1200?v=637878986800770000&width=800&height=1200&aspect=true" />
// //         <Card.Body>
// //         <Card.Title>{id}</Card.Title>
// //         <Card.Text>
// //         {title}
// //         </Card.Text>
// //         <button onClick={()=> registarClick("-")}>-</button>
// //         {count} 
// //         <button onClick={()=> registarClick("+")}>+</button>
// //         <Button variant="success">Agregar al carrito</Button>
// //         </Card.Body>
// //         </Card>
// //         </>
//     )
// };

// export default ClickTracker;