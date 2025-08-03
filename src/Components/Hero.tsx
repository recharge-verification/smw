'use client'

import { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  // Variantes pour l'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }


const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const, // 👈 important
      stiffness: 100,
      damping: 10,
    },
  },
}


  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 5px 15px rgba(236, 72, 153, 0.4)',
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  }

  return (
    <section className="relative h-screen min-h-[800px] max-w-screen overflow-hidden">
      {/* Image de fond avec effet de profondeur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sarah_hero.jpg" // Remplacez par votre chemin d'image
          alt="Sarah - Escort Premium"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
      </div>

      {/* Contenu animé */}
      <motion.div
        className="container mx-auto px-4 h-full flex items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-serif"
            variants={itemVariants}
          >
           Sarah – Escort d’exception en France
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-pink-200 mb-8 font-light font-sans"
            variants={itemVariants}
          >
            Discrétion, élégance et moments inoubliables
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link 
              href="#prestations" 
              className="btn btn-primary bg-pink-600 hover:bg-pink-700 border-none text-white text-lg px-8 py-4 rounded-full shadow-lg"
            >
              <motion.span
                variants={buttonVariants}
                whileHover="hover"
                className="block"
              >
                Découvrir mes prestations
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{
          y: [0, 20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white"
        >
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </section>
  )
}