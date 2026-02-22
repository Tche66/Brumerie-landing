import { motion } from 'motion/react';
import { ArrowRight, Shield, Users, Zap } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Communauté vérifiée · Transactions sécurisées</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Le commerce local,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">
                en toute confiance.
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Achetez et vendez près de vous, avec des transactions sécurisées et une communauté vérifiée. Votre quartier, votre marketplace.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-sm text-gray-700">Paiement</p>
                <p className="text-sm text-gray-700 font-semibold">Sécurisé</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-sm text-gray-700">Vendeurs</p>
                <p className="text-sm text-gray-700 font-semibold">Vérifiés</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-sm text-gray-700">Livraison</p>
                <p className="text-sm text-gray-700 font-semibold">Locale</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <span>Rejoindre la communauté</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <span>Devenir vendeur</span>
              </button>
            </div>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1508418717103-8b56bcf03360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBmYXNoaW9ufGVufDF8fHx8MTc2OTA5NDI1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Fashion africaine"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="h-40 rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzY5MTU0MDM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Accessoires luxury"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-40 rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1614697493802-5b43f769882f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhdXR5JTIwbWFrZXVwfGVufDF8fHx8MTc2OTE3NTk3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Beauté africaine"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="h-64 rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYW5kYmFnfGVufDF8fHx8MTc2OTE2NDM1NHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Sac luxury"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-white px-6 py-3 rounded-2xl shadow-2xl border border-emerald-200">
              <p className="text-2xl font-bold text-emerald-600">100%</p>
              <p className="text-xs text-gray-600">Confiance locale</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
