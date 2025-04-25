import React from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiSalesforce } from 'react-icons/si'

const About = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kislay-kumar-kk',
      icon: FaLinkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/KislayKashyap-hub',
      icon: FaGithub,
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'Trailhead',
      url: 'https://www.salesforce.com/trailblazer/kislay-kumar-kk',
      icon: SiSalesforce,
      color: 'hover:text-blue-500',
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8"
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Salesforce Certified Developer with 6+ months of hands-on experience in Apex, LWC, 
                Flows, Integrations, and automation. Currently at Techila Global Services as an 
                Associate Software Engineer. Former Node.js Developer with strong backend experience.
              </p>
              <p className="text-lg mb-8 italic text-gray-700 dark:text-gray-300">
                "I'm passionate about solving real-world problems with clean code and smart automation."
              </p>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
                <div className="flex justify-center gap-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-3xl text-gray-600 dark:text-gray-400 transition-colors duration-200 ${link.color}`}
                      aria-label={link.name}
                    >
                      <link.icon />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/KislayKumar-CV.pdf"
                  download
                  className="btn-primary inline-flex items-center"
                >
                  <span>Download Resume</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}

export default About 