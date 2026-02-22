import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  seller: string;
  rating: number;
  reviews: number;
  verified: boolean;
}

export function ProductCard({ image, title, price, seller, rating, reviews, verified }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 group"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-50 transition-colors">
            <Heart className="w-5 h-5 text-gray-700" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-50 transition-colors">
            <Eye className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-semibold rounded-full">
          Tendance
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2 flex-1">
            {title}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            ({reviews})
          </span>
        </div>

        {/* Seller */}
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
          <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            {seller.charAt(0)}
          </div>
          <span className="text-sm text-gray-600">{seller}</span>
          {verified && (
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">{price}</p>
            <p className="text-xs text-gray-500">CFA</p>
          </div>
          <button className="p-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all group-hover:scale-110">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
