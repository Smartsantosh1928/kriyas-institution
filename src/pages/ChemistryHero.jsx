import React from 'react';
import { Download, Dna, Phone, Mail, ArrowRight } from 'lucide-react';
import Telegramsvg from '/img/logotype.svg'

export const ChemistryHero = ({ companyName, handlePopup }) => {

  const hanndleDownload = () => {

    fetch('http://localhost:3000/downloadbrochure',
    {
      method:"GET",
    }).then(Response => Response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = "Brochure.pdf";
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    })
}

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className='w-full h-auto flex md:flex-row p-5 flex-col'>
          <img src="/img/logo.png" alt="LOGO" className='w-28 h-28 md:w-40 md:h-40 mr-3'/>
          <span className='text-4xl -mt-24 ml-32 text-start md:ml-0 md:text-6xl md:mt-12'>{companyName}</span>
          <span className='text-4xl -mt-24 ml-32 text-start md:ml-0 md:text-6xl md:mt-12 hidden'>{companyName}</span>
              <a href="https://t.me/+0UkplEEdQX4zZTQ1" target="_blank" className='z-10 ml-auto -mr-5 -mt-12 md:mt-0 flex flex-row border border-none p-2 rounded-3xl md:mb-32 md:-mr-44'>
                  <img src={Telegramsvg} alt="Telegram" className='w-10 h-10 rounded-lg' />
                  <span className='text-3xl  hidden md:block'>Telegram Channel</span>
              </a>
          <button className='z-10 bg-blue-400 cursor-pointer rounded-lg text-2xl mt-16 m-2 p-2 text-white hover:bg-blue-600 md:mb-20 md:px-6 md:mr-12 md:pt-2 md:mt-16' onClick={handlePopup} >Register</button>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center p-5">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-8">
              {/* <Flask className="w-5 h-5 text-blue-600 mr-2" /> */}
              <span className="text-blue-600 font-medium">Only for Chemistry</span>
              <Dna className="w-5 h-5 text-blue-600 ml-2 animate-pulse" />
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Master Chemistry with Expert Guidance
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Join Kriya's Institution for comprehensive chemistry education. Expert faculty, proven methods, and dedicated support for JAM, CSIR-NET, NEET, and JEE preparation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button onClick={hanndleDownload} className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Brochure
              </button>
              
              <button onClick={handlePopup} className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-200 bg-white text-gray-800 font-semibold transition-all duration-300 hover:shadow-lg group">
                Register Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-600 hover:text-blue-600 transition-colors">
                <Phone className="w-5 h-5" />
                <a href="tel:+919486552761" className="text-lg">+91 9486552761</a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:maheswarivaseekaranmail.com" className="text-lg">maheswarivaseekaran@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80"
              alt="Chemistry Education"
              className="relative rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm lg:font-medium text-gray-600">Live Classes (Both Online & Offline)</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm font-medium text-gray-600">Expert Faculty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChemistryHero;