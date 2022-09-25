import { useEffect, useState } from "react";
import styled from "styled-components";

function KickWord({letter}) {
    const [newLetter, setNewLetter] = useState(letter)
    useEffect(() => (
        setNewLetter("_ ")
    ), [])
    return (<>{newLetter}</>)
}

export default function Kick({kick}) {
    console.log(kick)
    return (
        <KickWordBox>
            {kick.map((letter, i) => <KickWord key={i} letter={letter} />)}
        </KickWordBox>
    )
}

const KickWordBox = styled.div`
    font-size: 28px;
    position: fixed;
    right: 20vw;
    bottom: 40vh;
`