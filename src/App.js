import { styled } from 'styled-components';
import './App.css';
import Jogo from './components/Jogo';
import Keyboard from './components/Keyboard';
import { useState } from 'react';
import palavras from './palavras';

const StyledApp = styled.div`
  max-width: 1000px;
  min-width: 700px;
  
  display: flex;
  flex-direction: column;
  
  `

function App() {

  const [usedCharacters, setUsedCharacters] = useState([]);
  const [guessedCharacters, setGuessedCharacters] = useState([]);
  const [forcaLevel, setForcaLevel] = useState(0);
  const [targetWord, setTargetWord] = useState("breno");

  function keyCallback(char) {
      const arr = [...usedCharacters];  // update usedcharacters
      arr.push(char);
      setUsedCharacters(arr);

      if(targetWord.includes(char)) // If char is included in the word!
      {
        const newGuessArr = [...guessedCharacters]
        newGuessArr.push(char);
        setGuessedCharacters(newGuessArr);

        // Checar se venceu!
        
      }
      else                         // If the char is not included in the word!
      {
        setForcaLevel(forcaLevel + 1);
      }
  }

  function selectNewWord() {
    const rand = Math.floor(Math.random() * (palavras.length + 1)); // numero randomico de 0 - 188.    
    setTargetWord(palavras[rand].toLowerCase());
    
    setUsedCharacters([]);
    setGuessedCharacters([])
    setForcaLevel(0);

  }


  return (
    <StyledApp>
      <Jogo level={forcaLevel} guessedCharacters={guessedCharacters} targetWord={targetWord} newWordCallback={selectNewWord}></Jogo>
      <Keyboard usedCharacters={usedCharacters} keyCallback={keyCallback}></Keyboard>
    </StyledApp>
  );
}

export default App;
