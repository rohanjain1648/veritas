import React from 'react';
import './GlassCard.css';

export function GlassCard({ children, className = '', hover = false, ...props }) {
  return (
    <div 
      className={`glass-panel v-card ${hover ? 'v-card-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
