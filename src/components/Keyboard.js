import { useState } from "react"
import styled from "styled-components"

import alphabet from "../services/alphabet.js"

function Alphabet({letter, setTheseLetter}) {
    const [disable, setDisable] = useState(false);

    return (
        <>{disable ?
            <DisableLetter data-identifier="letter" >{letter}</DisableLetter> :
            <Letter data-identifier="letter" onClick={() => {
                setTheseLetter(letter)
                setDisable(true)
            }}>{letter}</Letter>}</>
    )
}

export default function Keyboard({kick, setTheseLetter}) {
    console.log(kick)
    return (
        <AlphabetConteiner>
            <Keys>
            {alphabet.map((letter, i) => <Alphabet key={i} letter={letter} setTheseLetter={setTheseLetter} />)}
            </Keys>
            <ToKick>
                <Input data-identifier="type-guess" type='text' placeholder='já sei a palavra!' />
                <Button data-identifier="guess-button">Chutar</Button>
            </ToKick>          
        </AlphabetConteiner>
    )
}

const AlphabetConteiner = styled.div`
    width: 80vw;
    height: 35vh;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    position: fixed;
    bottom: 2vh;
    right: 10vw;

    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`

const Keys = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const ToKick = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-around;
`

const Input = styled.input`
    width: 70%;
    height: 30px;
    border-radius: 8px;
    border: 1px solid gray;

    padding: 0 8px;

    &::placeholder {
        font-style: italic;
    }
`

const Button = styled.div`
    width: 25%;
    height: 30px;
    border-radius: 8px;
    border: none;
    background-color: yellowgreen;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 8px 4px gray;
        background-color: greenyellow;
    }
`

const Letter = styled.div`
    width: 30px;
    height: 30px;
    margin: 20px;
    background-color: #C0C0C0;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;

    &:hover {
        cursor: pointer;
        background-color: #DCDCDC;
        box-shadow: 0 4px 10px 2px gray;
    }
`

const DisableLetter = styled.div`
    width: 30px;
    height: 30px;
    margin: 20px;
    background-color: #696969;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
`