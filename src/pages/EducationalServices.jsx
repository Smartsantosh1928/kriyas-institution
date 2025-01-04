import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Target, 
  Globe2,
  CheckCircle2
} from 'lucide-react';

export const EducationalServices = ({ sectionRef }) => {
  const services = [
    {
      title: "Online Coaching",
      description: "Personalized academic guidance to help students excel in their studies and achieve their educational goals.",
      icon: GraduationCap,
      features: [
        "JAM (Joint Admission Test for Masters)",
        "CSIR (Council of Scientific and Industrial Research)",
        "GATE (Graduate Aptitude Test in Engineering)",
        "AP, SAT , GRE (Graduate Record Examinations)"
      ],
      color: "blue"
    },
    {
      title: "Higher Education Consultancy",
      description: "Expert guidance for career planning, college admissions, and professional development pathways.",
      icon: Target,
      features: [
        "Assistance for NAAC",
        "NBA Ranking",
        "NIRF Assistance",
        "ISO 14001, ISO 9001",
        "Organizing academic events"
      ],
      color: "purple"
    },
    {
      title: "Online Tutions",
      description: "Expert tutoring in chemistry with personalized attention and comprehensive study materials.",
      icon: BookOpen,
      features: [
        "CBSE",
        "ICSE",
        "TNBSE (ENG)",
        "TNBSE (TAM)"
      ],
      color: "emerald"
    },
    {
      title: "Research Assistance",
      description: "Comprehensive assistance for students pursuing research education.",
      icon: Globe2,
      features: [
        "Thesis writing assistance",
        "Drafting and applying patent",
        "Project report assistance",
        "Synopsis writing, Research paper type setting",
        "Literature survey"
      ],
      color: "orange"
    }
  ];

  const getColorClasses = (color) => ({
    background: `bg-${color}-50 hover:bg-${color}-100`,
    border: `border-${color}-200`,
    text: `text-${color}-600`,
    shadow: `group-hover:shadow-${color}-100`
  });

  return (
    <div ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Educational Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive educational support tailored to help you achieve academic excellence and career success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`group relative rounded-2xl p-8 ${colors.background} border ${colors.border} transition-all duration-300 hover:scale-105 hover:shadow-xl ${colors.shadow}`}
              >
                <div className="flex flex-col h-full">
                  <div className={`${colors.text} mb-6`}>
                    <service.icon className="w-12 h-12" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className={`w-5 h-5 ${colors.text} flex-shrink-0 mr-2 mt-1`}>
                          <CheckCircle2 className="w-full h-full" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationalServices;