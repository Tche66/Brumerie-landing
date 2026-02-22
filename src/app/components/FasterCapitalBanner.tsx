import { motion } from 'motion/react';
import { Rocket, TrendingUp } from 'lucide-react';

export function FasterCapitalBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-2.5 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-center text-xs sm:text-sm">
          <div className="flex items-center gap-1.5">
            <Rocket className="w-4 h-4 animate-bounce" />
            <span className="font-bold">🎉 ACTUALITÉ</span>
          </div>
          <p className="leading-tight">
            Brumerie a été acceptée dans le programme d'accélération de{' '}
            <a
              href="https://fastercapital.com/incubation-pending/brumerie.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:text-yellow-300 transition-colors"
            >
              FasterCapital
            </a>{' '}
            et recherche un capital de <span className="font-bold text-yellow-300">+150 000$</span>
          </p>
          <TrendingUp className="w-4 h-4 hidden sm:block" />
        </div>
      </div>
    </motion.div>
  );
}
