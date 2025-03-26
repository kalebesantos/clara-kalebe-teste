import { useState, useEffect } from 'react';
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

    return {
      years: diff.years(),
      months: diff.months(),
      days: diff.days(),
      hours: diff.hours(),
      minutes: diff.minutes(),
      seconds: diff.seconds()
    };
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl text-center mb-6 text-gray-800">Estamos juntos há</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          <TimeUnit value={timeDiff.years} label="ANOS" />
          <TimeUnit value={timeDiff.months} label="MESES" />
          <TimeUnit value={timeDiff.days} label="DIAS" />
          <TimeUnit value={timeDiff.hours} label="HORAS" />
          <TimeUnit value={timeDiff.minutes} label="MINUTOS" />
          <TimeUnit value={timeDiff.seconds} label="SEGUNDOS" />
        </div>
        <p className="mt-6 text-center text-gray-600 text-sm">Desde 5 de novembro de 2024</p>
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-rose-600 mb-2">
        {value}
      </div>
      <div className="text-xs sm:text-sm text-rose-600">{label}</div>
    </div>
  );
}

export default Relation;