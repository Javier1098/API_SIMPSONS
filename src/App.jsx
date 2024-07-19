import { useState } from 'react';
import './App.css'
import simpimg from './imagen/simpson.jpg';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] =useState(null);

  const getCharacters = async () => {

    try{
      const apiCharacters = await fetch ('https://thesimpsonsquoteapi.glitch.me/quotes?count=50')
    const jsonCharacters = await apiCharacters.json();
    console.log(jsonCharacters);

    let charactersMap = jsonCharacters.map(item => {
      return [item.character, item]
    });
    let charactersMapArr = new Map(charactersMap);
    let uniqueCharacters = [...charactersMapArr.values()];
    console.log(uniqueCharacters);

    setCharacters(uniqueCharacters);

    } catch(error){
      console.log(error);

    }
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>The Simpsons</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ): (
          <>
            <img src={simpimg} alt="lossimpsom" className='img-home'/>
            <div>
            <button className='btn' onClick={getCharacters}> Buscar personajes</button>
            </div>
          </>
        )}
      </header>

    </div>
    
  );
}
export default App
