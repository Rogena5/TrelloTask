import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ApplicantList from './components/ApplicantList';

const App = () => {
  const [appliedApplicants, setAppliedApplicants] = useState([
    { name: 'Silvano Scally', location: 'New York', rating: 4.0, phone: '561 682 5290', status: 'New', followUp: 'Followed', photo: '' },
  ]);

  const [shortlistedApplicants, setShortlistedApplicants] = useState([
    { name: 'Lamar Demet', location: 'Saint Augustine', rating: 5.0, phone: '350 947 8496', status: 'New',followUp: 'Followed', photo: '' },
  ]);

  const [interviewApplicants, setInterviewApplicants] = useState([
    { name: 'Davina Olkowicz', location: 'Dongpu', rating: 4.0, phone: '214 894 2712', status: 'NotNew',followUp: 'NotFollowed', photo: '' },
  ]);

  const handleRemoveApplicant = (applicant, setList) => {
    setList((prev) => prev.filter((item) => item.name !== applicant.name));
  };

  const moveCard = (dragIndex, hoverIndex, list, setList) => {
    const draggedApplicant = list[dragIndex];
    const newApplicants = [...list];
    newApplicants.splice(dragIndex, 1);
    newApplicants.splice(hoverIndex, 0, draggedApplicant);
    setList(newApplicants);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col md:flex-row md:space-x-2 justify-center items-start mx-auto w-full">
      <div className="w-full md:w-1/3 p-4"> <ApplicantList
          title="Applied"
          rejected={8}
          applicants={appliedApplicants}
          setApplicants={setAppliedApplicants}
          handleRemoveApplicant={handleRemoveApplicant}
          moveCard={moveCard}
          color="bg-blue-400"
        /></div>
        <div className="w-full md:w-1/3 p-4">
        <ApplicantList
          title="Shortlisted"
          rejected={9}
          applicants={shortlistedApplicants}
          setApplicants={setShortlistedApplicants}
          handleRemoveApplicant={handleRemoveApplicant}
          moveCard={moveCard}
          color="bg-green-400"
        /> 
        </div>
        <div className="w-full md:w-1/3 p-4"> <ApplicantList
          title="Interview"
          rejected={1}
          applicants={interviewApplicants}
          setApplicants={setInterviewApplicants}
          handleRemoveApplicant={handleRemoveApplicant}
          moveCard={moveCard}
          color="bg-red-400"
        /></div>
      </div>
    </DndProvider>
  );
};

export default App;
