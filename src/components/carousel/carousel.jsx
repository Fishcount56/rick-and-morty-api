import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "./carousel.css";

const CharacterCarousel = () => {
  const title = 'Dashboard'
  document.title = title

  const [character, setCharacter] = useState([]);

  const [charId, setCharId] = useState([]);

  const RandomNumber = () => {
    let CeilNum = Math.ceil(Math.random() * 827);
    setCharId((charId) => [...charId, CeilNum]);
  };

  const GetCharacters = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${charId}`)
      .then((response) => {
        setCharacter(response.data);
      });
  };

  useEffect(() => {
    for (let i = 1; i <= 3; i++) {
      RandomNumber();
    }
  }, []);

  useEffect(() => {
    GetCharacters();
  }, [charId]);

  return (
    <>
      <div className="cardContent">
        <h1>Character Overview</h1>
        <Carousel
          showThumbs={true}
          showArrows={true}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={true}
          autoPlay={true}
          renderIndicator={false}
          interval={3000}
        >
          {Object.keys(character)?.map((item, index) => (
            <div className="cardCarousel" key={index}>
              <img src={character[item].image} alt="" />
              <h1 className="charName">{character[item].name}</h1>
              <p className="charStatus">{character[item].status}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CharacterCarousel;
