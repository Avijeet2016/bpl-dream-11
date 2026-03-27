import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { toast } from 'react-toastify';

const PlayerCard = ({ player, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
  
  const {
    playerName,
    playerCountry,
    playerType,
    rating,
    battingStyle,
    bowlingStyle,
    price,
    image,
  } = player;
  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = () => {
    if ((coin - player.price) < 0) {
      toast.warning("Not enough coin to purchase this player");
      return;
    } else {
      setCoin(coin - player.price);
      toast.success(`${player.playerName} is selected successfully`);
    }
    
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers, player]);
    console.log(selectedPlayers);
  }

  return (
    <div className="card bg-base-100 shadow-sm space-y-2">
      <figure>
        <img src={image} alt="image" className="w-full h-70" />
      </figure>
      <div className="px-5 pb-5">
        <div className="flex items-center gap-2">
          <FaUser></FaUser>
          <h2 className="card-title">{playerName}</h2>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaFlag />
            {playerCountry}
          </div>
          <button className="btn btn-sm">{playerType}</button>
        </div>
        <div className="divider"></div>
        <div>
          <h3 className="font-bold">Rating: {rating}</h3>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold">{battingStyle}</p>
          <p>{bowlingStyle}</p>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-bold">Price: ${price}</h3>
          <button
            onClick={handleChoosePlayer}
            className="btn btn-sm"
            disabled={isSelected}
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;