import { useTheme } from '../context/ThemeContext'

const BarChart = () => {
  const { isDark } = useTheme()
  
  const data = [
    { day: 'Lun', hours: 4.2, color: 'from-blue-500 to-cyan-500' },
    { day: 'Mar', hours: 3.8, color: 'from-blue-500 to-cyan-500' },
    { day: 'Mié', hours: 5.1, color: 'from-purple-500 to-blue-500' },
    { day: 'Jue', hours: 2.9, color: 'from-purple-500 to-pink-500' },
    { day: 'Vie', hours: 4.5, color: 'from-purple-500 to-blue-500' },
    { day: 'Sáb', hours: 3.2, color: 'from-blue-500 to-cyan-500' },
    { day: 'Dom', hours: 1.8, color: 'from-pink-500 to-purple-500' }
  ]

  const maxHours = Math.max(...data.map(d => d.hours))
  const totalHours = data.reduce((sum, d) => sum + d.hours, 0)
  const averageHours = (totalHours / data.length).toFixed(1)

  return (
    <div className={`rounded-xl p-8 backdrop-blur-sm transition-theme ${
      isDark
        ? 'bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-gray-700'
        : 'bg-white border border-gray-200'
    }`}>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Horas de Estudio</h2>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Estadísticas de esta semana
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className={`p-4 rounded-lg ${isDark ? 'bg-dark-tertiary' : 'bg-gray-50'}`}>
          <p className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total Horas</p>
          <p className="text-2xl font-bold mt-1">{totalHours.toFixed(1)}</p>
        </div>
        <div className={`p-4 rounded-lg ${isDark ? 'bg-dark-tertiary' : 'bg-gray-50'}`}>
          <p className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Promedio Diario</p>
          <p className="text-2xl font-bold mt-1">{averageHours}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-end justify-around h-64 gap-2 mb-6 p-4" style={{
        backgroundColor: isDark ? 'rgba(51, 65, 85, 0.3)' : 'rgba(248, 250, 252, 0.5)',
        borderRadius: '8px'
      }}>
        {data.map((item, index) => {
          const height = (item.hours / maxHours) * 100
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="relative w-full flex items-end justify-center h-48 mb-2 group">
                <div
                  className={`w-full rounded-t-lg transition-all duration-300 hover:opacity-80 cursor-pointer bg-gradient-to-t ${item.color} relative`}
                  style={{ height: `${height}%` }}
                >
                  {/* Tooltip */}
                  <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 rounded-lg text-white text-xs font-medium pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-gray-900`}>
                    {item.hours}h
                  </div>
                </div>
              </div>
              <p className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {item.day}
              </p>
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className={`pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <p className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
          Información
        </p>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <span className="font-medium">Día con más horas:</span>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              {data.reduce((max, item) => item.hours > max.hours ? item : max).day} ({Math.max(...data.map(d => d.hours))}h)
            </p>
          </div>
          <div>
            <span className="font-medium">Día con menos horas:</span>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              {data.reduce((min, item) => item.hours < min.hours ? item : min).day} ({Math.min(...data.map(d => d.hours))}h)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BarChart
