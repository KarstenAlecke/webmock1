import { motion } from 'framer-motion'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const boxVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  }

  return (
    <footer className="relative bg-pure-black text-pure-white py-16 px-8 md:px-16 lg:px-24">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(0deg, white 2px, transparent 2px),
            linear-gradient(90deg, white 2px, transparent 2px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Decorative boxes grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex gap-4 justify-center mb-12"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              variants={boxVariants}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-pure-white"
            />
          ))}
        </motion.div>

        {/* Footer content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl mb-4">
            homanize
          </h3>
          <p className="font-mono text-sm sm:text-base opacity-70">
            © {new Date().getFullYear()} Homanize. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
