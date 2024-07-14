import React, { useState } from 'react';
import ApplicantCard from './ApplicantCard';

const ApplicantList = ({ title, rejected, total, applicants }) => {
  const [applicantList, setApplicantList] = useState(applicants);
  const [showForm, setShowForm] = useState(false);
  const [newApplicant, setNewApplicant] = useState({
    name: '',
    location: '',
    rating: '',
    phone: '',
    status: '',
  });

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewApplicant((prev) => ({ ...prev, [name]: value }));
  };

  const handleCloseModal = () => {
    setShowForm(false);
    setNewApplicant({
      name: '',
      location: '',
      rating: '',
      phone: '',
      status: '',
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setApplicantList((prev) => [...prev, newApplicant]);
    setShowForm(false);
    setNewApplicant({
      name: '',
      location: '',
      rating: '',
      phone: '',
      status: '',
    });
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4 m-4">
      <div className=" mb-4">
        <div className="flex justify-between mb-4">
          <div className="font-bold text-lg">{title}</div>
          <button className="border pointer p-2 rounded-lg" onClick={handleAddClick}>
            + Add Applicants
          </button>
        </div>
        <div className="flex justify-between mb-4">
          <div className="text-base font-bold">
            {rejected} <span className="text-gray-400">Rejected</span>
          </div>
          <div className="text-base font-bold">
            {total} <span className="text-gray-400">Total</span>
          </div>
        </div>
      </div>
      <div>
        {applicantList.map((applicant, index) => (
          <ApplicantCard key={index} {...applicant} />
        ))}
      </div>
      {showForm && (
        <form className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">   <h2 className="text-lg font-bold mb-4">Add Applicant</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-2" >
                <input
                  className="w-full px-3 py-2 border rounded-lg"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={newApplicant.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  className="w-full px-3 py-2 border rounded-lg"
                  type="text"
                  name="location"
                  placeholder='location'
                  value={newApplicant.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-2 flex">
                <input
                  className="w-full px-3 py-2 border rounded-lg"
                  type="number"
                  name="rating"
                  placeholder='rating'
                  value={newApplicant.rating}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  className="w-full px-3 py-2 border rounded-lg"
                  type="text"
                  name="phone"
                  placeholder='phone'
                  value={newApplicant.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  className="w-full px-3 py-2 border rounded-lg"
                  type="text"
                  name="status"
                  placeholder='status'
                  value={newApplicant.status}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex mt-4 space-x-2">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Add Applicant
                </button>
              </div>
            </form>
          </div>
        </form>
      )}
    </div>
  );
};

export default ApplicantList;
