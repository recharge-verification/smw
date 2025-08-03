'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: "Rencontre intime",
    duration: "1 heure",
    price: "150€",
    description: "Un moment sensuel dans un cadre discret et raffiné incluant relation intime et massage relaxant.",
    details: [
      "En salon privé ou lieu public discret",
      "Moment de plaisir partagé.",
      "Tenue élégante selon vos préférences"
    ]
  },
  // {
  //   title: "Dîner intime",
  //   duration: "4 heures",
  //   price: "550€",
  //   description: "Soirée gastronomique en compagnie exclusive.",
  //   details: [
  //     "Restaurant sélectionné ou réservation privée",
  //     "Tenue de soirée",
  //     "Transport inclus"
  //   ]
  // },
  {
    title: "Rencontre dîner & soirée",
    duration: "4 heures",
    price: "550€",
    description: "Une expérience complète alliant raffinement et intimité",
    details: [
      "Apéritif, dîner et prolongation en privé",
      "Plusieurs tenues disponibles",
      "Ambiance sur mesure selon vos désirs"
    ]
  },
  {
    title: "Après-midi privilège",
    duration: "5 heures",
    price: "720€",
    description: "Un moment prolongé pour une évasion complète",
    details: [
      "Programme personnalisé (spa, shopping, dîner)",
      "Service de conciergerie inclus",
      "Option déplacement en région parisienne"
    ]
  },
  {
    title: "Nuit complète",
    duration: "8 heures",
    price: "800€",
    description: "Une nuit inoubliable d'intimité et de complicité",
    details: [
      "Hôtel 4-5 étoiles ou résidence discrète",
      "Petit-déjeuner inclus",
      "Service de voiturier disponible"
    ]
  },
  {
    title: "Week-end d'exception",
    duration: "24 heures",
    price: "1200€",
    description: "Évasion complète pour une expérience immersive",
    details: [
      "Destination au choix (France ou frontalière)",
      "Tenues adaptées à chaque moment",
      "Toutes prestations incluses"
    ]
  }
]

const options = [
  "Déplacement international (+50% du tarif horaire)",
  "Tenues haute couture (supplément 100-300€)",
  "Location d'espaces privatifs (sur devis)",
  "Photographie professionnelle (option 200€/h)",
  "Activités spéciales (à convenir ensemble)"
]

export default function Pricing() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100 }
    }
  }

  return (
    <section id="prestations" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-serif">
            Prestations & Tarifs
          </motion.h2>
          <motion.div variants={item} className="w-20 h-1 bg-pink-500 mx-auto mb-8"></motion.div>
        </motion.div>

        {/* Cartes des prestations */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300"
            >
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <h3 className="card-title text-xl text-pink-600 font-serif">{service.title}</h3>
                  <span className="badge badge-primary badge-lg min-w-30">{service.duration}</span>
                </div>
                
                <div className="my-4">
                  <span className="text-3xl font-bold">{service.price}</span>
                  <span className="text-sm ml-2">(TTC)</span>
                </div>
                
                <p className="mb-4 font-medium">{service.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-4 h-4 text-pink-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Options supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-base-300 rounded-box p-8 mb-12"
        >
          <h3 className="text-xl font-semibold mb-4 text-pink-600 font-mono">Options premium :</h3>
          <ul className="space-y-3">
            {options.map((option, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-medium">{option}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-base-content/80 max-w-2xl mx-auto"
        >
          <div className="bg-base-200 rounded-box p-6 space-y-3">
            <p className="mb-2">* Les tarifs sont indicatifs et peuvent varier selon la complexité de la prestation</p>
            
            <div className="bg-neutral/10 p-4 rounded-lg border-l-4 border-primary">
              <p className="font-medium text-primary mb-1">📅 Réservation obligatoire</p>
              <p className="text-sm">
                La réservation est une garantie qui confirme votre sérieux et maintient le rendez-vous. 
                Elle se fait par un acompte modique pour bloquer votre créneau exclusif. 
                Dès confirmation, je prépare tout pour vous accueillir dans les meilleures conditions.
              </p>
            </div>

            <p className="mb-2">** Paiement sécurisé : espèces, virement anticipé, recharge ou système discret</p>
            <p>*** Annulation possible jusqu'à 24h avant le rendez-vous</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}