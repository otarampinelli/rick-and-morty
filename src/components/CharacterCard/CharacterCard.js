import React from 'react';

import './CharacterCard.css';

const CharacterCard = ({ name, image, gender, status, origin }) => {
  return (
    <section className="card-character">
      <div className="avatar">
        <img src={image} alt="character" />
        <h3>{name}</h3>
      </div>
      <div className="infos">
        <p>
          <strong>Location:</strong> {origin}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Status:</strong> {status}
        </p>
      </div>
    </section>
  );
};

export default CharacterCard;
