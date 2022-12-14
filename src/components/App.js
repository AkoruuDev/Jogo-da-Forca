import { useState } from "react";

import GlobalStyle from "../style/globalStyles";
import Choice from "./Choice";
import Gallow from "./Gallow";
import Keyboard from "./Keyboard";
import Kick from "./Kick";

import words from "../services/words";

export default function App() {
    const random = Math.floor(Math.random() * words.length);
    const word = words[random].split("");
    const [kick, setKick] = useState(word);
    const [theseLetter, setTheseLetter] = useState("");
    const [gallow, setGallow] = useState(-1);
    
    return (
        <>
            <GlobalStyle />
            <Choice setKick={setKick}/>
            <Gallow gallow={gallow} />
            <Keyboard kick={kick} setTheseLetter={setTheseLetter} />
            <Kick
                kick={kick}
                theseLetter={theseLetter}
                setTheseLetter={setTheseLetter}
                setGallow={setGallow}
                gallow={gallow}
            />
        </>
    )
}