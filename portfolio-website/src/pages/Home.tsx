import { motion } from 'framer-motion'
import { ArrowDownTrayIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import ThemeToggle from '../components/ThemeToggle'

const Home = () => {
  const handleDownloadResume = () => {
    // Add your resume download logic here
    console.log('Downloading resume...')
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-light dark:bg-primary-dark transition-colors duration-300">
      <ThemeToggle />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h2 className="text-xl text-secondary font-medium mb-2 animate-fade-in">
              Hello, I'm
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary-light dark:text-textPrimary-dark mb-4 animate-fade-in [animation-delay:200ms]">
              Kislay Kumar
            </h1>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-textSecondary-light dark:text-textSecondary-dark mb-6 animate-fade-in [animation-delay:400ms]">
              Certified Salesforce Developer
            </h3>
            <p className="text-lg text-textSecondary-light dark:text-textSecondary-dark mb-8 animate-fade-in [animation-delay:600ms]">
              Crafting scalable Salesforce experiences with code and creativity.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in [animation-delay:800ms]">
              <button
                onClick={handleDownloadResume}
                className="btn-primary flex items-center gap-2"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                View Resume
              </button>
              <button
                onClick={scrollToProjects}
                className="btn-primary flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-first md:order-last"
          >
            <div className="aspect-square rounded-full bg-secondary/10 flex items-center justify-center overflow-hidden border-2 border-secondary">
              <span className="text-secondary text-lg">Your Photo Here</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home 