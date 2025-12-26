import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      id: 1,
      title: 'Full Stack Development',
      company: 'Code io',
      type: 'Learning & Building',
      location: 'Online',
      period: '2025',
      description: 'Started learning full stack development and built multiple projects including e-commerce platforms, task management apps, and portfolio websites. Gained expertise in modern web technologies and best practices.',
      technologies: ['React', 'Node.js', 'MongoDB', 'RESTful APIs', 'Express'],
      achievements: [
        'Built 5+ full-stack projects',
        'Mastered React and Node.js ecosystem',
        'Implemented authentication & authorization',
        'Deployed applications to production',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'DevOps Engineering',
      company: '100x',
      type: 'Learning & Implementation',
      location: 'Remote',
      period: '2025',
      description: 'Started learning DevOps practices and cloud technologies. Implemented CI/CD pipelines, containerization, and infrastructure as code. Gained hands-on experience with AWS and modern deployment strategies.',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git', 'Jenkins'],
      achievements: [
        'Set up CI/CD pipelines',
        'Containerized applications with Docker',
        'Deployed to AWS cloud infrastructure',
        'Automated deployment processes',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 glass rounded-lg text-sm font-medium text-green-400 border border-green-500/30">
              Explore My
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and the skills I've developed
          </p>
        </motion.div>

        {/* Experience Cards - Simple Stacked Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="glass glass-hover rounded-2xl p-8 border border-purple-500/20 relative overflow-hidden group"
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, transparent, rgba(139, 92, 246, 0.1), transparent)',
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ delay: index * 0.3 + 0.3, type: 'spring', stiffness: 200 }}
                      className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg shadow-purple-500/50 flex items-center justify-center text-white"
                    >
                      {exp.icon}
                    </motion.div>

                    {/* Title & Company */}
                    <div className="flex-1">
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: index * 0.3 + 0.4 }}
                        className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-400 text-xs font-semibold rounded-full mb-3"
                      >
                        {exp.type}
                      </motion.span>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-purple-400 font-semibold mb-1">{exp.company}</p>
                      <p className="text-sm text-gray-400">{exp.location}</p>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: index * 0.3 + 0.5, type: 'spring' }}
                    className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg shadow-lg h-fit"
                  >
                    {exp.period}
                  </motion.span>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Key Achievements
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.3 + idx * 0.1 + 0.6 }}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.3 + idx * 0.05 + 0.8 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 bg-gray-800/80 text-gray-300 text-sm font-medium rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience