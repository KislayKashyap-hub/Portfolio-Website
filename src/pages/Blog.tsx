import React from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

interface BlogPost {
  id: string
  title: string
  date: string
  excerpt: string
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: 'getting-started-with-react',
    title: 'Getting Started with React',
    date: '2024-01-15',
    excerpt: 'Learn how to build modern web applications with React...',
    tags: ['React', 'JavaScript', 'Web Development'],
  },
  {
    id: 'typescript-best-practices',
    title: 'TypeScript Best Practices',
    date: '2024-01-10',
    excerpt: 'Discover the best practices for writing TypeScript code...',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
  },
]

const Blog = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="section-title text-center">Blog</h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group block"
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="p-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Blog 