import { styled } from "styled-components";

export default function WordDisplay({targetWord, guessedCharacters}) {
    
    const TextDisplay = styled.h1`
        color: #000;
        font-family: "Noto Sans", "Roboto";
        font-size: 50px;
        font-weight: 700;
        line-height: 68px; 
    `


    function genWordDisplay() {
        let guessedCharCount = 0 // Quantas letras foram acertadas; Caso seja igual a targetWord.length, significa que a palavra foi completamente encontrada.
        let cwDisplay = "";

        for (let i = 0; i < targetWord.length; i++) {
            const char = targetWord[i];

            if(guessedCharacters.includes(char)) {
                guessedCharCount++;
                cwDisplay += char + " " //Adiciona o caractere e um espaco.
            }
            else {
                cwDisplay += "_ " // Adiciona um "blank" caso esteja errado.
            }
        }
        
        if(guessedCharCount === targetWord.length) { // Checa se o player venceu!
            console.log("Venceu!!")
        }

        return cwDisplay
    }

    return (
        <TextDisplay>
            {genWordDisplay()}
        </TextDisplay>
    )
}