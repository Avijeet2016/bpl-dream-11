import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import logoImg from '../../assets/logo.png';


const Navbar = ({coin}) => {
    return (
      <div className="max-w-330 mx-auto flex justify-between items-center px-5 py-4 mb-5">
        <div>
          <img src={logoImg} alt="Logo Image" />
        </div>
        <div className="flex justify-between items-center">
          <div className='mr-10'>
            <ul className="flex justify-between items-center gap-8">
              <li>Home</li>
              <li>Fixtures</li>
              <li>Teams</li>
              <li>Schedules</li>
            </ul>
          </div>
          <div className="font-bold text-xl">
            <button>
              {coin} Coin <FontAwesomeIcon icon={faBitcoin} color="gold" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;