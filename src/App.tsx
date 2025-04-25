import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Experience = React.lazy(() => import('./pages/Experience'))
const Projects = React.lazy(() => import('./pages/Projects'))
const Certificates = React.lazy(() => import('./pages/Certificates'))
const Contact = React.lazy(() => import('./pages/Contact'))

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
)

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
          <Helmet>
            <title>Kislay Kumar - Salesforce Developer</title>
            <meta name="description" content="Portfolio website of Kislay Kumar, a Salesforce Developer specializing in LWC, Apex, and AI technologies." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Kislay Kumar - Salesforce Developer" />
            <meta property="og:description" content="Portfolio website of Kislay Kumar, a Salesforce Developer specializing in LWC, Apex, and AI technologies." />
            <meta property="og:type" content="website" />
            <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />
            <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
          </Helmet>
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App 