import React from 'react';

const ApplicantCard = ({ name, location, rating, phone, status }) => {
  return (
    <div className="bg-white flex justify-between items-center p-4 rounded-lg mb-2">
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-sm text-gray-500">{location}</div>
        <div className="text-sm">{rating} ⭐</div>
        <div className="text-sm">{phone}</div>
      </div>
      {status === 'New' && <div className="bg-blue-500 text-white text-xs rounded px-2 py-1">New</div>}
      {status === 'Followed' && <div className="bg-green-500 text-white text-xs rounded px-2 py-1">Followed</div>}
    </div>
  );
};

export default ApplicantCard;
