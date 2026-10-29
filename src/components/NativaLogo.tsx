import React from 'react';

interface NativaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'forest' | 'light' | 'white';
}

export const NativaLogo: React.FC<NativaLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'forest'
}) => {
  const heights = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20'
  };

  const variantStyles = {
    forest: '',
    light: 'brightness-110 drop-shadow-xs',
    white: 'brightness-0 invert'
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/assets/aistudio/Mesa_de_trabajo_2_8533f3e9.png"
        alt="NATIVA"
        className={`${heights[size]} w-auto object-contain transition-all duration-200 ${variantStyles[variant]}`}
        loading="eager"
      />
    </div>
  );
};
