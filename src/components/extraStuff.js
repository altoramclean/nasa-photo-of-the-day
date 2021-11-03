//decided to just make a card instead, so i deleted the other files because it was getting confusing with all those pages
import React from 'react';

const NasaCard = (props) => {
return (
    <>
    <h1> This is the Nasa Card!</h1>
    <p>{props.data.date}</p>
    <p>{props.data.title}</p>
    <img src={props.data.url} alt="Nasa pic of the day"/>
    <p>{props.data.explanation}</p>
    <p>Copyright : {props.data.copyright}</p>
    </>
)

}
export default NasaCard;