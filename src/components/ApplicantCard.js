import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { FaSignal } from "react-icons/fa";

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
      <div ref={(node) => drag(drop(node))}  className={`p-3 rounded-lg cursor-grabbing ${
        isDragging ? 'border-2 border-dashed border-gray-300 bg-gray-200' : ''
      }`}>
        <div className='bg-white p-4 rounded-2xl'>
          <div>
         <div className='flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-2'>
         <div>
              {photo && <img src={photo} alt={`${name}'s photo`} className="w-12 h-12 rounded-md" />}
            </div>

            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-5">
                <div className="flex items-center gap-2 font-bold md:text-base text-sm"><FaSignal className='text-blue-400' size={15}/> {name}</div>
                <div className="bg-[#e0e7ff] text-blue-600 text-xs rounded-lg px-2 py-1">{status}</div>
              </div>
              <div className="md:text-sm text-xs text-gray-400 font-semibold">{location}</div>
            </div>
         </div>
           
            <div className="flex md:flex-row gap-5 flex-wrap items-center md:space-x-2 space-y-2 mt-3 md:mt-2">
              <div className="flex items-center gap-1 text-center bg-slate-200 text-xs rounded-lg px-2 py-1 mt-1">{rating}<span>⭐⭐</span></div>
              <div className="text-slate-400 text-base rounded-lg px-2 py-1">{phone}</div>
              <div className="text-center bg-blue-600 text-white  text-xs rounded-lg px-2 py-1">{followUp}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicantCard;
