import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ApplicantCard = ({ applicant, index, moveCard, setApplicants, applicants }) => {
  const { name, location, rating, phone, status,followUp, photo } = applicant;

  const [, drag] = useDrag({
    type: 'APPLICANT',
    item: { ...applicant, index, sourceSetApplicants: setApplicants },
  });

  const [, drop] = useDrop({
    accept: 'APPLICANT',
    hover(item, monitor) {
      if (item.sourceSetApplicants === setApplicants && item.index !== index) {
        moveCard(item.index, index, applicants, setApplicants);
        item.index = index;
      }
    },
  });

  return (
    <>
      <div ref={(node) => drag(drop(node))} className="bg-white p-4 rounded-lg mb-2">
        <div>
          <div>
          
         <div className='flex items-center space-x-2'>
         <div>
              {photo && <img src={photo} alt={`${name}'s photo`} className="w-9 h-9 rounded-md" />}
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-5">
                <div className="font-bold text-md">{name}</div>
                <div className="bg-[#e0e7ff] text-blue-600 text-xs rounded-lg px-2 py-1">{status}</div>
              </div>
              <div className="text-sm text-gray-400 font-semibold">{location}</div>
            </div>
         </div>
           
            <div className="flex items-center space-x-3">
              <div className="text-sm rounded bg-slate-100 my-2 px-2 py-1 font-bold rounded-lg w-14">{rating} ⭐</div>
              <div className="text-sm text-gray-400 font-semibold">{phone}</div>
              <div className="bg-blue-600 text-white text-xs rounded-lg px-2 py-1">{followUp}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicantCard;
