import React from 'react';

export function BarChart() {
  const data = [
    { day: 'Lunes', hours: 6, color: 'from-blue-400 to-blue-600' },
    { day: 'Martes', hours: 7, color: 'from-purple-400 to-purple-600' },
    { day: 'Miércoles', hours: 5, color: 'from-pink-400 to-pink-600' },
    { day: 'Jueves', hours: 8, color: 'from-green-400 to-green-600' },
    { day: 'Viernes', hours: 6, color: 'from-yellow-400 to-yellow-600' },
    { day: 'Sábado', hours: 4, color: 'from-red-400 to-red-600' },
    { day: 'Domingo', hours: 3, color: 'from-indigo-400 to-indigo-600' },
  ];

  const maxHours = Math.max(...data.map(d => d.hours));

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-2xl p-6 transition-all duration-300">
        {/* Título */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
            Horas de Estudio por Semana
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Total: {data.reduce((sum, d) => sum + d.hours, 0)} horas
          </p>
        </div>

        {/* Gráfico */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-end gap-3">
              {/* Etiqueta del día */}
              <div className="w-16 text-sm font-semibold text-slate-700 dark:text-slate-300">
                {item.day}
              </div>

              {/* Barra */}
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-8 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500 hover:shadow-lg`}
                    style={{
                      width: `${(item.hours / maxHours) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* Valor */}
                <div className="w-12 text-right">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.hours}h
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pie de página */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
          <p className="text-xs text-slate-600 dark:text-slate-400 text-center">
            📊 Semana del 7 al 13 de mayo, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
