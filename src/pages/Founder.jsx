import React from 'react';
import { Award, Briefcase, Play, Quote } from 'lucide-react';
import DirectorsSection from './Faculty/DirectorsSection'

const FounderProfile = ({ name, title, photoUrl, achievements, experience, companyName }) => (
  <div className="flex flex-col items-center gap-5">
    <div className="relative">
      <img
        src={photoUrl}
        alt={name}
        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
      />
      <div className="absolute -bottom-2 right-0 bg-indigo-600 rounded-full p-2">
        <Award className="w-5 h-5 text-white" />
      </div>
    </div>
    
    <div>
      <h2 className="mt-6 text-2xl font-bold text-gray-900">{name}</h2>
      <p className="text-lg text-gray-600">{title}</p>
    </div>

      <div className="flex items-center justify-center lg:justify-start gap-2">
        <Briefcase className="w-6 h-6 text-indigo-600" />
        <p className="text-xl text-gray-700">
          Founder and CEO of {companyName}
        </p>
      </div>

      <div className="flex gap-8">
        <div className="text-center">
          <p className="text-3xl font-bold text-indigo-600">{achievements}</p>
          <p className="text-sm text-gray-600">Achievements</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-indigo-600">{experience}</p>
          <p className="text-sm text-gray-600">Years Experience</p>
        </div>
      </div>
      
      <button
        // onClick={handleScroll}
        className="group flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
      >
        <span>Explore Courses</span>
        <Play className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
      </button>
  </div>
);

export function Founder({ companyName, handleScroll }) {

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-screen-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <FounderProfile
            name="Dr. J. Maheswari Vaseekaran"
            title="M.Sc., M.Phil., DCS., Ph.D., Post Doc (IITM)"
            photoUrl="/img/Chemistry-1.jpg"
            achievements={5}
            experience={15}
            companyName={companyName}
          />

          <div className='flex justify-center items-center'>
            <div className="relative flex mt-12 px-6 py-8 bg-gray-50 rounded-2xl max-w-7xl">
              <Quote className="absolute -top-4 left-6 w-8 h-8 text-indigo-600 rotate-180" />
              <p className="text-gray-600 text-lg leading-relaxed italic">A mentor is always there to listen to your concerns, provide guidance, and offer encouragement. They take a personal interest in your growth and development, and help you overcome obstacles in your path.</p>
              <Quote className="absolute -bottom-4 right-6 w-8 h-8 text-indigo-600" />
            </div>
          </div>

          <DirectorsSection />
        </div>
      </div>
    </section>
  );
}

export default Founder