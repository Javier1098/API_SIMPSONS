import React from 'react'

export default function Characters(props) {
    const {characters, setCharacters} = props;

    const resetCharacters = () => {
        setCharacters(null);
    }


  return (
    <div className='characters'>
        <button className='btn' onClick={resetCharacters}>
            <span className='back'>volver</span>
        </button>
        <div className='characters-container'>
            {characters.map((character, index) =>(
                <div className='character-details' key={index}>
                    <h3>{character.character}</h3>
                    <img src={character.image} alt={character.character} />
                    <p>{character.quote}</p>

                </div>
            ))}
        </div>
    </div>
  )
}
