import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0,
      },
    },
  }

  const letterVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-pure-white overflow-hidden">
      {/* Background rectangles */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(0deg, black 2px, transparent 2px),
            linear-gradient(90deg, black 2px, transparent 2px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Main logo text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-8"
      >
        <h1 className="font-display text-[15vw] sm:text-[12vw] md:text-[10vw] leading-none tracking-tight text-center">
          {'homanize'.split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-mono text-center mt-8 text-sm sm:text-base md:text-lg tracking-wider uppercase"
        >
          Organize Your Home, Simplify Your Life
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-pure-black rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-pure-black rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
