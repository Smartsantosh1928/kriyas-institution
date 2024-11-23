import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Beaker, Atom } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    grade: "Ph.D. in Organic Chemistry '23",
    text: "The rigorous research opportunities and state-of-the-art laboratories at this institution provided the perfect environment for my academic and professional growth. The guidance from world-class faculty was instrumental in my successful transition to a leading pharmaceutical company.",
    rating: 5
  },
  {
    id: 2,
    name: "Karthick",
    grade: "M.Sc. in Analytical Chemistry '22",
    text: "The hands-on training with advanced instruments and exposure to real-world chemical challenges prepared me to excel in the industry. The collaborative learning atmosphere and exceptional mentorship made my experience truly enriching.",
    rating: 5
  }
];

function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full mx-5 my-10 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Beaker className="w-8 h-8 text-indigo-600" />
            <h1 className="text-xl lg:text-4xl font-bold text-gray-900">Student Success Stories</h1>
            <Atom className="w-8 h-8 text-indigo-600" />
          </div>
          <p className="text-indigo-600 text-lg font-medium">Hear from our chemistry scholars</p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative bg-white rounded-2xl px-10 lg:px-20 py-8 shadow-xl border border-indigo-100">
          <div className="overflow-hidden">
            <div className="transition-transform duration-500 ease-out"
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} 
                       className="w-full flex-shrink-0 px-4">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} 
                                  className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-700 text-lg italic mb-6">
                          "{testimonial.text}"
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-indigo-600">{testimonial.grade}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition-colors text-indigo-600"
            aria-label="Previous testimonial">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition-colors text-indigo-600"
            aria-label="Next testimonial">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-indigo-600' : 'bg-indigo-200'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCarousel;