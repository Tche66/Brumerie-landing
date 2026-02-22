import { motion } from 'motion/react';
import { ArrowRight, Download, Smartphone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-500 via-green-500 to-green-600">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-6">
            <Smartphone className="w-4 h-4" />
            <span className="font-semibold">Communauté Vérifiée · Transactions Sécurisées</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Rejoignez votre marketplace
            <br />
            de quartier, en toute confiance
          </h2>

          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Faites partie des premiers à acheter et vendre localement avec des transactions 100% sécurisées. Votre quartier, votre communauté.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl hover:shadow-2xl transition-all font-semibold group"
            >
              <span>Rejoindre la communauté</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all font-semibold"
            >
              <span>Devenir vendeur</span>
            </button>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <p className="text-white/80 text-sm">
              Rejoignez une <span className="font-bold text-white">communauté de confiance</span> dans votre quartier
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
