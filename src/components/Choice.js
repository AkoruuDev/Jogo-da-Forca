import words from "../services/words";

function Word({word}) {
    return(
        <>{word}</>
    )
}

export default function Choice() {
    return (
        <div>
            {words.map((word, i) => <Word key={i} word={word} />)}
        </div>
    )
}