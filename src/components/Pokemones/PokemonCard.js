import React from "react";
import espeon from "../../imagenes/espeon.jpg";
import "../Home/Home.css";

function PokemonCard({name, url,img}) {
    return(
        <div className="espeon-div">
        <div className="espeon-box">
          <div className="div-names">
          <h2 className="h2-espeon">{name}</h2>
          <h3>エーフィ </h3>
          </div>
          <img className="espeon-pic" src={img}></img>
        </div>

        <div className="espec-div">
          
          <p>Pokemon #196</p>
          <p>26,5kg</p>
        </div>
      
        <div className="box-caracteristicas">
       <a href="/"> <h3>Habilidades</h3></a>
       <a href="/"> <h3>Huella</h3></a>
       <a href="/"> <h3>Amistad base</h3></a>
        </div>

      </div>
    )
}

export default PokemonCard;