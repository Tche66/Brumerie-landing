import { motion } from 'motion/react';
import { Shield, Users, Zap, Smartphone, Lock, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Transactions 100% Sécurisées',
    description: "Votre argent est protégé jusqu'à confirmation de réception. Achetez et vendez en toute tranquillité dans votre quartier.",
    color: 'from-green-400 to-emerald-600',
  },
  {
    icon: Users,
    title: 'Communauté Vérifiée',
    description: 'Tous les membres sont vérifiés. Profils avec avis et notations pour acheter en confiance près de chez vous.',
    color: 'from-blue-400 to-indigo-600',
  },
  {
    icon: Smartphone,
    title: 'Paiement Local Simple',
    description: 'Payez avec Mobile Money : Wave, Orange Money, Moov Money, MTN. Comme d\'habitude, en toute sécurité.',
    color: 'from-teal-400 to-cyan-600',
  },
  {
    icon: Zap,
    title: 'Livraison de Proximité',
    description: 'Rencontrez vos vendeurs localement ou recevez rapidement dans votre quartier. Commerce de proximité réinventé.',
    color: 'from-purple-400 to-pink-600',
  },
];

export function TrustFeatures() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm mb-4">
            <Lock className="w-4 h-4" />
            <span className="font-semibold">Communauté de Confiance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Le commerce local, en toute sécurité
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Brumerie protège chaque transaction pour que vous achetiez et vendiez sereinement dans votre quartier
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all group"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-3">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">99.8%</p>
              <p className="text-sm text-gray-600">Taux de satisfaction</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-3">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">50K+</p>
              <p className="text-sm text-gray-600">Utilisateurs actifs</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-3">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">0%</p>
              <p className="text-sm text-gray-600">Fraude détectée</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-3">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">24h</p>
              <p className="text-sm text-gray-600">Livraison moyenne</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
