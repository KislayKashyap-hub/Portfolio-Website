import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { SiSalesforce } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

interface Certification {
  title: string;
  provider: string;
  providerIcon: any;
  issuedDate: string;
  credentialId?: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    title: 'Salesforce Certified AI Associate',
    provider: 'Salesforce',
    providerIcon: SiSalesforce,
    issuedDate: 'Mar 2025',
    credentialId: '5960733',
    skills: ['Salesforce', 'Certified Salesforce.com Developer']
  },
  {
    title: 'Salesforce Certified Agentforce Specialist',
    provider: 'Salesforce',
    providerIcon: SiSalesforce,
    issuedDate: 'Mar 2025',
    credentialId: '5966891',
    skills: ['Salesforce', 'Agentforce', 'Certified Salesforce.com Developer']
  },
  {
    title: 'AWS Essential Training for Developers',
    provider: 'LinkedIn',
    providerIcon: FaLinkedin,
    issuedDate: 'Jul 2024',
    skills: ['Amazon Web Services (AWS)']
  },
  {
    title: 'Amazon Web Services: Data Services',
    provider: 'LinkedIn',
    providerIcon: FaLinkedin,
    issuedDate: 'Jul 2024',
    skills: ['Amazon Web Services (AWS)', 'Data Services']
  },
  {
    title: 'Introduction to Web Design and Development',
    provider: 'LinkedIn',
    providerIcon: FaLinkedin,
    issuedDate: 'Jul 2024',
    skills: ['Web Design']
  },
  {
    title: 'JavaScript Essential Training',
    provider: 'LinkedIn',
    providerIcon: FaLinkedin,
    issuedDate: 'Jul 2024',
    skills: ['JavaScript']
  },
  {
    title: 'Node.js Essential Training',
    provider: 'LinkedIn',
    providerIcon: FaLinkedin,
    issuedDate: 'Jul 2024',
    skills: ['Node.js']
  }
];

const Certificates = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications and achievements in Salesforce, AWS, and web development.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <cert.providerIcon className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 dark:text-gray-400">
                        {cert.provider} • Issued {cert.issuedDate}
                      </p>
                      {cert.credentialId && (
                        <p className="text-gray-600 dark:text-gray-400">
                          Credential ID: {cert.credentialId}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Certificates; 