import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, LineChart, Shield } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-6 shadow-lg"
    >
      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-emerald-600" />
      </div>
      <h3 className="text-xl font-semibold text-emerald-900 mb-2">{title}</h3>
      <p className="text-emerald-600">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            Let's Take Your Analytics<br />To The Next Level
          </h2>
          <p className="text-emerald-600 max-w-2xl mx-auto">
            Transform your financial data into actionable insights with our advanced analytics platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Smartphone}
            title="Mobile Banking"
            description="Access your finances anytime, anywhere with our secure mobile platform."
            delay={0.2}
          />
          <FeatureCard
            icon={LineChart}
            title="Smart Analytics"
            description="Make data-driven decisions with real-time financial insights."
            delay={0.4}
          />
          <FeatureCard
            icon={Shield}
            title="Secure Transactions"
            description="Bank with confidence using our advanced security protocols."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;