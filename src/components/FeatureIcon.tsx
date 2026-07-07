import React from 'react';
import './FeatureIcon.css';

export function FeatureIcon({ icon, className = '' }) {
  return (
    <div className={`v-feature-icon ${className}`}>
      {icon}
    </div>
  );
}
