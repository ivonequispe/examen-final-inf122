'use client'
import Image from "next/image";
import React from "react";
import style from './datos.module.css';
import { useEffect, useState } from "react";

function pokemon() {


    const [estado, setEstado] = useState("esperando");
    
    const [tipe, setTipe]=useState();
     const [height, setHeight]=useState();
    const [width,setWidth]=useState();
    const [abilidad, setAbilidad] = useState([null]);

    const[hp,setHp ]=useState();
    const[atak,setAtak ]=useState();
    const[ defensa,seDefensa]=useState();
    const[speed,setSpeed ]=useState();

    

    const url = "https://pokeapi.co/api/v2/pokemon/ivysaur";
    //const url="https://dog.ceo/api/breed/pitbull/images/random";
    // a esto se denomina llamar a un hook >
    useEffect(() => {
        // aqui se hace recuest
        fetch(url)
            .then(res => res.json())
            .then(data => { setEstado(data.species.name), setAbilidad(data.abilities[0].ability.name) });
    }, []);
    return (
        <div className={style.contenedor}>
            <h1>Abaut</h1>
            
            <div className={style.datos}>


                <div>

                    <p> Tipe</p>
                    <p> height</p>
                    <p> width</p>
                    <p> Abilities</p>
                    


                </div>


                <div>

                    <p> Tipe</p>
                    <p> height</p>
                    <p> width</p>
                    <p> Abilities</p>
                    

                </div>


            </div>


            <h2> Stats</h2>

            <div className={style.datos}>


<div>

    <p> Tipe</p>
    <p> height</p>
    <p> width</p>
    <p> Abilities</p>
    


</div>


<div>

    <p> Tipe</p>
    <p> height</p>
    <p> width</p>
    <p> Abilities</p>
    

</div>


</div>
        </div>
    );
}

export default pokemon;

