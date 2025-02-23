import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Beaker, Atom } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Ananya R.,",
    title: "Best Chemistry Coaching Ever!",
    grade: "NEET Aspirant",
    text: "Dr. Maheswari's teaching style is amazing! She makes even the toughest concepts in organic and inorganic chemistry easy to understand. Her tricks and shortcuts helped me a lot in my NEET and JEE preparation. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul S.,",
    title: "Concepts Made Crystal Clear!",
    grade: "IIT JAM Student",
    text: "Before joining Kriya's Institution, chemistry felt like a nightmare. But after learning from Ma'am, I gained confidence and improved my problem-solving skills. Her JAM exam preparation strategy is top-notch!",
    rating: 5
  },
  {
    id: 3,
    name: "Megha K.,",
    title: "Interactive & Engaging Classes!",
    grade: "CSIR-NET Aspirant",
    text: "The online classes are well-structured, and the smart board explanations make learning fun. Ma'am explains every concept in detail and ensures we understand before moving forward. She is the best mentor for CSIR-NET and GATE chemistry!",
    rating: 5
  },
  {
    id: 4,
    name: "Vikram M.,",
    title: "Helped Me Score High in Board Exams!",
    grade: "CBSE Class 12 Student",
    text: "Kriya's Institution has been a game-changer for my CBSE board exam preparation. The mock tests, practice questions, and Ma'am's step-by-step explanations made chemistry my favorite subject!",
    rating: 5
  },
  {
    id: 5,
    name: "Pooja T.,",
    title: "A Perfect Guide for Competitive Exams!",
    grade: "JEE Aspirant",
    text: "I struggled with physical chemistry, but after attending Kriya's classes, I started solving problems quickly. Ma'am's way of linking real-life applications to chemistry makes learning interesting!",
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
                        <p className='text-2xl underline font-light text-gray-900 mb-5 text-justify' >
                          {testimonial.title}
                        </p>
                        <p className="text-gray-700 text-lg italic mb-6 text-justify">
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