'use client'
import Image from "next/image";
import React from "react";
import style from './pokemon.module.css';
import Datos from './datos';
import { useEffect, useState } from "react";

function pokemon(){
    
    const [pokemon120,setPokemon1]=useState("/vercel.svg");
    const [estado, setEstado]=useState("esperando");
    const [abilidad,setAbilidad]=useState([null]);
    const url="https://pokeapi.co/api/v2/pokemon/ivysaur";
    
    // a esto se denomina llamar a un hook >
    useEffect(()=>{
        // aqui se hace recuest
        fetch(url)
        .then(res=>res.json())
        .then(data=>
            {setPokemon1(data.sprites.front_default),setEstado(data.species.name),setAbilidad(data.abilities[0].ability.name)});
    },[]);
    return(
        <div className={style.contenedor}>
            <h1>My Pokemon</h1>
            
            <h2>{estado}</h2>
            
            <Image src={pokemon120} alt="pokemon1" width={250} height={250}/>
             <Datos/>
        </div>

    );
}

export default pokemon;

