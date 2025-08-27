import React from 'react';
import ServiceHero from '../components/Services/ServiceHero';
import Services from '../components/Services/ServicesSection';

const ServicesPage = () => {
  return (
    <>
      <ServiceHero />
      
      {/* Add id here for scrolling */}
      <div id="services-section">
        <Services />
      </div>
    </>
  );
};

export default ServicesPage;
