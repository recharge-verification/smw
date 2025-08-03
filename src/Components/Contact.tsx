'use client'

import { submitFormData } from '@/utils/submitForm'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

const [error, setError] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setError(false); // reset
  setSubmitted(false); // reset

  const success = await submitFormData(formData);
  if (success) {
    setSubmitted(true);
  } else {
    setError(true);
  }
};


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
    <section id="contact" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-serif">Contact</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Pour toute demande de rendez-vous ou information complémentaire
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Formulaire */}
          <motion.div 
            variants={item}
            className="w-full lg:w-1/2"
          >
            {submitted && (
              <div className="alert alert-success shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.</span>
              </div>
            )}
            {error && <p className="text-red-600 mt-4">Une erreur est survenue. Veuillez réessayer.</p>}
              <form onSubmit={handleSubmit} className="card bg-base-200 shadow-lg p-6">
                <div className="form-control mb-4 grid sm:grid-cols-2">
                  <label className="label">
                    <span className="label-text">Votre nom ou pseudonyme</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mb-4 grid sm:grid-cols-2">
                  <label className="label">
                    <span className="label-text">Votre email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mb-4 grid sm:grid-cols-2">
                  <label className="label">
                    <span className="label-text">Votre message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered h-32"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary bg-pink-600 hover:bg-pink-700 border-none w-full">
                  Envoyer le message
                </button>
              </form>
          </motion.div>

          {/* Méthodes alternatives */}
          <motion.div 
            variants={item}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="card bg-base-200 shadow-lg p-6">
              <h3 className="text-xl font-bold text-pink-600 mb-4">Autres moyens de contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 text-pink-600 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-sm text-base-content/60">
                      Disponible après réservation
                    </p>
                  </div>
                </div>

                <div className="divider"></div>

                <h4 className="font-medium">Réseaux professionnels pour réservation:</h4>
              <div className="flex flex-col gap-6 p-4">
                <a 
                  href="https://wa.me/message/2SL4YOIBTI2ME1" 
                  className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-primary-content hover:-translate-y-1 transition-all duration-200 flex items-center gap-2 px-6"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="font-medium">WhatsApp</span>
                </a>
                <a 
                  href="https://t.me/sarahmeyer11" 
                  className="btn btn-outline border-secondary text-secondary hover:bg-secondary hover:text-secondary-content hover:-translate-y-1 transition-all duration-200 flex items-center gap-2 px-6"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
                  </svg>
                  <span className="font-medium">Telegram</span>
                </a>
              </div>
              </div>
            </div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-base-300 rounded-box p-6 text-sm"
            >
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p>
                  <strong>Confidentialité :</strong> Réservé aux majeurs. Toute demande sera traitée avec la plus stricte discrétion. Vos informations ne seront jamais partagées avec des tiers.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}