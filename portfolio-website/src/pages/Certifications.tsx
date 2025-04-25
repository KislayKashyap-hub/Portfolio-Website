import { motion } from 'framer-motion'
import { AcademicCapIcon, StarIcon } from '@heroicons/react/24/outline'

const certifications = [
  {
    title: 'Salesforce Certified AI Associate',
    organization: 'Salesforce',
    date: 'January 2024',
    credentialId: 'SFAI-2024-001',
    badgeColor: 'from-blue-400 to-purple-600',
    icon: '🤖',
    description: 'Expertise in AI-powered automation, Einstein features, and Agentforce implementation.',
  },
  {
    title: 'Agentforce Specialist',
    organization: 'Salesforce',
    date: 'December 2023',
    credentialId: 'AGF-2023-001',
    badgeColor: 'from-green-400 to-blue-600',
    icon: '🎯',
    description: 'Specialized in implementing and customizing Agentforce AI solutions for enhanced customer service.',
  },
]

const achievements = [
  {
    title: 'Double Star Ranger',
    platform: 'Trailhead',
    points: '100,000+',
    badges: '300+',
    rank: 'Double Star Ranger',
    badgeColor: 'from-yellow-400 to-orange-600',
    icon: '⭐⭐',
  }
]

const CertificationBadge = ({ certification, index }: { certification: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex flex-col items-center"
  >
    <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${certification.badgeColor} flex items-center justify-center text-4xl shadow-lg mb-4`}>
      {certification.icon}
    </div>
    <div className="text-center">
      <h3 className="text-xl font-semibold text-textPrimary-light dark:text-textPrimary-dark mb-2">
        {certification.title}
      </h3>
      <p className="text-sm text-textSecondary-light dark:text-textSecondary-dark mb-1">
        {certification.organization}
      </p>
      <p className="text-sm text-textSecondary-light dark:text-textSecondary-dark mb-2">
        {certification.date}
      </p>
      <p className="text-xs text-textSecondary-light dark:text-textSecondary-dark">
        ID: {certification.credentialId}
      </p>
    </div>
  </motion.div>
)

const TrailheadBadge = ({ achievement }: { achievement: any }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-primary-light/5 dark:bg-primary-dark/5 p-8 rounded-lg border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
  >
    <div className="flex flex-col items-center text-center">
      <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${achievement.badgeColor} flex items-center justify-center text-6xl shadow-lg mb-6`}>
        {achievement.icon}
      </div>
      <h3 className="text-2xl font-bold text-textPrimary-light dark:text-textPrimary-dark mb-2">
        {achievement.rank}
      </h3>
      <p className="text-lg text-secondary mb-4">
        {achievement.platform}
      </p>
      <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
        <div className="text-center">
          <p className="text-2xl font-bold text-textPrimary-light dark:text-textPrimary-dark">
            {achievement.points}
          </p>
          <p className="text-sm text-textSecondary-light dark:text-textSecondary-dark">
            Points
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-textPrimary-light dark:text-textPrimary-dark">
            {achievement.badges}
          </p>
          <p className="text-sm text-textSecondary-light dark:text-textSecondary-dark">
            Badges
          </p>
        </div>
      </div>
    </div>
  </motion.div>
)

const Certifications = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="section-title">Certifications & Achievements</h1>
            <p className="text-lg text-textSecondary-light dark:text-textSecondary-dark">
              Professional certifications and continuous learning achievements in the Salesforce ecosystem.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-textPrimary-light dark:text-textPrimary-dark mb-8 text-center">
              Professional Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <CertificationBadge key={cert.title} certification={cert} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-textPrimary-light dark:text-textPrimary-dark mb-8 text-center">
              Trailhead Achievements
            </h2>
            <div className="max-w-lg mx-auto">
              {achievements.map((achievement) => (
                <TrailheadBadge key={achievement.title} achievement={achievement} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Certifications 