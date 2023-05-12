import { styled } from "styled-components";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const Key = styled.button`
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    width: 40px;
    height: 40px;
    box-sizing: border-box;

    border: 1px solid #7aa7c7;
    border-radius: 3px;
    background-color: #E1ECF4;
    color: #39739D;

    &:disabled{
        background-color: #9FAAB5;
        color: #798A9F;
    }
`
const Row = styled.div`
    display: flex;
    gap: 16px;
`

const StyledKeyboard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    margin-top: 20px;
    padding: 35px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`

export default function Keyboard({usedCharacters, keyCallback}) {

    function genRow(firstRow) {
        const arr = []
        let min = 0;
        let max = 12;

        if(!firstRow)
        {
            min = 13;
            max = 25;
        }

        for (let i = min; i <= max; i++) {
            const currChar = alfabeto[i];
            const isDisabled = usedCharacters.includes(currChar)
            
            arr.push(<Key key={i} onClick={ () => {keyCallback(currChar)}} disabled={isDisabled}> {currChar} </Key>)    
        }

        return arr;
    }

    return (
        <StyledKeyboard>
            <Row>
                {genRow(true)}
            </Row>
            <Row>
                {genRow(false)}
            </Row>
        </StyledKeyboard>
    )
}