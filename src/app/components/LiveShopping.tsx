import { motion } from 'motion/react';
import { Radio, Users, Eye, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const liveShows = [
  {
    id: 1,
    seller: 'Fashion Queen Accra',
    title: 'Collection Été 2026 - Robes & Accessoires',
    viewers: 2847,
    image: 'https://images.unsplash.com/photo-1758611972971-1c8b9c6d7822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZW50cmVwcmVuZXVyJTIwcGhvbmV8ZW58MXx8fHwxNzY5MTc1OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '25:34',
    products: 12,
  },
  {
    id: 2,
    seller: 'BeautyPro Lagos',
    title: 'Maquillage & Soins - Démonstration Live',
    viewers: 1923,
    image: 'https://images.unsplash.com/photo-1614697493802-5b43f769882f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhdXR5JTIwbWFrZXVwfGVufDF8fHx8MTc2OTE3NTk3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '18:12',
    products: 8,
  },
  {
    id: 3,
    seller: 'Luxury Resale Dakar',
    title: 'Sacs & Chaussures de Luxe - Authentiques',
    viewers: 3421,
    image: 'https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYW5kYmFnfGVufDF8fHx8MTY5MTY0MzU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '42:56',
    products: 15,
  },
];

export function LiveShopping() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm mb-4">
            <Radio className="w-4 h-4 animate-pulse" />
            <span className="font-semibold">EN DIRECT MAINTENANT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Live Shopping
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Rejoignez nos vendeurs en direct, posez vos questions en temps réel et achetez instantanément
          </p>
        </div>

        {/* Live Shows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveShows.map((show, index) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={show.image}
                  alt={show.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Live Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white rounded-full text-sm font-semibold">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>EN DIRECT</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                  {show.duration}
                </div>

                {/* Viewers Count */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white rounded-full text-sm">
                  <Eye className="w-4 h-4" />
                  <span>{show.viewers.toLocaleString()}</span>
                </div>

                {/* Products Count */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white rounded-full text-sm">
                  <ShoppingBag className="w-4 h-4" />
                  <span>{show.products} articles</span>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{show.seller}</span>
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center ml-auto">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 mb-4 line-clamp-2">
                  {show.title}
                </h3>

                <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold">
                  Rejoindre le Live
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-emerald-300 text-gray-900 rounded-xl hover:bg-emerald-50 transition-all">
            <Radio className="w-5 h-5 text-emerald-600" />
            <span>Voir tous les Lives</span>
          </button>
        </div>
      </div>
    </section>
  );
}
