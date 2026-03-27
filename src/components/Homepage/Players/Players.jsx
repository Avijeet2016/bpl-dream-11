import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playerPromise, setCoin, coin }) => {
  const players = use(playerPromise);
  const [selectedType, setSelectedType] = useState("available");
  
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div>
      <div className="max-w-330 mx-auto flex justify-between items-center mb-5">
        <h2 className="font-bold text-2xl">
          {selectedType === "available"
            ? "Available Players"
            : `Selected Players (${selectedPlayers.length}/${players.length})`}
        </h2>
        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#DEF428]" : ""}  rounded-r-none rounded-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#DEF428]" : ""} rounded-l-none rounded-xl`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      {selectedType === "available" ? (
        <AvailablePlayers
          players={players}
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;