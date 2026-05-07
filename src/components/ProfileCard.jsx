import { useTheme } from '../context/ThemeContext'

export default function ProfileCard() {
  const { isDark } = useTheme()

  return (
    <div className={`rounded-xl p-6 backdrop-blur-sm transition-theme ${
      isDark
        ? 'bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-gray-700'
        : 'bg-white border border-gray-200'
    }`}>
      {/* Avatar */}
      <div className="mb-6">
        <div className={`w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center overflow-hidden ${
          isDark ? 'shadow-lg shadow-purple-500/20' : 'shadow-lg shadow-purple-500/10'
        }`}>
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nil"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Info */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-1">Nil Gómez</h2>
        <p className={`text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent`}>
          Desarrollador Full Stack
        </p>
        <p className={`text-xs mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          📍 España
        </p>
      </div>

      {/* Stats */}
      <div className="space-y-3 mb-6 border-t border-b py-4" style={{
        borderColor: isDark ? '#475569' : '#e5e7eb'
      }}>
        <div className="flex justify-between items-center">
          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Proyectos</span>
          <span className="font-bold text-lg">12</span>
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Contribuciones</span>
          <span className="font-bold text-lg">142</span>
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Seguidores</span>
          <span className="font-bold text-lg">256</span>
        </div>
      </div>

      {/* Button */}
      <button className="w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/50">
        Ver Perfil Completo
      </button>
    </div>
  )
}
