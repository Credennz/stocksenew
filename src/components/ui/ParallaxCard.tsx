import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { CreditCard, BarChart3 } from 'lucide-react';

export const ParallaxCard = () => {
  const cardAnimation = useSpring({
    from: { transform: 'translateY(100px) rotate(10deg)', opacity: 0 },
    to: { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
    config: { tension: 100, friction: 10 },
  });

  return (
    <animated.div style={cardAnimation} className="relative z-10">
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <CreditCard className="w-10 h-10 text-purple-300" />
          <BarChart3 className="w-8 h-8 text-purple-300" />
        </div>
        <div className="space-y-4">
          <div className="h-4 bg-white/20 rounded-full w-3/4"></div>
          <div className="h-4 bg-white/20 rounded-full w-1/2"></div>
          <div className="mt-8">
            <div className="text-3xl font-bold text-white">$3,403.00</div>
            <div className="text-sm text-purple-200 mt-1">Available Balance</div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};