import styled from "styled-components";

export default function Kick({kick}) {
    console.log(kick)
    return (
        <KickWord>
            {kick.map((letter, i) => <>_ </>)}
        </KickWord>
    )
}

const KickWord = styled.div`
    font-size: 28px;
    position: fixed;
    right: 20vw;
    bottom: 40vh;
`