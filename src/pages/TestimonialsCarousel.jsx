import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    role: "Ph.D. in Organic Chemistry '23",
    content: "The rigorous research opportunities and state-of-the-art laboratories at this institution provided the perfect environment for my academic and professional growth. The guidance from world-class faculty was instrumental in my successful transition to a leading pharmaceutical company.",
    image: "/img/female-unknown.jpg"
  },
  {
    id: 2,
    name: "Karthick",
    role: "M.Sc. in Analytical Chemistry '22",
    content: "The hands-on training with advanced instruments and exposure to real-world chemical challenges prepared me to excel in the industry. The collaborative learning atmosphere and exceptional mentorship made my experience truly enriching.",
    image: "/img/male-unknown.jpg"
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative py-16 sm:px-6 lg:px-8 px-10 bg-blue-50">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Hear from our community of learners and alumni
          </p>
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="relative flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
                        <div className="relative">
                          <img
                            className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg"
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-2">
                            <Quote className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        
                        <blockquote className="mt-8 text-center">
                          <p className="text-lg text-gray-700 italic leading-relaxed">
                            "{testimonial.content}"
                          </p>
                        </blockquote>
                        
                        <div className="mt-6 text-center">
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-blue-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
                disabled={isAnimating}
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
                disabled={isAnimating}
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>

              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;