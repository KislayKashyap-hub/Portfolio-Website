import { motion } from 'framer-motion'
import { CodeBracketIcon, AcademicCapIcon, StarIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const AboutCard = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-primary-light/5 dark:bg-primary-dark/5 p-6 rounded-lg border border-secondary/20 hover:border-secondary/40 transition-colors duration-300"
  >
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-6 h-6 text-secondary" />
      <h3 className="text-xl font-semibold text-textPrimary-light dark:text-textPrimary-dark">{title}</h3>
    </div>
    <div className="text-textSecondary-light dark:text-textSecondary-dark space-y-2">
      {children}
    </div>
  </motion.div>
)

const About = () => {
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
            <h1 className="section-title">About Me</h1>
            <p className="text-lg text-textSecondary-light dark:text-textSecondary-dark">
              A passionate Salesforce Developer turning complex business requirements into elegant solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <AboutCard icon={UserGroupIcon} title="Professional Overview">
              <p>
                As a fresher Salesforce Developer with 6 months of hands-on experience, 
                I bring enthusiasm and a fresh perspective to development challenges. 
                I'm known for being a strong communicator and quick learner, with a 
                passion for creating clean, scalable solutions.
              </p>
            </AboutCard>

            <AboutCard icon={CodeBracketIcon} title="Technical Expertise">
              <ul className="list-disc list-inside">
                <li>Apex Development & Best Practices</li>
                <li>Lightning Web Components (LWC)</li>
                <li>Flow Builder & Process Automation</li>
                <li>API Integrations & Data Management</li>
                <li>SOQL & Database Operations</li>
                <li>Version Control (Git)</li>
              </ul>
            </AboutCard>

            <AboutCard icon={AcademicCapIcon} title="Certifications">
              <ul className="list-disc list-inside">
                <li>Salesforce AI Associate</li>
                <li>Agentforce Specialist</li>
                <li>Additional certifications in progress</li>
              </ul>
              <div className="mt-4 flex items-center gap-2">
                <StarIcon className="w-5 h-5 text-secondary" />
                <span className="font-medium">Double Star Ranger on Trailhead</span>
              </div>
              <p className="mt-2 text-sm">
                Completed 300+ badges, demonstrating comprehensive platform knowledge
              </p>
            </AboutCard>

            <AboutCard icon={UserGroupIcon} title="Personal Approach">
              <ul className="space-y-2">
                <li>🤝 Strong communicator who values team collaboration</li>
                <li>📚 Quick learner with a growth mindset</li>
                <li>💡 Passionate about innovative solutions</li>
                <li>🎯 Detail-oriented with focus on code quality</li>
                <li>🔄 Adaptable to new technologies and challenges</li>
              </ul>
            </AboutCard>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <a
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Let's Connect
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About 