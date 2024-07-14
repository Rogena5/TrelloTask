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
        <form className="mt-4 p-4 border rounded-lg" onSubmit={handleFormSubmit}>
          <div className="mb-2">
            <label className="block text-gray-700">Name</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              name="name"
              value={newApplicant.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Location</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              name="location"
              value={newApplicant.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Rating</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="number"
              name="rating"
              value={newApplicant.rating}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Phone</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              name="phone"
              value={newApplicant.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Status</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              name="status"
              value={newApplicant.status}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Add Applicant
          </button>
        </form>
      )}
    </div>
  );
};

export default ApplicantList;
