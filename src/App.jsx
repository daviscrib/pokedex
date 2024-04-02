import './App.css'
import Header from "./components/Header";
import CardList from "./components/CardList";
import PokemonCard from "./components/PokemonCard";
import Footer from "./components/Footer";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
    return (
    <>
        <Header/>
        <CardList/>
        <PokemonCard pokemon = {pokemonList[0]} />  
        <Footer/>
    </>
  )
}

export default App;