import styled from "styled-components";

import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

export default function Gallow({ gallow }) {
    const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
    return (
        <Image data-identifier="game-image" src={forca[gallow]} alt={`forca${gallow}`} />
    )
}

const Image = styled.img`
    height: 60vh;
    margin-top: 5vh;
    margin-left: 3vw;
`