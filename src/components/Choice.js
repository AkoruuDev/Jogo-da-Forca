import words from "../services/words";
import styled from 'styled-components';

function Word({word}) {
    return(
        <WordBox>{word}</WordBox>
    )
}

export default function Choice() {
    return (
        <WordContainer>
            {words.map((word, i) => <Word key={i} word={word} />)}
        </WordContainer>
    )
}

const WordContainer = styled.div`
    width: 40vw;
    height: 98vh;
    padding: 20px 20px 40px;
    background-color: aqua;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow: auto;
    &::-webkit-scrollbar{
        opacity: 1;
    }

`

const WordBox = styled.span`
    padding: 8px;
    margin: 10px;
    border-radius: 10px;
    background-color: #E6E6FA;

    &:hover {
        cursor: pointer;
        background-color: #F5F5F5;
    }
`