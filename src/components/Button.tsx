import React from 'react';
import './Button.css';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  return (
    <button 
      className={`v-button v-button-${variant} v-button-${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
