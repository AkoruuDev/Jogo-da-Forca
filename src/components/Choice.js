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
    width: 90vw;
    height: 90vh;
    padding: 20px;
    border-radius: 30px;
    background-color: #FFFAFA;
    box-shadow: 0 4px 10px 4px gray;

    position: fixed;
    top: calc(50vh - 45vh);
    left: calc(50vh - 45vh);

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
    font-family: 'Josefin Sans', sans-serif;

    &:hover {
        cursor: pointer;
        background-color: #F5F5F5;
    }
`