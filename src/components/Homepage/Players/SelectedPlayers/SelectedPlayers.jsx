import React from 'react';
import { Trash } from "lucide-react";
import { toast } from 'react-toastify';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin}) => {
    console.log(selectedPlayers);

    const handleDeleteSelectedPlayers = (player) => {

        const filteredSelectedPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName);

        setSelectedPlayers(filteredSelectedPlayers);
        setCoin(coin + player.price);
        toast.warning(`${player.playerName} is removed from the selection`);
    }

    return (
      <div className="max-w-330 mx-auto">
        {selectedPlayers.length === 0 ? (
          <div className='flex justify-center items-center flex-col h-50'> 
            <h3 className='font-bold text-xl'>No Players selected yet</h3>
            <p className='text-lg text-gray-500'>Go to available tab to select players</p>
          </div>
        ) : (
          selectedPlayers.map((player) => (
            <div
              key={player.playerName}
              className="flex justify-between items-center border border-gray-300 rounded-md shadow-sm px-5 py-4 mb-4"
            >
              <div className="flex items-center gap-2">
                <img
                  src={player.image}
                  alt={player.playerName}
                  className="w-auto h-19 rounded-md"
                />
                <div>
                  <h3 className="font-bold text-xl">{player.playerName}</h3>
                  <p>{player.battingStyle}</p>
                </div>
              </div>
              <button onClick={() => handleDeleteSelectedPlayers(player)}>
                <Trash></Trash>
              </button>
            </div>
          ))
        )}
      </div>
    );
};

export default SelectedPlayers;