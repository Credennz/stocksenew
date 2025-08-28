import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  ArrowRight,
  Home
} from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export const Footer = () => {
  const { openGetStarted } = useModal();
  const [email, setEmail] = React.useState('');

  const SOCIAL_LINKS = [
  { icon: Twitter, url: "https://x.com/stockse_" },
  { icon: Instagram, url: "https://www.instagram.com/stockse.ind" },
  { icon: Youtube, url: "https://www.youtube.com/@stockse_ind" },
];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">StockSe</h3>
            <p className="text-white/70">
              Empowering traders with cutting-edge tools and strategies for market success.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@stockse.in" className="flex items-center gap-2 text-white/70 hover:text-white">
                <Mail className="w-4 h-4" /> hello@stockse.in
              </a>
              <div className="space-y-1">
                <a href="tel:+917008013957" className="flex items-center gap-2 text-white/70 hover:text-white">
                  <Phone className="w-4 h-4" /> +91 7008013957
                </a>
                <a href="tel:+917978013108" className="flex items-center gap-2 text-white/70 hover:text-white pl-6">
                  +91 7978013108
                </a>
                <a href="tel:+917008014367" className="flex items-center gap-2 text-white/70 hover:text-white pl-6">
                  +91 7008014367
                </a>
              </div>
              <div className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Patia, Bhubaneswar, Odisha, 751024</span>
              </div>
            </div>
          </div>

          {/* Rest of the footer content remains unchanged */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[{title :'About Us',link : 'about'},
              {title :'Performance',link : 'performance'},
              {title :'Strategies',link : 'strategies'},
              {title :'Blog',link : '#'},
              {title :'Terms & Conditions',link : '#'},
              {title :'Privacy Policy',link : '#'}].map((k,index) => (
                <li key={index}>
                  <a href={k.link} className="text-white/70 hover:text-white">{k.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Algorithmic Trading',
                'Investment Management',
                'Trading Solutions',
                'Portfolio Analysis',
                'Wealth Management'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/70 hover:text-white">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/70">
              © 2024 StockSe. All rights reserved.
            </div>
            <div className="flex gap-4">
      {SOCIAL_LINKS.map(({ icon: Icon, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
          </div>
        </div>
      </div>
    </footer>
  );
};