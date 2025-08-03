'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {/* Image de profil */}
          <motion.div 
            variants={item}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-pink-200 shadow-lg">
              <Image
                src="/sarah_about.jpg" // Remplacez par votre image
                alt="Sarah - Portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Texte de présentation */}
          <motion.div 
            variants={container}
            className="w-full lg:w-2/3 space-y-6"
          >
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-pink-600 font-serif">
              À Propos de Sarah
            </motion.h2>

            <motion.div variants={item} className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-base-200 p-3 rounded-box text-center">
                  <p className="text-sm text-base-content/70">Âge</p>
                  <p className="font-bold">28 ans</p>
                </div>
                <div className="bg-base-200 p-3 rounded-box text-center">
                  <p className="text-sm text-base-content/70">Taille</p>
                  <p className="font-bold">1m68</p>
                </div>
                <div className="bg-base-200 p-3 rounded-box text-center">
                  <p className="text-sm text-base-content/70">Silhouette</p>
                  <p className="font-bold">60kg</p>
                </div>
                <div className="bg-base-200 p-3 rounded-box text-center">
                  <p className="text-sm text-base-content/70">Cheveux</p>
                  <p className="font-bold">Bruns</p>
                </div>
              </div>

              <motion.p variants={item} className="text-base-content/90">
                Née en France avec des origines méditerranéennes, j'ai toujours cultivé un goût pour l'élégance et les relations authentiques. Diplômée en relations internationales, j'ai voyagé à travers l'Europe avant de me consacrer à l'accompagnement discret de personnes raffinées. Mon approche allie sophistication naturelle et parfaite maîtrise des codes sociaux.
              </motion.p>

              <motion.p variants={item} className="text-base-content/90">
                Professionnelle exigeante, je privilégie la qualité à la quantité. Chaque rencontre est préparée avec soin pour répondre à vos attentes dans le respect absolu de votre vie privée. Ma discrétion légendaire et mon sens du détail font de moi la complice idéale pour vos événements comme pour vos moments d'intimité.
              </motion.p>

              <motion.p variants={item} className="text-base-content/90">
                Passionnée par les arts visuels et la gastronomie, je collectionne les expériences sensorielles. Mes voyages entre Paris, Milan et Barcelone nourrissent mon insatiable curiosité culturelle. Je parle couramment français, anglais et italien, et partage volontiers mes découvertes de lieux confidentiels avec ceux qui savent apprécier les plaisirs raffinés.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Section supplémentaire - Langues et centres d'intérêt */}
        <motion.div 
          className="mt-16 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-pink-600">Langues parlées</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="badge badge-lg badge-secondary font-semibold">Français</span>
                <span className="badge badge-lg badge-secondary font-semibold">Anglais</span>
                <span className="badge badge-lg badge-secondary font-semibold">Italien</span>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-pink-600">Passions</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="badge badge-lg">Voyages</span>
                <span className="badge badge-lg">Gastronomie</span>
                <span className="badge badge-lg">Art moderne</span>
                <span className="badge badge-lg">Vins rares</span>
                <span className="badge badge-lg">Littérature</span>
                <span className="badge badge-lg">Mode</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}