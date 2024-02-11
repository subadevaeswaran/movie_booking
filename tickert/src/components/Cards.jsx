import React from 'react';

function Cards() {
  return (
    <div className="relative max-w-xs flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl">
        <img
          src="https://rukminim2.flixcart.com/image/850/1000/ju2z6a80/poster/v/9/g/medium-endgameart-avengers-endgame-new-poster-for-room-office-original-imaff9ecy3wgbdtv.jpeg?q=90&crop=false"
          alt="card-image" className="object-cover w-full h-56 md:h-72 lg:h-96" />
      </div>
      <div className="p-3 px-7 mb-2">
        <div className="flex items-center justify-between">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-black">
            Avengers: Endgame
          </p>
          <p className="block font-sans text-sm antialiased font-small leading-relaxed text-blue-gray-900">
            3h 1m
          </p>
        </div>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-600">
          Action/Sci-Fi
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="font-sans font-bold text-center uppercase transition-all text-white text-xs py-3 px-6 rounded-lg bg-indigo-500 w-full"
          type="button">
          Book NOW
        </button>
      </div>
    </div>
  );
}

export default Cards;
