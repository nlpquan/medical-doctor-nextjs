'use client'

import React from 'react';
import StatItem from './stats/StatItem';

const Stats: React.FC = () => {
  return (
    <section className="stats section">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-y-6 xl:flex-row">
          <StatItem value="+100K" description="Doctor Listed" delay={0.2} />
          <StatItem value="16" description="Specialty Distributions" delay={0.4} />
          <StatItem value="60%" description="U.S. Coverage" delay={0.6} />
          <StatItem value="~10" description="Years Experience" delay={0.8} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
