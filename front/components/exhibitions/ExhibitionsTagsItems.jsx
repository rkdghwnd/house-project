import React from 'react';
import ExhibitionsGrid3Items from './ExhibitionsGrid3Items';

const ExhibitionsTagsItems = () => {
  return (
    <section className="exhibitions-tags-items">
      <div className="exhibitions-tags-items-title-box">
        <span>추천</span>
      </div>
      <ExhibitionsGrid3Items />
      <ExhibitionsGrid3Items />
      <ExhibitionsGrid3Items />
      <ExhibitionsGrid3Items />
    </section>
  );
};

export default ExhibitionsTagsItems;
