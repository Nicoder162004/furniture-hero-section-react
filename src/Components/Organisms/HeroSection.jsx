// src/components/organisms/HeroSection.jsx
import React from 'react';
import HeroTextBlock from '../Molecules/HeroTextBlock';
import FeatureCard from '../Molecules/FeatureCard';
import image from '../../assets/images/image.png';

const features = [
  {
    title: 'Authentic Craftsmanship',
    description: 'Celebrating the beauty of skilled artisan work.',
    icon: '🪑'
  },
  {
    title: 'Personalized Service',
    description: 'Committed to making your furniture shopping seamless.',
    icon: '🛠️'
  },
  {
    title: 'Sustainable Practices',
    description: 'Advocating green living through eco-friendly furniture.',
    icon: '🌿'
  },
  {
    title: 'Innovative Design',
    description: 'Creating pieces that fuse style and functionality effortlessly.',
    icon: '🧠'
  },
];

const HeroSection = () => {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-12 justify-between">
        <HeroTextBlock />
        <img
          src={image}
          alt="Comfort Chair"
          className="w-[45%] h-[45vh] rounded-xl"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
        {features.map((item, i) => (
          <FeatureCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
