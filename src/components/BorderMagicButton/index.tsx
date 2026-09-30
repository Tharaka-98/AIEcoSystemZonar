import React from 'react';

interface BorderMagicButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  isLabel?: boolean;
}

export default function BorderMagicButton({ 
  children = "Border Magic", 
  onClick, 
  className = '',
  href,
  target,
  rel = href && target === '_blank' ? 'noopener noreferrer' : undefined,
  isLabel = false,
  ...props
}: BorderMagicButtonProps) {
  // Common classes for all variants
  const commonClasses = {
    wrapper: `relative inline-flex h-14 overflow-hidden rounded-[15px] p-px p-py ${!isLabel ? 'hover:before:opacity-100' : ''}`,
    animation: `absolute inset-[-1000%] ${isLabel ? 'animate-[spin_2s_linear_infinite]' : 'group-hover:animate-[spin_2s_linear_infinite]'} bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF14_0%,white_50%,#FFFFFF14_100%)] ${!isLabel ? ' hover:bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF14_0%,white_50%,#FFFFFF14_100%)] hover:animate-[spin_2s_linear_infinite] ' : ''}`,
    content: `inline-flex h-full w-full cursor-pointer font-poppins items-center justify-center rounded-[15px] text-md font-medium backdrop-blur-3xl ${className}`
  };

  // If href is provided, render an anchor tag
  if (href) {
    return (
      <a 
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={`group ${commonClasses.wrapper}`}
        {...props}
      >
        <span className={commonClasses.animation} />
        <span className={commonClasses.content}>
          {children}
        </span>
      </a>
    );
  }

  // Otherwise, render a div
  return (
    <div 
      onClick={onClick}
      className={`group ${commonClasses.wrapper}`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
      {...props}
    >
      <span className={commonClasses.animation} />
      <span className={commonClasses.content}>
        {children}
      </span>
    </div>
  );
}