import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Kislay Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 