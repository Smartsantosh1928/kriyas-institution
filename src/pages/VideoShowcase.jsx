import React from 'react';
import { Play, PlayCircle } from 'lucide-react';

export const VideoShowcase = () => {
  const videos = [
    {
      id: "bgW7C_XK9OA",
      title: "Kriya's Institution Chemistry",
      description: "#educational#JAM#JAM EXAM#JAM",
      duration: "00:55"
    },
    {
      id: "KSQNxOHxPJQ",
      title: "JAM CHEMISTRY SOLVED QUESTIONS OF 2022",
      description: "NEET/JEE #chemistry",
      duration: "13:46"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-red-50 rounded-full mb-4">
            <Play className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-600 font-medium">Featured Content</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Watch Our Demo Lectures
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a glimpse of our teaching methodology and expert instruction through these sample lectures
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="group relative">
              {/* Video Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white p-3">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative">
                  {/* Video Thumbnail Container */}
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {video.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <PlayCircle className="w-4 h-4 mr-1" />
                        <span>{video.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            target='blank'
            href="https://youtube.com/playlist?list=PLfQnoovZLaqfavasPRh1RoU6d7uksWSu4&si=KQosyOv_Bqa5WjYQ"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View All Lectures
            <Play className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;