import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { CreditCard, ArrowRight, BarChart3 } from 'lucide-react';

const Hero = () => {
  const cardAnimation = useSpring({
    from: { transform: 'translateY(100px) rotate(10deg)', opacity: 0 },
    to: { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
    config: { tension: 100, friction: 10 },
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-emerald-900 to-emerald-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Secure Your<br />
              Fintech Success<br />
              For The Future
            </h1>
            <p className="text-emerald-100 text-lg mb-8">
              We are at the forefront of revolutionizing the financial services landscape, offering smart fintech solutions that empower businesses to thrive in the digital economy.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 text-emerald-900 px-8 py-4 rounded-full font-semibold flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <div className="relative">
            <animated.div style={cardAnimation} className="relative z-10">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <CreditCard className="w-10 h-10 text-emerald-600" />
                  <BarChart3 className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-emerald-100 rounded-full w-3/4"></div>
                  <div className="h-4 bg-emerald-100 rounded-full w-1/2"></div>
                  <div className="mt-8">
                    <div className="text-3xl font-bold text-emerald-800">Financial Freedom</div>
                    <div className="text-sm text-emerald-600 mt-1">Made Easy</div>
                  </div>
                </div>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;