import React from 'react';
import { Video, Users, PlayCircle } from 'lucide-react';

export const EducationFeatures = ({ handlePopup }) => {
  const features = [
    {
      title: "Live Sessions",
      description: "Interactive real-time classes with expert instructors. Engage in discussions, ask questions, and get immediate feedback.",
      icon: Users,
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      hoverColor: "hover:bg-purple-100"
    },
    {
      title: "Online Classes",
      description: "Flexible virtual classrooms with collaborative tools and real-time interaction for an immersive learning experience.",
      icon: Video,
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      hoverColor: "hover:bg-blue-100"
    },
    {
      title: "Recorded Videos",
      description: "Access high-quality recorded lectures anytime, anywhere. Learn at your own pace with comprehensive course materials.",
      icon: PlayCircle,
      color: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      hoverColor: "hover:bg-emerald-100"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Learning Formats
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the learning style that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl p-8 ${feature.color} border ${feature.borderColor} transition-all duration-300 ${feature.hoverColor}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-3 rounded-xl ${feature.color} ${feature.iconColor} mb-4`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6">
                  <button onClick={handlePopup} className={`inline-flex items-center px-4 py-2 rounded-lg bg-white border ${feature.borderColor} ${feature.iconColor} font-medium text-sm transition-colors duration-200 ${feature.hoverColor}`}>
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationFeatures;