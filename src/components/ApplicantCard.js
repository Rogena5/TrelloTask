import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ApplicantCard = ({ applicant, index, moveCard, setApplicants, applicants }) => {
  const { name, location, rating, phone, status,followUp, photo } = applicant;
  const [{ isDragging }, drag] = useDrag({
    type: 'APPLICANT',
    item: { ...applicant, index, sourceSetApplicants: setApplicants },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
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
      <div ref={(node) => drag(drop(node))}  className={`p-3 rounded-lg ${
        isDragging ? 'border-2 border-dashed border-gray-300 bg-gray-200' : ''
      }`}>
        <div className='bg-white p-4 rounded-lg'>
          <div>
         <div className='flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2'>
         <div>
              {photo && <img src={photo} alt={`${name}'s photo`} className="w-9 h-9 rounded-md" />}
            </div>

            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-5">
                <div className="font-bold md:text-base text-sm">{name}</div>
                <div className="bg-[#e0e7ff] text-blue-600 text-xs rounded-lg px-2 py-1">{status}</div>
              </div>
              <div className="md:text-sm text-xs text-gray-400 font-semibold">{location}</div>
            </div>
         </div>
           
            <div className="flex md:flex-row flex-col md:items-center md:space-x-2 space-y-2 mt-3 md:mt-2">
              <div className="md:text-sm text-xs bg-slate-100 py-1 px-2 rounded-lg">{rating} ⭐</div>
              <div className="w-1/3 md:text-sm text-xs text-gray-400 font-normal">{phone}</div>
              <div className="w-1/3 text-center bg-blue-600 text-white md:text-xs text-xs rounded-lg px-2 py-1">{followUp}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicantCard;
