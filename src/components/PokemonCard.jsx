import React from "react";
import propTypes from "prop-types"; 

function PokemonCard({pokemon}) {
   
    return (
        <>
            <figure>
                {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}
                <figcaption>{pokemon.name}</figcaption>
            </figure>
            
        </>
    );
}

PokemonCard.propTypes = {
    pokemon : propTypes.shape({
        imgSrc : propTypes.string,
        name : propTypes.string.isRequired,
   }).isRequired,
}

export default PokemonCard;
