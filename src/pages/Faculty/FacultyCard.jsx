import React from 'react';
import { Briefcase, GraduationCap, Mail, Phone } from 'lucide-react';

export function FacultyCard({ faculty }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="aspect-square overflow-hidden">
        <img
          src={faculty.photoUrl}
          alt={`${faculty.Name}`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {faculty.Name}
        </h3>
        <p className="text-indigo-600 font-medium">{faculty.designation}</p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <div className={`w-5 h-5 flex-shrink-0 mr-2 mt-1`}>
              <GraduationCap className="w-full h-full" />
            </div>
            <span>{faculty.education}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <div className={`w-5 h-5 flex-shrink-0 mr-2 mt-1`}>
              <Briefcase className="w-full h-full" />
            </div>
            <span>{faculty.work}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyCard