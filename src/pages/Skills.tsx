import React from 'react'
import PageTransition from '../components/PageTransition'
import TechStackTimeline from '../components/TechStackTimeline'
import { motion } from 'framer-motion'
import {
  CloudIcon,
  CodeBracketIcon,
  CommandLineIcon,
  BoltIcon,
  CubeIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline'

const skillCategories = [
  {
    title: 'Salesforce Technologies',
    icon: CloudIcon,
    skills: [
      { name: 'Apex & Triggers', level: 90 },
      { name: 'Aura & CRM', level: 85 },
      { name: 'Lightning Web Components (LWC)', level: 88 },
      { name: 'Visualforce', level: 85 },
      { name: 'Flows & Process Builder', level: 90 },
    ],
  },
  {
    title: 'Salesforce Platform',
    icon: CubeIcon,
    skills: [
      { name: 'Service Cloud', level: 85 },
      { name: 'Sales Cloud', level: 85 },
      { name: 'Agentforce (AI)', level: 80 },
      { name: 'Approval Processes', level: 85 },
      { name: 'REST API Integration', level: 85 },
    ],
  },
  {
    title: 'Development',
    icon: CodeBracketIcon,
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'HTML & CSS', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Git & Version Control', level: 85 },
      { name: 'Salesforce DX', level: 80 },
    ],
  },
  {
    title: 'Databases',
    icon: CircleStackIcon,
    skills: [
      { name: 'SQL', level: 80 },
      { name: 'NoSQL', level: 75 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MySQL', level: 75 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: CommandLineIcon,
    skills: [
      { name: 'VSCode', level: 90 },
      { name: 'Postman', level: 85 },
      { name: 'Linux', level: 75 },
      { name: 'SOQL', level: 85 },
      { name: 'External Systems', level: 80 },
    ],
  },
]

const SkillCard = ({ category, index }: { category: any; index: number }) => {
  const Icon = category.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-blue-500 dark:text-blue-400" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {category.title}
        </h3>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill: any) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <span className="text-sm text-blue-500 dark:text-blue-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Specialized in Salesforce development with expertise in web technologies and modern development tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={category.title} category={category} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills 