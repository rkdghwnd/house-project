import React from 'react';
import { Link } from 'react-router-dom';
import { premiumCategorys } from '../../hooks/premium';
import shortid from 'shortid';

const PremiumCategory = () => {
  return (
    <div className="premium-category">
      {premiumCategorys.map(({ href, src, alt }) => {
        return (
          <Link key={shortid.generate()} to={href}>
            <img src={src} alt={alt} />
          </Link>
        );
      })}
    </div>
  );
};

export default PremiumCategory;
