import './App.css'
import Header from "./components/Header";
import CardList from "./components/CardList";
import PokemonCard from "./components/PokemonCard";
import Footer from "./components/Footer";
import NavBar from './components/NavBar';
import { useState } from 'react';

const pokemonList = [
{
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

    return (
        <>
          <Header/>
          <CardList/>
          <PokemonCard
            pokemon = {pokemonList[pokemonIndex]}
          />
          <NavBar
            pokemonIndex = {pokemonIndex}
            setPokemonIndex = {setPokemonIndex}
            length = {pokemonList.length}
          />
          <Footer/>
    </>
  )
}

export default App;