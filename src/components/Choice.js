import words from "../services/words";
import styled from 'styled-components';
import { useState } from "react";

function start(word, setShow) {
    console.log(word);
    setShow(false);
}

function Word({word, setShow}) {
    return(
        <WordBox onClick={() => start(word, setShow)}>{word}</WordBox>
    )
}

export default function Choice() {
    const [show, setShow] = useState(false)
    return (
        <>
            <Button onClick={() => setShow(!show)}>Escolher palavra</Button>
            <WordContainer show={show}>
                {words.map((word, i) => <Word key={i} word={word} setShow={setShow}/>)}
            </WordContainer>
        </>
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
    z-index: 1;

    display: ${props => props.show ? 'flex' : 'none'};
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
        border-color: #E6E6FA;
        box-shadow: 0 4px 10px 4px gray;
    }
`

const Button = styled.div`
    height: 50px;
    width: 170px;
    background-color: green;
    border-radius: 30px;
    color: #f6f6fa;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;
    
    position: fixed;
    top: 3vh;
    right: 5vw;

    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 10px 4px gray;
    }
`