import styled from "styled-components"

import alphabet from "../services/alphabet.js"

function tryThese(letter) {
    console.log(letter)
}

function Alphabet({letter}) {
    return (
        <Letter onClick={() => tryThese(letter)}>{letter}</Letter>
    )
}

export default function Keyboard({kick}) {
    console.log(kick)
    return (
        <AlphabetConteiner>
            {alphabet.map((letter, i) => <Alphabet key={i} letter={letter} />)}            
        </AlphabetConteiner>
    )
}

const AlphabetConteiner = styled.div`
    width: 80vw;
    height: 30vh;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    position: fixed;
    bottom: 2vh;
    right: 10vw;

    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
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