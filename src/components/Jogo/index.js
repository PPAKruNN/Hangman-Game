import Forca from "../Forca/index"
import styled from "styled-components"
import WordDisplay from "../WordDisplay"
import "./index.css"

const Button = styled.button`
    background: #27AE60;
    width: 200px;
    height: 60px;
    border-radius: 8px;

    color: #FFF;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
`

export default function Jogo({level, guessedCharacters, targetWord, newWordCallback, wData}) {

    return (
        <div className="game">
            <Forca level={level}></Forca>
            <div className="UI">
                <Button onClick={newWordCallback} className="pickWord">
                    Escolher Palavra
                </Button> 
                <WordDisplay targetWord={targetWord} wData={wData} guessedCharacters={guessedCharacters}></WordDisplay>
            </div>
        </div> 

    )

}