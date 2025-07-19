import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users2 } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Pioneering the Future of Finance
          </h2>
          <p className="text-primary-dark/70 max-w-2xl mx-auto">
            Since our inception, we've been dedicated to revolutionizing financial technology
            with innovative solutions that empower businesses and individuals alike.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {[
            {
              icon: Award,
              title: "Innovation",
              description: "Harnessing data-driven insights and machine learning to redefine how finance works"
            },
            {
              icon: Target,
              title: "Transparency",
              description: "Ensuring clear, honest communication and empowering you with control over your finances"
            },
            {
              icon: Users2,
              title: "Community",
              description: "Creating opportunities for collaboration, education, and growth across all stakeholders"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-full">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-primary-dark/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};