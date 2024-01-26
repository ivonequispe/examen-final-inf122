'use cliente'
import Image from "next/image";
import style from "./galeria.module.css";
import { useEffect,useState } from "react";
function galeria(){
    const [perrito,setPerrito]=useState("/vercel.svg");
    const [estado, setEstado]=useState("esperando");
    const [abilidad,setAbilidad]=useState([null]);
    const url="https://pokeapi.co/api/v2/pokemon/eevee";
    //const url="https://dog.ceo/api/breed/pitbull/images/random";
    // a esto se denomina llamar a un hook >
    useEffect(()=>{
        // aqui se hace recuest
        fetch(url)
        .then(res=>res.json())
        .then(data=>
            {setPerrito(data.sprites.front_default),setEstado(data.species.name),setAbilidad(data.abilities[0].ability.name)});
    },[]);
    return(
        <div className={style.contenedor}>
            <h1>{estado}</h1>
            <h1>{abilidad}</h1>
            <Image src={perrito} alt="perrito" width={250} height={250}/>
        </div>
    );
}  

export default galeria;