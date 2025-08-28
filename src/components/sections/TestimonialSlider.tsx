import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The algorithmic trading solutions have completely transformed our trading strategy. The results have been exceptional.",
    author: "Umang Paraikh",
    position: "Senior Trader",
    company: "Trading Firm"
  },
  {
    id: 2,
    content: "Their portfolio management tools provide incredible insights. It's made our decision-making process much more efficient.",
    author: "Prajyolita Dwibedi",
    position: "Investment Manager",
    company: "Asset Management Co."
  },
  {
    id: 3,
    content: "The wealth management services are top-notch. Our portfolio has seen consistent growth since we started working with them.",
    author: "Sunil Jadav",
    position: "Private Client",
    company: "Trading Firm"
  }
];

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-primary-dark/70">
            Hear from our satisfied clients about their experience with our solutions
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="mb-6 inline-flex p-3 bg-primary/10 rounded-full">
                <Quote className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xl text-primary-dark mb-8">
                "{testimonials[currentIndex].content}"
              </p>
              <div>
                <p className="font-semibold text-primary">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-sm text-primary-dark/70">
                  {testimonials[currentIndex].position} • {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-6' : 'bg-primary/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};