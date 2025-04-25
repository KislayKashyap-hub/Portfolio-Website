import { motion } from 'framer-motion'
import {
  ChatBubbleBottomCenterTextIcon,
  UserGroupIcon,
  MapIcon,
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Amazon Chat Bot',
    description: 'AI-powered chatbot built using Agentforce AI for automated customer support. Handles product inquiries, order status, and general customer service queries with natural language processing.',
    icon: ChatBubbleBottomCenterTextIcon,
    technologies: ['Agentforce AI', 'Apex', 'LWC', 'Einstein Bot', 'Service Cloud'],
    features: [
      'Natural language processing',
      'Order status tracking',
      'Product recommendations',
      'Seamless handoff to human agents'
    ],
    github: '#',
    demo: 'https://amazon.com/support',
  },
  {
    title: 'Lead Assignment Automation',
    description: 'Automated lead routing system using Apex and Flow Builder. Implements round-robin assignment with territory management and business hours consideration.',
    icon: UserGroupIcon,
    technologies: ['Apex', 'Flow Builder', 'Process Builder', 'Sales Cloud'],
    features: [
      'Round-robin assignment',
      'Territory-based routing',
      'Business hours support',
      'Real-time assignment notifications'
    ],
    github: '#',
  },
  {
    title: 'Housing Map Viewer',
    description: 'Interactive property mapping application built with LWC and Google Maps API. Allows users to view and filter property listings with real-time map updates.',
    icon: MapIcon,
    technologies: ['LWC', 'Google Maps API', 'Apex', 'SOQL', 'JavaScript'],
    features: [
      'Interactive map interface',
      'Real-time property filtering',
      'Custom property markers',
      'Detailed property cards'
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'Web-To-Lead Form',
    description: 'Dynamic web-to-lead form with real-time validation and custom styling. Integrates with Salesforce using REST API and handles file uploads.',
    icon: DocumentTextIcon,
    technologies: ['LWC', 'REST API', 'Apex', 'JavaScript', 'Custom CSS'],
    features: [
      'Real-time validation',
      'File upload support',
      'Custom styling options',
      'Integration with Sales Cloud'
    ],
    github: '#',
    demo: '#',
  },
]

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-primary-light/5 dark:bg-primary-dark/5 rounded-lg border border-secondary/20 hover:border-secondary/40 transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-6 h-6 text-secondary" />
          <h3 className="text-xl font-semibold text-textPrimary-light dark:text-textPrimary-dark">
            {project.title}
          </h3>
        </div>
        <p className="text-textSecondary-light dark:text-textSecondary-dark mb-4">
          {project.description}
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-textPrimary-light dark:text-textPrimary-dark mb-2">
            Key Features:
          </h4>
          <ul className="list-disc list-inside text-sm text-textSecondary-light dark:text-textSecondary-dark space-y-1">
            {project.features.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-textPrimary-light dark:text-textPrimary-dark mb-2">
            Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors"
            >
              <CodeBracketIcon className="w-4 h-4" />
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors"
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
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
            <h1 className="section-title">Featured Projects</h1>
            <p className="text-lg text-textSecondary-light dark:text-textSecondary-dark">
              A collection of Salesforce solutions I've built to solve real-world business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects 