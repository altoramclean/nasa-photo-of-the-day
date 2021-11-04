//decided to just make a card instead, so i deleted the other files because it was getting confusing with all those pages
import React from 'react';
import styled from 'styled-components';


const StyleExtra = styled.h2`
    font-size: 1.6em;
    text-align:center;
    color:black;
    `;

const StyledP = styled.div`
    font-size:1.4rem;
    text-align: center;
    color:#BC8F8F;
`;

const StyledP2 = styled.div`
    font-size: 1.2rem;
    text-align: center;
    color:#A0522D;
`;



const NasaCard = (props) => {
return (
    <StyleExtra>
    <h2> This is the Nasa Card!<span role="img" aria-label='smiley face'>😬</span></h2>
<StyledP> 
    <p>{props.data.date}</p>
    <p>{props.data.title}</p>
</StyledP>
    <img src={props.data.url} alt="Nasa pic of the day"/>
    <StyledP2> 
    <p>{props.data.explanation}</p>
    <p>Copyright : {props.data.copyright}</p>
    </StyledP2>
    </StyleExtra> 
   
)

}
export default NasaCard;