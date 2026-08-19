import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Academics from '../components/Academics';
import Facilities from '../components/Facilities';
import Admissions from '../components/Admissions';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Academics />
      <Facilities />
      <Admissions />
    </main>
  );
};

export default Home;
