import Forca from "../Forca/index"
import styled from "styled-components"
import WordDisplay from "../WordDisplay"

const Button = styled.button`
    background: #27AE60;
    width: 200px;
    height: 60px;
    border-radius: 8px;

    color: #FFF;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;

    transition-duration: 0.1s;

    &:hover {
        background-color: #1d8448;
    }
`
const Game = styled.div`
    width: 100%;
    height: 400px;

    display: flex;
    justify-content: space-between;
`

const UI = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    align-items: flex-end;
`

export default function Jogo({level, guessedCharacters, targetWord, newWordCallback, wData}) {

    return (
        <Game>
            <Forca level={level}></Forca>
            <UI>
                <Button onClick={newWordCallback} className="pickWord">
                    Escolher Palavra
                </Button> 
                <WordDisplay targetWord={targetWord} wData={wData} guessedCharacters={guessedCharacters}></WordDisplay>
            </UI>
        </Game> 

    )

}