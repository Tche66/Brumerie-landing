import { motion } from 'motion/react';
import { Smartphone, CreditCard, CheckCircle } from 'lucide-react';

const mobileMoneyProviders = [
  {
    name: 'MTN Mobile Money',
    logo: '💛',
    color: 'from-yellow-400 to-amber-500',
    users: '10M+',
    description: 'MTN MoMo'
  },
  {
    name: 'Orange Money',
    logo: '🟧',
    color: 'from-orange-400 to-orange-600',
    users: '8M+',
    description: 'Orange Money'
  },
  {
    name: 'Moov Money',
    logo: '🔷',
    color: 'from-blue-500 to-indigo-600',
    users: '6M+',
    description: 'Moov Africa'
  },
  {
    name: 'Wave',
    logo: '🌊',
    color: 'from-blue-400 to-cyan-500',
    users: '5M+',
    description: 'Wave Mobile Money'
  },
];

export function MobileMoneySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm mb-6">
              <Smartphone className="w-4 h-4" />
              <span className="font-semibold">Paiement Sécurisé et Familier</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Payez en toute confiance
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                avec votre Mobile Money
              </span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Utilisez vos moyens de paiement habituels : Wave, Orange Money, Moov Money, MTN. Simple, rapide et 100% sécurisé pour vos achats locaux.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Paiement instantané</p>
                  <p className="text-gray-400 text-sm">Transaction confirmée en moins de 30 secondes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Sans frais cachés</p>
                  <p className="text-gray-400 text-sm">Frais transparents, pas de surprises</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Sécurité maximale</p>
                  <p className="text-gray-400 text-sm">Cryptage bancaire et système escrow</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:shadow-2xl transition-all"
            >
              <CreditCard className="w-5 h-5" />
              <span className="font-semibold">Tester Brumerie</span>
            </button>
          </motion.div>

          {/* Right Content - Providers Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {mobileMoneyProviders.map((provider, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border-2 border-gray-700 hover:border-emerald-500 transition-all group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${provider.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {provider.logo}
                </div>
                
                <h3 className="font-bold text-lg mb-1">{provider.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{provider.users} utilisateurs</p>
                
                <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Disponible</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center"
        >
          <p className="text-lg mb-2">
            <span className="font-bold text-emerald-400">Plus de 29 millions</span> d'utilisateurs Mobile Money en Afrique de l'Ouest
          </p>
          <p className="text-gray-400">
            Brumerie s'intègre avec tous les opérateurs majeurs pour votre confort
          </p>
        </motion.div>
      </div>
    </section>
  );
}
