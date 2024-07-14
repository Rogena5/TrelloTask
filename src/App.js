import React from 'react';
import ApplicantList from './components/ApplicantList';

const App = () => {
  const appliedApplicants = [
    { name: 'Silvano Scally', location: 'New York', rating: 4.0, phone: '561 682 5290', status: 'New' },
    { name: 'Lamar Demet', location: 'Saint Augustine', rating: 5.0, phone: '282 645 1513', status: 'New' },
    { name: 'Ramsey Jantzen', location: 'Rome', rating: 5.0, phone: '357 875 0394' },
    { name: 'Lorine Brailsford', location: 'Warsaw', rating: 4.0, phone: '282 645 1513', status: 'Followed' },
  ];

  const shortlistedApplicants = [
    { name: 'Lamar Demet', location: 'Saint Augustine', rating: 5.0, phone: '350 947 8496', status: 'New' },
    { name: 'Torey Courtes', location: 'Bogota', rating: 3.0, phone: '282 645 1513', status: 'New' },
    { name: 'Pietra Mallinder', location: 'San Francisco', rating: 4.0, phone: '526 481 1324', status: 'Followed' },
    { name: 'Karilynn Instonssen', location: 'Stockholm', rating: 5.0, phone: '248 230 6575' },
  ];

  const interviewApplicants = [
    { name: 'Davina Olkowicz', location: 'Dongpu', rating: 4.0, phone: '214 894 2712' },
    { name: 'Ajay MacAllast', location: 'Tokyo', rating: 5.0, phone: '754 742 7248', status: 'New' },
    { name: 'Blondy Leel', location: 'Berlin', rating: 4.0, phone: '526 481 1324' },
    { name: 'Lorine Brailsford', location: 'Warsaw', rating: 4.0, phone: '282 645 1513', status: 'Followed' },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between w-3/4 mx-auto">
      <ApplicantList title="Applied" rejected={8} total={24} applicants={appliedApplicants} />
      <ApplicantList title="Shortlisted" rejected={9} total={16} applicants={shortlistedApplicants} />
      <ApplicantList title="Interview" rejected={1} total={7} applicants={interviewApplicants} />
    </div>
  );
};

export default App;
