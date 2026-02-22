import { ProductCard } from '@/app/components/ProductCard';
import { ChevronRight } from 'lucide-react';

const featuredProducts = [
  {
    image: 'https://images.unsplash.com/photo-1508418717103-8b56bcf03360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBmYXNoaW9ufGVufDF8fHx8MTc2OTA5NDI1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Robe Ankara Premium - Modèle Unique',
    price: '45,000',
    seller: 'Aminata Style',
    rating: 4.8,
    reviews: 127,
    verified: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1614697493802-5b43f769882f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhdXR5JTIwbWFrZXVwfGVufDF8fHx8MTc2OTE3NTk3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Kit Maquillage Professionnel - Toutes Peaux',
    price: '32,500',
    seller: 'Beauty Lagos',
    rating: 4.9,
    reviews: 203,
    verified: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYW5kYmFnfGVufDF8fHx8MTc2OTE2NDM1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Sac à Main Cuir Authentique - Édition Limitée',
    price: '85,000',
    seller: 'Luxury Dakar',
    rating: 5.0,
    reviews: 89,
    verified: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzY5MTU0MDM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Bijoux Artisanaux - Collection Royale',
    price: '28,000',
    seller: 'Artisan Abidjan',
    rating: 4.7,
    reviews: 156,
    verified: true,
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Produits en Vedette
            </h2>
            <p className="text-gray-600">
              Découvrez les meilleures offres de nos vendeurs certifiés
            </p>
          </div>
          <button className="hidden sm:flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-emerald-300 hover:text-emerald-600 transition-all">
            <span>Voir tout</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Mobile See All Button */}
        <button className="sm:hidden w-full mt-8 flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-emerald-300 hover:text-emerald-600 transition-all">
          <span>Voir tous les produits</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
