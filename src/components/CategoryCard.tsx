import React from 'react';
import './style/CategoryCard.css';

interface CategoryCardProps {
  title: string;
  image?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image }) => {
  return (
    <div
      className={`category-card position-relative overflow-hidden${image ? ' has-bg' : ''}`}
      style={image ? { ['--category-bg' as any]: `url(${image})` } : {}}
    >
      <span className="category-title position-absolute">{title}</span>
    </div>
  );
};

export default CategoryCard;
