import { motion } from 'motion/react';
import { Send, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xkovnoqy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Rejoignez votre communauté locale
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Inscrivez-vous pour faire partie de la première marketplace de confiance de votre quartier
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type d'utilisateur */}
              <div>
                <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">
                  Je souhaite rejoindre en tant que :
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                >
                  <option value="">-- Choisissez --</option>
                  <option value="consommateur">🛒 Consommateur (Acheteur)</option>
                  <option value="commercant">🏪 Commerçant (Vendeur)</option>
                  <option value="livreur">🚴 Livreur</option>
                </select>
              </div>

              {/* Nom */}
              <div>
                <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet :
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  placeholder="Ex: Jean Dupont"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Adresse email :
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                  Numéro WhatsApp :
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  placeholder="+225 XXX XXX XXX"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Ville */}
              <div>
                <label htmlFor="ville" className="block text-sm font-semibold text-gray-700 mb-2">
                  Ville :
                </label>
                <input
                  type="text"
                  id="ville"
                  name="ville"
                  placeholder="Ex: Abidjan, Yamoussoukro..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Catégorie */}
              <div>
                <label htmlFor="categorie" className="block text-sm font-semibold text-gray-700 mb-2">
                  Catégorie d'intérêt :
                </label>
                <select
                  id="categorie"
                  name="categorie"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                >
                  <option value="">-- Choisissez (optionnel) --</option>
                  <option value="mode">👗 Mode</option>
                  <option value="friperie">👕 Friperie</option>
                  <option value="autre">📦 Autre</option>
                </select>
              </div>

              {/* Autre catégorie */}
              <div>
                <label htmlFor="categorie_autre" className="block text-sm font-semibold text-gray-700 mb-2">
                  Si "Autre", précisez :
                </label>
                <input
                  type="text"
                  id="categorie_autre"
                  name="categorie_autre"
                  placeholder="Ex: Électronique, Alimentation, etc."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message (optionnel) :
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Dites-nous pourquoi Brumerie vous intéresse..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {/* Bouton Submit */}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Rejoindre la communauté</span>
                  </>
                )}
              </button>

              {/* Messages de statut */}
              {formStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center">
                  ✅ Inscription réussie ! Nous vous contacterons bientôt.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
                  ❌ Une erreur est survenue. Veuillez réessayer.
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Direct */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ou contactez-nous directement
              </h3>
              <p className="text-gray-600 mb-6">
                Vous préférez nous parler directement ? Choisissez votre moyen de contact préféré.
              </p>
            </div>

            {/* Bouton WhatsApp */}
            <a
              href="https://wa.me/22586867693?text=Bonjour%2C%20je%20veux%20rejoindre%20Brumerie%20%F0%9F%8D%BA%0A%0ANom%3A%20%0AJe%20suis%3A%20%5BConsommateur%2FCommerçant%2FLivreur%5D%0ACatégorie%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl hover:shadow-2xl transition-all transform hover:scale-105 group"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Phone className="w-7 h-7" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium opacity-90">Discuter sur</p>
                <p className="text-xl font-bold">WhatsApp Business</p>
              </div>
            </a>

            {/* Bouton Email */}
            <a
              href="mailto:brumerieciv.email@gmail.com?subject=Inscription%20MVP%20Brumerie&body=Bonjour%2C%0A%0ANom%3A%20%0AJe%20suis%3A%20%5BConsommateur%2FCommerçant%2FLivreur%5D%0AWhatsApp%3A%20%0AVille%3A%20%0ACatégorie%3A%20"
              className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:shadow-2xl transition-all transform hover:scale-105 group"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium opacity-90">Nous écrire par</p>
                <p className="text-xl font-bold">Email</p>
              </div>
            </a>

            {/* Badge de confiance */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Vos données sont protégées</h4>
                  <p className="text-sm text-gray-600">
                    Nous respectons votre vie privée et ne partagerons jamais vos informations personnelles.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
