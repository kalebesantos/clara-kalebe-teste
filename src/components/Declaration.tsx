import React from 'react';
import { Heart } from 'lucide-react';

function Declaration() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-rose-600 mx-auto mb-4 sm:mb-6 fill-rose-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Kalebe para Clara
          </h2>
        </div>

        <div className="prose prose-sm sm:prose-lg mx-auto px-4 sm:px-0">
          <p className="text-gray-700 leading-relaxed mb-6">
            Desde o primeiro momento em que nos conhecemos, nunca imaginei que você se tornaria tudo pra mim. 
            Cada sorriso seu ilumina meu dia, cada momento juntos torna minha vida mais completa.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Como Tudo Começou</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ainda me lembro quando fomos pra central, como se fosse ontem. 
            Quando você pegou o pão pra mim kkk, E quando fomos no banheiro e eu ti esperei.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">O Que Você Significa Para Mim</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Clara, você é minha melhor amiga, minha confidente, minha parceira. 
            Com você, cada dia é uma nova descoberta, cada momento é especial. 
            Seu amor me faz querer ser uma pessoa melhor a cada dia.
          </p>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-xl sm:text-2xl font-light text-rose-600 italic">
              "Clara, você é o amor da minha vida, minha inspiração diária, 
              e sou grato por cada momento que compartilhamos juntos."
            </p>
            <p className="text-lg text-gray-600 mt-4">Com amor, Kalebe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Declaration;