import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'
import ProfileCard from './ProfileCard'
import BarChart from './BarChart'

export default function Dashboard() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen transition-theme ${
      isDark 
        ? 'bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg text-white' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80" style={{
        backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Bienvenido a tu panel de control
            </p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Horas de Estudio', value: '24.5', unit: 'horas' },
            { label: 'Proyectos Completados', value: '12', unit: 'proyectos' },
            { label: 'Racha Actual', value: '7', unit: 'días' },
            { label: 'Promedio Diario', value: '3.5', unit: 'horas' }
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl backdrop-blur-sm transition-transform hover:scale-105 ${
                isDark
                  ? 'bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-gray-700'
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
              }`}
            >
              <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </p>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
              <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                {stat.unit}
              </p>
            </div>
          ))}
        </div>

        {/* Profile and Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <ProfileCard />
          </div>
          <div className="lg:col-span-2">
            <BarChart />
          </div>
        </div>

        {/* Recent Activity */}
        <div className={`p-8 rounded-xl backdrop-blur-sm ${
          isDark
            ? 'bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-gray-700'
            : 'bg-white border border-gray-200'
        }`}>
          <h2 className="text-xl font-bold mb-6">Actividad Reciente</h2>
          <div className="space-y-4">
            {[
              { title: 'Completaste el módulo de React', time: 'Hace 2 horas' },
              { title: 'Iniciaste un nuevo proyecto', time: 'Ayer' },
              { title: 'Ganaste 50 puntos en ejercicios', time: 'Hace 3 días' }
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-4 pb-4 border-b border-gray-700 dark:border-gray-600 last:border-0">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`border-t mt-12 ${isDark ? 'border-gray-700 bg-dark-bg' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className={`text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2026 Dashboard de Usuario. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
