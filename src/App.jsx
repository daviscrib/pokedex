import './App.css'
import Header from "./components/Header";
import CardList from "./components/CardList";
import PokemonCard from "./components/PokemonCard";
import Footer from "./components/Footer";


function App() {
    return (
    <>
        <Header/>
        <CardList/>
        <PokemonCard/>
        <Footer/>
    </>
  )
}

export default App