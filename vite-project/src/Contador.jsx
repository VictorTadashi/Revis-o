import { useState } from "react";

export default function Contador(){
    const [contador, setContador] = useState(0);

    function handleClick(){
        setContador((contador) => (
          contador + 1
        ))
        console.log(contador)
      }

      return (
        <>
        <p>{contador}</p>
        <button onClick={handleClick}> Aumentar </button>
        </>
      )
}