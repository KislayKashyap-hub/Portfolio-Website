import React from 'react'
import { motion } from 'framer-motion'

interface TechItem {
  year: string
  title: string
  description: string
  technologies: string[]
}

const techStack: TechItem[] = [
  {
    year: '2024',
    title: 'Full Stack Development',
    description: 'Building modern web applications with React and Node.js',
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
  },
  {
    year: '2023',
    title: 'Cloud & DevOps',
    description: 'Learning cloud platforms and DevOps practices',
    technologies: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
  },
  {
    year: '2022',
    title: 'Frontend Development',
    description: 'Mastering modern frontend technologies',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
]

const TechStackTimeline = () => {
  return (
    <div className="py-12">
      <h2 className="section-title text-center">My Learning Journey</h2>
      <div className="max-w-3xl mx-auto mt-8">
        {techStack.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 pb-8 border-l-2 border-blue-500 dark:border-blue-400 last:border-transparent"
          >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400" />
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-4">
                {item.year}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TechStackTimeline 