import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-primary-dark/10 dark:bg-primary-light/10 hover:bg-primary-dark/20 dark:hover:bg-primary-light/20 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="w-6 h-6 text-primary-dark" />
      ) : (
        <SunIcon className="w-6 h-6 text-primary-light" />
      )}
    </button>
  )
}

export default ThemeToggle 