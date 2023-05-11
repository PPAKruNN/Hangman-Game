import { styled } from 'styled-components';
import './App.css';
import Jogo from './components/Jogo';
import Keyboard from './components/Keyboard';
import { useState } from 'react';
import palavras from './palavras';
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const StyledApp = styled.div`
  max-width: 1000px;
  min-width: 700px;
  
  display: flex;
  flex-direction: column;
  
  `

function App() {

  const [usedCharacters, setUsedCharacters] = useState(alfabeto);
  const [guessedCharacters, setGuessedCharacters] = useState([]);
  const [forcaLevel, setForcaLevel] = useState(0);
  const [targetWord, setTargetWord] = useState("");
  const [wData, setwData] = useState({done: false})

  function keyCallback(char) {
      const arr = [...usedCharacters];  // update usedcharacters
      arr.push(char);
      setUsedCharacters(arr);

      if(targetWord.includes(char)) // If char is included in the word!
      {
        const newGuessArr = [...guessedCharacters]
        newGuessArr.push(char);
        setGuessedCharacters(newGuessArr);
        
        const twArr = [...targetWord]
        if(twArr.every( (char) => newGuessArr.includes(char))) venceu();        
      }
      else                         // If the char is not included in the word!
      {
        if(forcaLevel + 1 === 6) perdeu();
        setForcaLevel(forcaLevel + 1);
      }
  }

  function venceu()
  {
    setwData({
      done: true,
      correct: true,
    });
    
    setUsedCharacters(alfabeto)
  }

  function perdeu() {
    setwData({
      done: true,
      correct: false,
    });
    setForcaLevel(6);
    setUsedCharacters(alfabeto);
    setGuessedCharacters(targetWord.split(""))
  }

  function selectNewWord() {
    const rand = Math.floor(Math.random() * (palavras.length + 1)); // numero randomico de 0 - 188.    
    setTargetWord(palavras[rand].toLowerCase());
    
    setUsedCharacters([]);
    setGuessedCharacters([])
    setForcaLevel(0);
    setwData({
      done: false,
    });
  }


  return (
    <StyledApp>
      <Jogo wData={wData} level={forcaLevel} guessedCharacters={guessedCharacters} targetWord={targetWord} newWordCallback={selectNewWord}></Jogo>
      <Keyboard usedCharacters={usedCharacters} keyCallback={keyCallback}></Keyboard>
    </StyledApp>
  );
}

export default App;
