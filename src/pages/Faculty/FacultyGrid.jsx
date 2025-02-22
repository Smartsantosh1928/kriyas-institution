import React from 'react';
import FacultyCard from './FacultyCard';

export function FacultyGrid({ facultyMembers }) {
  return (
    <div>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center'>
      <h1 className="text-2xl md:text-4xl font-light mb-6 tracking-tight">
        Our Advisors & Experts at{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
          Kriya's Institution
        </span>
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 text-left">
          {facultyMembers.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FacultyGrid