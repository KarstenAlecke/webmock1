import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface InfoSectionProps {
  title: string
  content: string
  alignment: 'left' | 'right'
}

const InfoSection = ({ title, content, alignment }: InfoSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      ref={ref}
      className={`relative min-h-[70vh] flex items-center px-8 md:px-16 lg:px-24 py-20 ${
        alignment === 'right' ? 'bg-pure-black text-pure-white' : 'bg-pure-white text-pure-black'
      }`}
    >
      {/* Background rectangles */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(0deg, ${alignment === 'right' ? 'white' : 'black'} 2px, transparent 2px),
            linear-gradient(90deg, ${alignment === 'right' ? 'white' : 'black'} 2px, transparent 2px)
          `,
          backgroundSize: '32px 32px'
        }}
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`max-w-6xl mx-auto w-full ${
          alignment === 'right' ? 'ml-auto text-right' : 'mr-auto text-left'
        }`}
      >
        <motion.div variants={itemVariants} className="relative inline-block mb-8">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight">
            {title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`h-1 ${
              alignment === 'right' 
                ? 'bg-pure-white origin-right' 
                : 'bg-pure-black origin-left'
            } mt-6`}
            style={{ width: '60%' }}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className={`font-mono text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed ${
            alignment === 'right' ? 'ml-auto' : 'mr-auto'
          }`}
        >
          {content}
        </motion.p>

        {/* Decorative element */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex gap-2"
          style={{ justifyContent: alignment === 'right' ? 'flex-end' : 'flex-start' }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{
                delay: 0.8 + i * 0.1,
                duration: 0.4,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className={`w-8 h-8 ${
                alignment === 'right' ? 'bg-pure-white' : 'bg-pure-black'
              }`}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default InfoSection
