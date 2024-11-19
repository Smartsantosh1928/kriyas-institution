import React from 'react';
import { 
  GraduationCap, 
  Users, 
  BookOpen,
  BrainCircuit,
  Lightbulb,
  Trophy,
  Star,
  ArrowRight
} from 'lucide-react';

export const FacultyShowcase = () => {
  const features = [
    {
      title: "Academic Excellence",
      description: "Our faculty members are seasoned professionals with years of teaching experience in their respective fields. They bring a wealth of knowledge from prestigious institutions, blending academic rigor with practical insights to ensure comprehensive understanding.",
      icon: GraduationCap,
      stats: "15+ Years Average Experience",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Subject Matter Experts",
      description: "Each teacher specializes in their domain, providing unparalleled guidance in: Chemistry: From Organic, Inorganic, and Physical Chemistry to Environmental and Nanochemistry.",
      icon: BookOpen,
      stats: "100% Expert Faculty",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Personalized Learning",
      description: "We recognize that every student learns differently. Our educators focus on: Simplifying complex topics. Adapting to individual learning styles. Addressing doubts with patience and clarity.",
      icon: Users,
      stats: "1:15 Teacher-Student Ratio",
      color: "from-teal-500 to-emerald-500"
    },
    {
      title: "Proven Track Record",
      description: "Our teachers have guided numerous students to success, with many achieving top ranks in competitive exams. Their ability to break down intricate topics into digestible lessons has made them highly trusted mentors.",
      icon: Trophy,
      stats: "99%+ Success Rate",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Innovative Methods",
      description: "Kriya's Institution embraces a blend of traditional teaching methods and modern technology: Interactive sessions with real-time feedback. Customized study materials and mock tests. Video lectures and live doubt-clearing sessions.",
      icon: BrainCircuit,
      stats: "AnyTime Learning Support",
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 py-20">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500 rounded-full blur opacity-25 animate-pulse"></div>
              <Star className="w-16 h-16 text-blue-400 relative" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Meet Our Expert Teachers at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Kriya's Institution
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We believe that the foundation of quality education lies in the expertise and dedication of our teachers. Our team comprises highly qualified educators passionate about empowering students to excel in competitive exams.
          </p>
        </div>

        {/* Interactive Timeline Features */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/50 to-cyan-500/50 rounded-full hidden lg:block" />
          
          <div className="space-y-24">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                } group`}
              >
                {/* Feature Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} p-0.5 shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-indigo-900 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className={`w-full lg:w-[calc(50%-4rem)] ${
                  index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'
                }`}>
                  <div className="relative group-hover:scale-105 transition-transform duration-300">
                    {/* Gradient Border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-50 blur"></div>
                    
                    {/* Content */}
                    <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                      <div className="flex items-center gap-4 mb-4 lg:hidden">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color}`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      </div>
                      
                      <div className="lg:flex lg:items-center lg:justify-between">
                        <div>
                          <h3 className="hidden lg:block text-2xl font-bold text-white mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-blue-100 leading-relaxed mb-4">
                            {feature.description}
                          </p>
                          <div className="flex items-center text-cyan-300 text-sm font-semibold">
                            <ArrowRight className="w-5 h-5 mr-2" />
                            {feature.stats}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-32 text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-8">
            <Lightbulb className="w-6 h-6 text-white mx-4" />
            <span className="px-6 py-2 bg-blue-900 rounded-full text-white font-medium">
              Start Your Journey Today
            </span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/20">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-200 font-semibold backdrop-blur-lg">
              Meet Our Teachers
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FacultyShowcase;