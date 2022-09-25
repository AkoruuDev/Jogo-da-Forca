import { useEffect, useState } from "react";
import styled from "styled-components";

function KickWord({ letter, theseLetter, setTheseLetter }) {
    const [newLetter, setNewLetter] = useState(letter)
    useEffect(() => (
        setNewLetter(" _ ")
    ), [])
    
    useEffect(() => {
        if(theseLetter === letter) {
            setNewLetter(theseLetter);
            setTheseLetter("")
        }
    }, [theseLetter])

    

    return (<>{newLetter}</>)
}

export default function Kick({ kick, theseLetter, setTheseLetter }) {
    console.log(kick)
    return (
        <KickWordBox>
            {kick.map((letter, i) => <KickWord key={i} letter={letter} theseLetter={theseLetter} setTheseLetter={setTheseLetter} />)}
        </KickWordBox>
    )
}

const KickWordBox = styled.div`
    font-size: 28px;
    position: fixed;
    right: 20vw;
    bottom: 40vh;
`