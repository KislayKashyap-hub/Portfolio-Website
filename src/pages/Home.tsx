import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const skills = {
  salesforce: [
    'Lightning Web Components (LWC)',
    'Apex',
    'Flow Builder',
    'Einstein AI & Agentforce',
    'Integration',
    'SOQL/SOSL'
  ],
  webDevelopment: [
    'JavaScript',
    'Node.js',
    'HTML',
    'CSS',
    'REST APIs',
    'SQL & NoSQL',
  ],
  cloud: [
    'Salesforce Platform',
    'Data Services',
    'Cloud Architecture',
    'Data Cloud',
    'SaaS'

  ],
  tools: [
    'Git',
    'VS Code',
    'Postman',
    'Linux',
    'CLI',
  ]
};

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-20">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="text-blue-600 dark:text-blue-400">
                  Kislay Kumar
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Salesforce Developer
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8">
                Certified Salesforce Developer | LWC, Apex, AI & CRM Solutions
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a
                  href="/KislayKumar-CV.pdf"
                  download
                  className="btn-primary w-full sm:w-auto"
                >
                  Download Resume
                </a>
                <Link
                  to="/projects"
                  className="btn-secondary w-full sm:w-auto"
                >
                  View Projects
                </Link>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 flex justify-center md:justify-end"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-full animate-pulse"></div>
                <img
                  src="/images/profile.jpeg"
                  alt="Kislay Kumar"
                  className="rounded-full w-full h-full object-cover border-4 border-blue-500/20 dark:border-blue-400/20"
                />
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  Salesforce
                </h3>
                <ul className="space-y-2">
                  {skills.salesforce.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-700 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  Web Development
                </h3>
                <ul className="space-y-2">
                  {skills.webDevelopment.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-700 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  Cloud
                </h3>
                <ul className="space-y-2">
                  {skills.cloud.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-700 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  Tools & Methods
                </h3>
                <ul className="space-y-2">
                  {skills.tools.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-700 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          >
            <div className="flex flex-col items-center cursor-pointer"
                 onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
              <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Scroll to explore
              </span>
              <motion.div
                className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1"
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <motion.div
                  className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Home 