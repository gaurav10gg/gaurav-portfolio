import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        animate={{
          x: [0, 50, -100, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Mouse Follow Effect */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15), transparent 50%)`,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Greeting with Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-purple-400 font-medium flex items-center justify-center gap-2"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Hello, I'm available for work
          </motion.div>

          {/* Name with Glitch Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
          >
            <motion.span
              className="inline-block gradient-text text-glow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Gaurav G
            </motion.span>
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block"
            >
              Full Stack Developer
            </motion.span>
            {' & '}
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            >
              DevOps Engineer
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed"
          >
            Building scalable applications with modern technologies.
            Passionate about clean code, performance, and user experience.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
          >
            {['React', 'Node.js', 'Docker', 'AWS', 'MongoDB'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 glass rounded-full text-sm font-medium text-gray-300 border border-purple-500/30 hover:border-purple-500/60 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              onClick={() => scrollToSection('#projects')}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass glass-hover rounded-full text-white font-semibold border border-purple-500/50 hover:border-purple-500 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center pt-2 cursor-pointer"
              onClick={() => scrollToSection('#about')}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-purple-500 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-purple-500/20 rounded-lg animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-40 right-20 w-16 h-16 border border-pink-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-20 w-12 h-12 border border-cyan-500/20 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
    </section>
  )
}

export default Hero