import React from 'react'
import PageTransition from '../components/PageTransition'
import { motion } from 'framer-motion'

interface Certification {
  title: string
  issuer: string
  date: string
  credentialUrl: string
  skills: string[]
}

const certifications: Certification[] = [
  {
    title: 'Salesforce Certified Platform Developer I',
    issuer: 'Salesforce',
    date: '2023',
    credentialUrl: 'https://trailhead.salesforce.com/credentials',
    skills: ['Apex', 'SOQL', 'Lightning Web Components', 'Visualforce'],
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialUrl: 'https://aws.amazon.com/certification/',
    skills: ['Cloud Computing', 'AWS Services', 'Security', 'Architecture'],
  },
]

const Certifications = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="section-title text-center">Certifications</h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {cert.issuer} • {cert.date}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Credential →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Certifications 