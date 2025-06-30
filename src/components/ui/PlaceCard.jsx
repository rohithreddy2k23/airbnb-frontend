import React from 'react';
import { Link } from 'react-router-dom';

const PlaceCard = ({ place }) => {
  const { _id: placeId, photos, address, title, price } = place;

  return (
    <Link
      to={`/place/${placeId}`}
      className="w-full max-w-sm rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-200"
    >
      {photos?.[0] ? (
        <img
          src={photos[0]}
          alt={title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image Available
        </div>
      )}

      <div className="p-4">
        <h2 className="truncate font-semibold text-lg">{address}</h2>
        <h3 className="truncate text-sm text-gray-600">{title}</h3>
        <div className="mt-2 text-sm">
          <span className="font-bold text-gray-800">₹{price}</span> per night
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
