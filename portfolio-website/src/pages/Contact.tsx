import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'
import emailjs from 'emailjs-com'
import {
  EnvelopeIcon,
  LinkIcon,
  CodeBracketIcon,
  CloudIcon,
} from '@heroicons/react/24/outline'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const socialLinks = [
  {
    name: 'Email',
    icon: EnvelopeIcon,
    href: 'mailto:kislay.tech@gmail.com',
    label: 'kislay.tech@gmail.com',
    color: 'hover:text-red-400',
  },
  {
    name: 'LinkedIn',
    icon: LinkIcon,
    href: 'https://www.linkedin.com/in/kislay-kumar-kk',
    label: 'linkedin.com/in/kislay-kumar-kk',
    color: 'hover:text-blue-400',
  },
  {
    name: 'GitHub',
    icon: CodeBracketIcon,
    href: 'https://github.com/KislayKashyap-hub',
    label: 'github.com/KislayKashyap-hub',
    color: 'hover:text-gray-400',
  },
  {
    name: 'Trailhead',
    icon: CloudIcon,
    href: 'https://www.salesforce.com/trailblazer/kislay-kumar-kk',
    label: 'trailblazer/kislay-kumar-kk',
    color: 'hover:text-blue-500',
  },
]

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const userID = process.env.REACT_APP_EMAILJS_USER_ID

    try {
      // Send the email via EmailJS using environment variables
      const response = await emailjs.send(
        serviceID,      // Your service ID from the .env file
        templateID,     // Your template ID from the .env file
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        userID          // Your user ID from the .env file
      )

      console.log(response)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
            <h1 className="section-title">Get In Touch</h1>
            <p className="text-lg text-textSecondary-light dark:text-textSecondary-dark">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary-light/5 dark:bg-primary-dark/5 p-6 rounded-lg border border-secondary/20"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-textPrimary-light dark:text-textPrimary-dark mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2 bg-primary-light/5 dark:bg-primary-dark/5 border ${
                      errors.name ? 'border-red-500' : 'border-secondary/20'
                    } rounded-lg focus:outline-none focus:border-secondary transition-colors`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-textPrimary-light dark:text-textPrimary-dark mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2 bg-primary-light/5 dark:bg-primary-dark/5 border ${
                      errors.email ? 'border-red-500' : 'border-secondary/20'
                    } rounded-lg focus:outline-none focus:border-secondary transition-colors`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-textPrimary-light dark:text-textPrimary-dark mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2 bg-primary-light/5 dark:bg-primary-dark/5 border ${
                      errors.message ? 'border-red-500' : 'border-secondary/20'
                    } rounded-lg focus:outline-none focus:border-secondary transition-colors`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-500 text-center">
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-center">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-primary-light/5 dark:bg-primary-dark/5 p-6 rounded-lg border border-secondary/20">
                <h2 className="text-xl font-semibold text-textPrimary-light dark:text-textPrimary-dark mb-6">
                  Connect With Me
                </h2>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 text-textSecondary-light dark:text-textSecondary-dark ${link.color} transition-colors duration-300`}
                      whileHover={{ x: 5 }}
                    >
                      <link.icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
