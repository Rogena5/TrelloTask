import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import ApplicantCard from './ApplicantCard';
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

const ApplicantList = ({ title, rejected, applicants, setApplicants, handleRemoveApplicant, moveCard, color }) => {
  const [showModal, setShowModal] = useState(false);
  const [newApplicant, setNewApplicant] = useState({
    name: '',
    location: '',
    rating: '',
    phone: '',
    status: 'New',
    photo: '',
    followUp: 'followed'
  });
  const [sortOrder, setSortOrder] = useState('asc');

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewApplicant((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewApplicant((prev) => ({ ...prev, photo: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setApplicants((prev) => [...prev, newApplicant]);
    setShowModal(false);
    setNewApplicant({
      name: '',
      location: '',
      rating: '',
      phone: '',
      status: 'New',
      photo: '',
      followUp: ''
    });
  };

  const [, drop] = useDrop({
    accept: 'APPLICANT',
    drop: (item, monitor) => {
      if (!monitor.didDrop()) {
        addApplicantToList(item);
      }
    },
  });

  const addApplicantToList = (applicant) => {
    if (applicant.sourceSetApplicants !== setApplicants) {
      setApplicants((prev) => [...prev, applicant]);
      handleRemoveApplicant(applicant, applicant.sourceSetApplicants);
    }
  };

  const handleSort = () => {
    const sortedApplicants = [...applicants].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setApplicants(sortedApplicants);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div ref={drop} className="bg-gray-100 rounded-lg p-5 pb-16 md:my-10 my-5">
      <div className="mb-4">
        <div className="flex flex-wrap md:flex-row justify-between space-y-2 md:space-y-0 md:items-center mb-4">
          <div className="font-semibold text-base md:text-lg">{title}</div>
          <button className="text-blue-600 text-xs md:text-sm bg-blue-100 font-semibold px-2 py-1 rounded-xl" onClick={handleAddClick}>
            + Add Applicants
          </button>
          <div onClick={handleSort} className="cursor-pointer">
            {sortOrder === 'asc' ? <FaSortAmountDown /> : <FaSortAmountUp />}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between mb-4">
          <div className='flex items-center space-x-3'>
            <span className="font-bold md:text-3xl text-base"> {rejected}</span> 
            <span className="font-semibold md:text-base text-sm text-gray-400">REJECTED</span>
          </div>
          <div className="flex items-center space-x-3 mt-2 sm:mt-0">
            <span className="font-bold md:text-3xl text-base">  {applicants.length} </span>
             <span className="font-semibold md:text-base text-sm text-gray-400">Total</span>
          </div>
        </div>
        <div className={`h-1 my-2 rounded ${color}`}></div>
      </div>
      <div>
        {applicants.map((applicant, index) => (
          <ApplicantCard
            key={index}
            index={index}
            applicant={applicant}
            moveCard={moveCard}
            setApplicants={setApplicants}
            applicants={applicants}
          />
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-auto">
            <h2 className="md:text-2xl text-base font-semibold mb-4">Add New Applicant</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-2">
                <input
                  className="w-full md:text-base text-sm px-3 py-2 border rounded-lg"
                  type="text"
                  name="name"
                  placeholder="name"
                  value={newApplicant.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  className="w-full md:text-base text-sm px-3 py-2 border rounded-lg"
                  type="text"
                  name="location"
                  placeholder="location"
                  value={newApplicant.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  className="w-full md:text-base text-sm px-3 py-2 border rounded-lg"
                  type="number"
                  name="rating"
                  placeholder="rating"
                  value={newApplicant.rating}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  className="w-full md:text-base text-sm px-3 py-2 border rounded-lg"
                  type="text"
                  name="phone"
                  placeholder="phone"
                  value={newApplicant.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  className="w-full md:text-base text-sm px-3 py-2 border rounded-lg"
                  type="file"
                  name="photo"
                  onChange={handleFileChange}
                />
              </div>
              <div className="mb-2">
                <select
                  className="w-full md:text-base text-sm px-3 py-2 border rounded-lg"
                  name="status"
                  value={newApplicant.status}
                  onChange={handleInputChange}
                  required
                >
                  <option value="New">New</option>
                  <option value="Interviewed">Interviewed</option>
                  <option value="Hired">Hired</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div className="mb-2">
                <select
                  className="w-full md:text-base text-sm px-3 py-2 border rounded-lg"
                  name="followUp"
                  value={newApplicant.followUp}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Followed">Followed</option>
                  <option value="NotFollowed">NotFollowed</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Add Applicant
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicantList;
