import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="text-9xl font-bold text-gray-200 dark:text-gray-800"
          >
            404
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-block btn-primary"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </PageTransition>
  )
}

export default NotFound 