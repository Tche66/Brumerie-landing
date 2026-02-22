import { Shield, Facebook, Twitter, Instagram, Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Brumerie</h3>
                <p className="text-xs text-gray-400">Connecté pour acheter</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              La première plateforme de social commerce sécurisé dédiée à l'Afrique de l'Ouest. Acceptée dans le programme d'accélération de FasterCapital.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a 
                href="https://www.linkedin.com/company/brumerie/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.crunchbase.com/organization/brumerie" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors text-xs font-bold"
                title="Crunchbase"
              >
                CB
              </a>
              <a 
                href="https://fastercapital.com/incubation-pending/brumerie.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors text-xs font-bold"
                title="FasterCapital"
              >
                FC
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:brumerieciv@gmail.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h4 className="font-bold text-lg mb-4">Marketplace</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Mode Femme</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Mode Homme</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Beauté & Cosmétiques</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Accessoires</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Articles de Luxe</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Comment ça marche</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Guide vendeur</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Politique de retour</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Nous contacter</a></li>
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h4 className="font-bold text-lg mb-4">À propos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Notre mission</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Carrières</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Brumerie. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">Termes</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
