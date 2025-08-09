import React from 'react';

export type ModernCardVariant = 'default' | 'glass' | 'gradient';

export interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: ModernCardVariant;
  animate?: boolean;
  onClick?: () => void;
}

/**
 * ModernCard renders a visually elevated container with optional glass or gradient styling.
 * This component is purely presentational and does not affect backend logic.
 */
export function ModernCard({
  children,
  className = '',
  variant = 'default',
  animate = false,
  onClick,
}: ModernCardProps) {
  const baseClasses = 'rounded-xl border transition-all duration-300';
  const variantClasses: Record<ModernCardVariant, string> = {
    default: 'bg-white shadow-lg hover:shadow-xl border-gray-100',
    glass: 'glass-card hover:shadow-2xl',
    gradient: 'bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl border-transparent',
  };

  const animationClasses = animate ? 'animate-subtle-pop' : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
    >
      {children}
    </div>
  );
}

export default ModernCard;


