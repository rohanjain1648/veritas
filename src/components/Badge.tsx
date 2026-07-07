import React from 'react';
import './Badge.css';

export function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span className={`v-badge v-badge-${variant} ${className}`}>
      {children}
    </span>
  );
}
