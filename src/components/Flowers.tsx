import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const flowers = [
  {
    url: "/photos/flowers/01 08-10-24.JPEG",
    caption: "08/10/24"
  },
  {
    url: "/photos/flowers/02 19-11-24.JPEG",
    caption: "19/11/24"
  },
  {
    url: "/photos/flowers/03 21-12-24.png",
    caption: "21/12/24"
  },
  {
    url: "/photos/flowers/04 24-01-25.png",
    caption: "24/01/25"
  },
  {
    url: "/photos/flowers/05 11-03-25.png",
    caption: "11/03/25"
  }
];

function Flowers() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
          Flores do Nosso Amor
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Cada flor representa um momento especial da nossa história
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {flowers.map((flower, index) => (
            <div 
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedPhoto(flower.url)}
            >
              <img
                src={flower.url}
                alt={flower.caption}
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-lg font-light mb-2">{flower.caption}</p>
                <div className="flex items-center text-white/80 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{flower.date}</span>
                </div>
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
              src= "/public/photos/flowers/01.JPEG"
              alt="Full size" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        )}

        {flowers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Em breve, mais flores e momentos especiais serão adicionados aqui...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Flowers;