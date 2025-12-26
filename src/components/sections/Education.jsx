import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    { name: 'Frontend Development', percentage: 70, color: 'from-cyan-500 to-blue-500' },
    { name: 'Backend Development', percentage: 85, color: 'from-purple-500 to-pink-500' },
    { name: 'Database', percentage: 75, color: 'from-green-500 to-emerald-500' },
    { name: 'DevOps', percentage: 85, color: 'from-orange-500 to-red-500' },
  ]

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      school: 'National Institute of Technology',
      location: 'Puducherry',
      period: '2025 - 2029',
      description: 'Focused on software engineering, algorithms, and web development.',
      courses: ['Data Structures', 'Algorithms', 'Machine Learning', 'Database Systems'],
    },
    {
      id: 2,
      degree: 'Full Stack Web Development Bootcamp',
      school: 'Code io',
      location: 'Online',
      period: '2025',
      description: 'Intensive 6-month program covering modern web development technologies.',
      courses: ['React', 'Node.js', 'MongoDB', 'RESTful APIs'],
    },
  ]

  const techStack = [
    { name: 'React', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
    { name: 'Node.js', color: 'from-green-500 to-green-700' },
    { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
    { name: 'Python', color: 'from-yellow-500 to-yellow-700' },
    { name: 'MongoDB', color: 'from-green-600 to-green-800' },
    { name: 'PostgreSQL', color: 'from-blue-600 to-blue-800' },
    { name: 'AWS', color: 'from-orange-500 to-orange-700' },
    { name: 'Docker', color: 'from-blue-400 to-blue-600' },
    { name: 'Git', color: 'from-red-500 to-red-700' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
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
            <span className="px-4 py-2 glass rounded-lg text-sm font-medium text-purple-400 border border-purple-500/30">
              Get To Know More
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate developer with expertise in modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - About & Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {/* Who I Am */}
            <motion.div variants={itemVariants} className="glass glass-hover rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-centered digital experiences. With years of experience in web development, I've worked on various projects ranging from small business websites to large-scale applications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My approach combines technical expertise with creative problem-solving, always focusing on delivering solutions that not only meet but exceed user expectations.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="glass glass-hover rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Skills</h3>
              </div>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 font-bold">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemVariants} className="glass glass-hover rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white font-medium rounded-lg cursor-default shadow-lg hover:shadow-xl transition-all`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </motion.div>

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
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
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-purple-400 font-semibold">{edu.school}</p>
                      <p className="text-sm text-gray-400 mt-1">{edu.location}</p>
                    </div>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg whitespace-nowrap shadow-lg"
                    >
                      {edu.period}
                    </motion.span>
                  </div>
                  <p className="text-gray-400 mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 bg-gray-800/80 text-gray-300 text-sm font-medium rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all cursor-default"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education