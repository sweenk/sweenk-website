import React from 'react';

interface CheckmarkListProps {
  items: string[];
  className?: string;
}

const CheckmarkList: React.FC<CheckmarkListProps> = ({ items, className = '' }) => {
  return (
    <ul className={`space-y-2 text-gray-700 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <i className="bi bi-check-lg text-green-500 mt-1"></i>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default CheckmarkList;