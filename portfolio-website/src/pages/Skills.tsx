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
    title: 'Salesforce Core',
    icon: CloudIcon,
    skills: [
      { name: 'Apex Development', level: 90 },
      { name: 'Triggers & Automation', level: 85 },
      { name: 'Lightning Web Components', level: 88 },
      { name: 'Visualforce', level: 80 },
      { name: 'SOQL & SOSL', level: 85 },
    ],
  },
  {
    title: 'Salesforce Platform',
    icon: CubeIcon,
    skills: [
      { name: 'Sales Cloud', level: 85 },
      { name: 'Service Cloud', level: 85 },
      { name: 'Agentforce (AI)', level: 80 },
      { name: 'Flow Builder', level: 90 },
      { name: 'Process Builder', level: 85 },
    ],
  },
  {
    title: 'Development & Integration',
    icon: BoltIcon,
    skills: [
      { name: 'REST API Integration', level: 85 },
      { name: 'Salesforce DX', level: 80 },
      { name: 'External Systems', level: 75 },
      { name: 'Approval Processes', level: 85 },
      { name: 'Data Migration', level: 80 },
    ],
  },
  {
    title: 'Web Technologies',
    icon: CodeBracketIcon,
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5 & CSS3', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'SQL & NoSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: 'Databases',
    icon: CircleStackIcon,
    skills: [
      { name: 'PostgreSQL', level: 75 },
      { name: 'MySQL', level: 75 },
      { name: 'MongoDB', level: 75 },
      { name: 'Database Design', level: 80 },
      { name: 'Data Modeling', level: 80 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: CommandLineIcon,
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Postman', level: 85 },
      { name: 'Linux', level: 75 },
      { name: 'Command Line', level: 80 },
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
      className="bg-primary-light/5 dark:bg-primary-dark/5 p-6 rounded-lg border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-secondary" />
        <h3 className="text-xl font-semibold text-textPrimary-light dark:text-textPrimary-dark">
          {category.title}
        </h3>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill: any) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-textSecondary-light dark:text-textSecondary-dark">
                {skill.name}
              </span>
              <span className="text-sm text-secondary">{skill.level}%</span>
            </div>
            <div className="w-full bg-primary-dark/10 dark:bg-primary-light/10 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-secondary h-2 rounded-full"
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
            <h1 className="section-title">Technical Skills</h1>
            <p className="text-lg text-textSecondary-light dark:text-textSecondary-dark">
              Specialized in Salesforce development with a strong foundation in web technologies and tools.
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