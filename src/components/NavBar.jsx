import propTypes from "prop-types";

function NavBar ({pokemonIndex, setPokemonIndex, length}) {
    return ( 
        <div>
          {pokemonIndex > 0 ? (<button onClick={() => setPokemonIndex(pokemonIndex -1)}>Précédent</button>)
           : ("")}

           {/*
                    !!Autre méthode avec l'utilisation du && logique!!
          {pokemonIndex > 0 && (<button onClick={() => setPokemonIndex(pokemonIndex -1)}>Précédent</button>)}
          */}
          
          {pokemonIndex < length -1 ? (<button onClick={() => setPokemonIndex(pokemonIndex +1)}>Suivant</button>)
           : ("")}
        </div>
     );
}

NavBar.propTypes = {
    pokemonIndex : propTypes.number.isRequired,
    setPokemonIndex : propTypes.func.isRequired,
    length : propTypes.number.isRequired,
}

export default NavBar;