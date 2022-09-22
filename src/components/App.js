import GlobalStyle from "../style/globalStyles";
import Choice from "./Choice";
import Gallow from "./Gallow";
import Keyboard from "./Keyboard";
import Kick from "./Kick";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Choice />
            <Gallow />
            <Keyboard />
            <Kick />
        </>
    )
}