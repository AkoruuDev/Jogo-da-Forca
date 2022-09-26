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

export default function Kick({ kick, theseLetter, setTheseLetter, gallow, setGallow }) {
    const [haveTheLetter, setHaveTheLetter] = useState(false);
    let count = 0;
    useEffect(() => {
        console.log('kick[i]');
        for (let i = 0; i <= kick.length; i ++) {
            console.log(kick[i]);
            console.log(theseLetter);
            console.log(kick[i] === theseLetter);
            if(kick[i] !== theseLetter) {
                count = count+1
            }
        }
        if (count !== kick.length) {
            console.log(gallow)
            setGallow(gallow + 1)
            console.log('não tem')
            console.log(gallow)
        }
    }, [theseLetter])
    
    /*useEffect(() => {
        
    }, [theseLetter && haveTheLetter])*/
    
    

    console.log(kick)
    return (
        <KickWordBox>
            {kick.map(
                (letter, i) => <KickWord
                    key={i}
                    letter={letter}
                    theseLetter={theseLetter}
                    setTheseLetter={setTheseLetter}
            />)}
        </KickWordBox>
    )
}

const KickWordBox = styled.div`
    font-size: 28px;
    position: fixed;
    right: 20vw;
    bottom: 40vh;
`