import { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FasterCapitalBanner } from '@/app/components/FasterCapitalBanner';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* FasterCapital Banner */}
      <FasterCapitalBanner />
      
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Brumerie</h1>
              <p className="text-xs text-gray-500">Connecté pour acheter</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Marketplace
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Live Shopping
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Vendeurs
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Comment ça marche
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-emerald-600 transition-colors">
              <Search className="w-5 h-5" />
              <span className="hidden lg:inline">Rechercher</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-emerald-600 transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden lg:inline">Panier</span>
            </button>
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all">
              <User className="w-5 h-5" />
              <span>Connexion</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <nav className="flex flex-col px-4 py-4 gap-3">
              <a href="#" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors">
                Marketplace
              </a>
              <a href="#" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors">
                Live Shopping
              </a>
              <a href="#" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors">
                Vendeurs
              </a>
              <a href="#" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors">
                Comment ça marche
              </a>
              <button className="mt-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all">
                Connexion
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </div>
  );
}
