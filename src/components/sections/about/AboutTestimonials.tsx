import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "StockSe's algorithmic trading solutions have transformed our investment strategy. The results speak for themselves.",
    author: "Milan Danga",
    position: "Portfolio Manager",
    company: "Capital Investments"
  },
  {
    content: "The team's expertise and dedication to client success is unmatched. They've helped us achieve consistent returns.",
    author: "Suraj Mishra",
    position: "Head Trader",
    company: "Global Trading Co."
  }
];

export const AboutTestimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Client Success Stories</h2>
          <p className="text-primary-dark/70 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience with our solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-primary/5 rounded-xl p-8"
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-lg text-primary-dark mb-6">{testimonial.content}</p>
              <div>
                <div className="font-semibold text-primary">{testimonial.author}</div>
                <div className="text-sm text-primary-dark/70">
                  {testimonial.position} • {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};