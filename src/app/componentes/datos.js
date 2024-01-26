'use client'
import Image from "next/image";
import React from "react";
import style from './datos.module.css';
import { useEffect, useState } from "react";

function pokemon() {


    const [estado, setEstado] = useState("esperando");

    const [tipe, setTipe] = useState();
    const [tipe2, setTipe2] = useState([null]);
    const [height, setHeight] = useState();
    const [width, setWidth] = useState();
    const [abilidad, setAbilidad] = useState([null]);
    const [abilidad2, setAbilidad2] = useState([null]);

    const [hp, setHp] = useState();
    const [atak, setAtak] = useState();
    const [defensa, seDefensa] = useState();
    const [speed, setSpeed] = useState();



    const url = "https://pokeapi.co/api/v2/pokemon/ivysaur";
    //const url="https://dog.ceo/api/breed/pitbull/images/random";
    // a esto se denomina llamar a un hook >
    useEffect(() => {
        // aqui se hace recuest
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setEstado(data.species.name),
                setAbilidad(data.abilities[0].ability.name),
                setAbilidad2(data.abilities[1].ability.name),
                setTipe(data.types[0].type.name), setTipe2(data.types[1].type.name),
                setHeight(data.height/10),
                setWidth(data.weight/10)
                
            });
    }, []);
    let altura={height}/10;
    return (
        <div className={style.contenedor}>
            <h1>Abaut</h1>

            <div className={style.datos}>


                <div className={style.dato}>

                    <p> Tipe</p>
                    <p> height</p>
                    <p> width</p>
                    <p> Abilities</p>



                </div>


                <div className={style.resultados}>

                    <p>{tipe}, {tipe2} </p>
                    <p> {height}m</p>
                    <p> {width}kg</p>
                    <p> {abilidad},{abilidad2}</p>


                </div>


            </div>


            <h1> Stats</h1>

            <div className={style.datos}>


                <div className={style.dato}>

                    <p> hp</p>
                    <p>atak</p>
                    <p> defensa</p>
                    <p> speed</p>
                    


                </div>


                <div className={style.resultados}>

                <p> {hp}</p>
                    <p>{atak}</p>
                    <p> {defensa}</p>
                    <p> {speed}</p>
                    


                </div>


            </div>
        </div>
    );
}

export default pokemon;

