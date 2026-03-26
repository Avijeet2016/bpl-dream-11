import React from 'react';
import Card from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ players }) => {
  return (
    <div className="max-w-330 mx-auto grid grid-cols-3 gap-10">
      {players.map((player, index) => (
        <Card key={index} player={player}></Card>
      ))}
    </div>
  );
};

export default AvailablePlayers;