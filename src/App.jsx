import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="header">
        <Header/>
      </div>
      <div id="cardList">
        <CardList/>
      </div>
      <div id="card">
        <Card/>
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </>
  )
}

export default App
