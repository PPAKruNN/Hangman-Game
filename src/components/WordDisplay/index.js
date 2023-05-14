import { css, styled } from "styled-components";

export default function WordDisplay({targetWord, guessedCharacters, wData}) {
    
    //  wData = {
    //      done: true;
    //      correct: false;     
    //  }
    //
    //
    const TextDisplay = styled.h1`
        color: #000;
        font-family: "Noto Sans", "Roboto";
        font-size: 50px;
        font-weight: 700;
        line-height: 68px; 
        ${(props) => {
            if(props.$finished === true)
            {
                return css`
                color: green;
            `
            }
            if(props.$finished === false)
            {
                return css`
                color: red;
            `
            }
            
        }}
    `


    function genWordDisplay() {
        let cwDisplay = "";

        for (let i = 0; i < targetWord.length; i++) {
            const char = targetWord[i];

            if(guessedCharacters.includes(char)) {
                cwDisplay += char + " " //Adiciona o caractere e um espaco.
            }
            else {
                cwDisplay += "_ " // Adiciona um "blank" caso esteja errado.
            }
        }

        return cwDisplay
    }

    function wDataConsumer() {
        if(!wData.done) return "";
        return wData.correct;
    }

    return (
        <TextDisplay data-test="word" $finished={wDataConsumer()}>
            {genWordDisplay()}
        </TextDisplay>
    )
}