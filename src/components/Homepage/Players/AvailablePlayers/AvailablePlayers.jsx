import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ players, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
  
  return (
    <div className="max-w-330 mx-auto grid grid-cols-3 gap-10">
      {players.map((player, index) => (
        
        <PlayerCard
          key={index}
          player={player}
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        >
        </PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;