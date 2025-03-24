import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'tailwindcss/tailwind.css'; // Certifique-se de ter o Tailwind configurado corretamente

moment.locale('pt-br');

function Relation() {
  const startDate = moment('2024-11-05', 'YYYY-MM-DD');
  const [timeDiff, setTimeDiff] = useState(getTimeDiff(startDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeDiff(getTimeDiff(startDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startDate]);

  function getTimeDiff(startDate) {
    const now = moment();
    const diff = moment.duration(now.diff(startDate));

    const years = diff.years();
    const months = diff.months();
    const days = diff.days();
    const hours = diff.hours();
    const minutes = diff.minutes();
    const seconds = diff.seconds();

    return { years, months, days, hours, minutes, seconds };
  }

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl mb-4 text-gray-800">Estamos juntos há</h1>
      <div className="flex space-x-8">
        <div className="text-center">
          <div className="text-2xl sm:text-5xl font-bold text-rose-600 mb-6 sm:mb-5">{timeDiff.years}</div>
          <div className="text-sm text-rose-600">ANOS</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-5xl font-bold text-rose-600 mb-6 sm:mb-5">{timeDiff.months}</div>
          <div className="text-sm text-rose-600">MESES</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-5xl font-bold text-rose-600 mb-6 sm:mb-5">{timeDiff.days}</div>
          <div className="text-sm text-rose-600">DIAS</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-5xl font-bold text-rose-600 mb-6 sm:mb-5">{timeDiff.hours}</div>
          <div className="text-sm text-rose-600">HORAS</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-5xl font-bold text-rose-600 mb-6 sm:mb-5">{timeDiff.minutes}</div>
          <div className="text-sm text-rose-600">MINUTOS</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-5xl font-bold text-rose-600 mb-6 sm:mb-5">{timeDiff.seconds}</div>
          <div className="text-sm text-rose-600">SEGUNDOS</div>
        </div>
      </div>
      <p className="mt-4 text-gray-600 text-sm">Desde 5 de novembro de 2024</p>
    </div>
  );
}

export default Relation;