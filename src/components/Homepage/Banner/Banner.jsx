import React from 'react';
import bannerImg from '../../../assets/banner-main.png';

const Banner = () => {
    return (
      <div className="max-w-330 mx-auto text-center rounded-3xl py-10 space-y-5 bg-linear-to-tr from-blue-500 to-yellow-500">
        <img src={bannerImg} alt="Banner Image" className='mx-auto'/>
        <h1 className='font-bold text-white text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className='text-gray-300'>Beyond Boundaries Beyond Limits</p>
        <button className="bg-[#DEF428] border-8 outline-3 outline-[#DEF428] rounded-3xl px-5 py-3 font-bold">
          Claim Free Credit
        </button>
      </div>
    );
};

export default Banner;