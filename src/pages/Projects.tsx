import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  emoji: string;
  company?: string;
  technologies: string[];
  githubUrl?: string;
  summary: string;
  achievements: string[];
}

const projects: Project[] = [
  {
    title: 'Customer Support Bot',
    emoji: '🧠',
    company: 'Coral Cloud Resort',
    technologies: ['Salesforce Service Cloud', 'Agentforce AI', 'Data Cloud'],
    summary: 'Built an intelligent AI chatbot using Agentforce within Salesforce Service Cloud.',
    achievements: [
      'Implemented smart escalation logic for unresolved queries',
      'Enhanced customer resolution time by 60% using AI automation'
    ]
  },
  {
    title: 'Lead Assignment Automation',
    emoji: '🧭',
    technologies: ['Salesforce Sales Cloud', 'Apex', 'Assignment Rules'],
    summary: 'Developed a dynamic Apex Trigger to auto-assign leads based on territory, account type, and rep workload.',
    achievements: [
      'Improved response efficiency by 40%'
    ]
  },
  {
    title: 'Housing Map Viewer',
    emoji: '🏠',
    technologies: ['LWC', 'Apex', 'Google Maps API', 'Salesforce CRM'],
    githubUrl: 'https://github.com/KislayKashyap-hub/Housing-Map-Project',
    summary: 'Built a real estate platform that integrates Google Maps with Salesforce LWC.',
    achievements: [
      'Integrates Google Maps with Salesforce LWC',
      'Allows search/filter of properties by type, price, and location',
      'Boosted property search efficiency by 40%'
    ]
  },
  {
    title: 'Web-To-Lead Form',
    emoji: '📝',
    technologies: ['LWC', 'Apex', 'REST API', 'Validation Rules'],
    githubUrl: 'https://github.com/KislayKashyap-hub/Web-To-Lead-Form-LWC',
    summary: 'Created a fully validated web form for lead capture and management.',
    achievements: [
      'Collect and auto-submit lead info to Salesforce',
      'Prevent duplicates via field-level checks',
      'Increased lead capture accuracy by 50%'
    ]
  },
  {
    title: 'Weather Forecast App',
    emoji: '🌦️',
    technologies: ['LWC', 'OpenWeather API'],
    githubUrl: 'https://github.com/KislayKashyap-hub/Weather-Forecast-LWC',
    summary: 'Real-time weather data integration using OpenWeather API.',
    achievements: [
      'Uses external API to fetch real-time and 5-day weather data',
      'Based on Account\'s Billing City or custom user input'
    ]
  },
  {
    title: 'LWC + Apex Component Library',
    emoji: '🧩',
    technologies: ['LWC', 'Apex'],
    githubUrl: 'https://github.com/KislayKashyap-hub/LWC-Apex-Component',
    summary: 'Modular, reusable Salesforce component set.',
    achievements: [
      'Streamline development across multiple orgs',
      'Accelerate POC creation and testing'
    ]
  }
];

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of my work in Salesforce development, showcasing expertise in LWC, Apex, and various integrations.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.emoji} {project.title}
                    </h3>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                  {project.company && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {project.company}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.summary}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects; 