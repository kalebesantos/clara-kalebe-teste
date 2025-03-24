import React, { useState } from 'react';

const photos = [
  {
    url: "/photos/couple/01.JPEG",
    caption: ""
  },
  {
    url: "/photos/couple/02.JPEG",
    caption: ""
  },
  {
    url: "/photos/couple/03.jpg",
    caption: ""
  },
  {
    url: "/photos/couple/04.JPEG",
    caption: ""
  },
  {
    url: "/photos/couple/05.JPEG",
    caption: ""
  },
  {
    url: "/photos/couple/06.JPEG",
    caption: ""
  },
];

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
        Nossa Galeria de Momentos
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setSelectedPhoto(photo.url)}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-64 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white p-4 sm:p-6 text-base sm:text-lg font-light">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <img 
            src={selectedPhoto} 
            alt="Full size" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;