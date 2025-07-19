import React from 'react';

interface SlidingPartnersProps {
  partners: string[];
}

export const SlidingPartners: React.FC<SlidingPartnersProps> = ({ partners }) => {
  return (
    <div className="relative overflow-hidden h-8">
      <div className="flex gap-8 animate-scroll whitespace-nowrap">
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={`${partner}-${index}`}
            className="flex-shrink-0 text-white font-bold"
          >
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
};