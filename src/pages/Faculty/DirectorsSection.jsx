import React from 'react';
import { Award, Briefcase, Play, Quote } from 'lucide-react';

const DirectorCard = ({ name, title, photoUrl, achievements, experience, role }) => (
  <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 transition-transform hover:-translate-y-1">
    <div className="w-32 h-32 bg-indigo-500 rounded-full flex items-center justify-center">  
      <Award className="w-24 h-24 text-white" />
    </div>
    <h3 className="mt-4 text-xl font-bold text-gray-900">{name}</h3>
    {/* <p className="text-md text-gray-600">{title}</p> */}
    
    <div className="flex items-center gap-2 mt-2 text-indigo-600">
      <Briefcase className="w-4 h-4" />
      <span className="text-sm">{role}</span>
    </div>
  </div>
);

const DirectorsSection = () => {
  const directors = [
    {
      name: "Mr. K. Muthusamy @ Vaseekaran",
      title: "M.Com, MBA",
      role: "Lead Auditor",
      photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300",
      achievements: 25,
      experience: 12
    },
    {
      name: "Mr. K. Asok Kumar",
      title: "Master of Science",
      role: "Customs and Central Excise",
      photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
      achievements: 30,
      experience: 15
    }
  ];

  return (
    <div className="mt-12 pt-12 border-t border-gray-100">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Directors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {directors.map((director) => (
          <DirectorCard key={director.name} {...director} />
        ))}
      </div>
    </div>
  );
};

export default DirectorsSection