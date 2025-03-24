import React, { useState, useRef } from 'react';
import { Play, Pause, Maximize } from 'lucide-react';

function Videos() {
  const videos = [
    {
      src: 'photos/videos/primeiro.MP4',
      thumbnail: 'photos/videos/primeiro-thumb.png',
      title: "",
      date: "20 de março de 2025",
    },
    {
      src: 'photos/videos/segundo.MP4',
      thumbnail: 'photos/videos/segundo-thumb.png',
      title: "",
      date: "19 de março de 2025",
    },
    {
      src: 'photos/videos/terceiro.MP4',
      thumbnail: 'photos/videos/terceiro-thumb.png',
      title: "",
      date: "16 de março de 2025",
    },
    {
      src: 'photos/videos/quarto.MP4',
      thumbnail: 'photos/videos/quarto-thumb.png',
      title: "",
      date: "15 de março de 2025",
    },
    {
      src: 'photos/videos/quinto.MP4',
      thumbnail: 'photos/videos/quinto-thumb.png',
      title: "",
      date: "14 de março de 2025",
    },
    {
      src: 'photos/videos/sexto.MP4',
      thumbnail: 'photos/videos/sexto-thumb.png',
      title: "",
      date: "12 de março de 2025",
    },
  ];

  return (
        <div className="container mx-auto px-4 py-6 sm:py-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Nossos Vídeos</h1>
      
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {videos.map((video, index) => (
                <VideoCard key={index} video={video} />
                ))}
            </div>
        </div>
    );
}

function VideoCard({ video }: { video: { src: string; thumbnail: string; title: string; date: string } }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
        }
    };

    const toggleFullscreen = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            videoRef.current.requestFullscreen();
        }
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
        }
    };

return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative group">
            <div className="aspect-[9/16] bg-gray-200 relative"> {/* Aspect ratio for reels format */}
                <video
                    ref={videoRef}
                    src={video.src}
                    poster={video.thumbnail}
                    className="w-full h-full object-cover"
                    onEnded={handleVideoEnd}
                    onClick={togglePlay}
                />
        
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    {/* Top Controls */}
                    <div className="flex justify-end">
                        <button
                            onClick={toggleFullscreen}
                            className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors duration-200"
                        >
                            <Maximize className="h-6 w-6 text-white" />
                        </button>
                    </div>
            
                    {/* Center Play/Pause Button */}
                    <div className="flex-grow flex items-center justify-center">
                        <button
                            onClick={togglePlay}
                            className="p-4 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors duration-200"
                        >
                            {isPlaying ? (
                                <Pause className="h-8 w-8 text-white" />
                            ) : (
                                <Play className="h-8 w-8 text-white" />
                            )}
                        </button>
                    </div>
            
                    {/* Bottom Space for Title */}
                    <div className="h-8" />
                </div>
            </div>
        </div>
        <div className="p-3 sm:p-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">{video.title}</h3>
            <p className="text-sm text-gray-600">{video.date}</p>
        </div>
    </div>
);
}

export default Videos;