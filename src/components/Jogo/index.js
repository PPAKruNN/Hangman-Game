import Forca from "../Forca/index"
import styled from "styled-components"
import WordDisplay from "../WordDisplay"

const Button = styled.button`
    background: #27AE60;
    width: 200px;
    height: 60px;
    border-radius: 20px;
    position: relative;

    border: 2px solid lightgreen;

    color: #FFF;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;

    transition-duration: 0.1s;

    &:hover {
        background-color: #1d8448;
        border-bottom: 1px solid #0f4926;
        border-right: 1px solid #0f4926;
    }

    &:before {
        content: " ";
        position: absolute;
        z-index: -1;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        border-radius: 20px;
        width: 175px;
        height: 54px;
        border: none;
        border-right: 27px solid #0f4926;
        border-bottom: 10px solid #0f4926;
        
        transition-duration: 0.1s;
    }

    &:hover::before {
        border-right: none;
        border-bottom: none;
        border-left: 27px solid #0f4926;
        border-top: 10px solid #0f4926;
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
                <Button data-test="choose-word" onClick={newWordCallback} className="pickWord">
                    Escolher Palavra
                </Button> 
                <WordDisplay targetWord={targetWord} wData={wData} guessedCharacters={guessedCharacters}></WordDisplay>
            </UI>
        </Game> 

    )

}