import React from 'react';

export function FloatingLeaf({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 50C20 50 30 20 50 15C70 10 80 30 80 50C80 70 70 80 50 75C30 70 20 50 20 50Z"
        fill="#a8b89e"
        opacity="0.4"
      />
      <path
        d="M50 15C50 15 50 30 50 50C50 70 50 75 50 75"
        stroke="#a8b89e"
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  );
}

export function Sparkle({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        fill="#f4c4d0"
      />
    </svg>
  );
}

export function Wave({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 10C20 5 40 5 60 10C80 15 100 15 120 10C140 5 160 5 180 10L200 10L200 20L0 20Z"
        fill="#f7d5df"
        opacity="0.5"
      />
    </svg>
  );
}

export function Doodle({ type = 'circle', className = '' }: { type?: 'circle' | 'star' | 'heart'; className?: string }) {
  if (type === 'star') {
    return (
      <svg
        viewBox="0 0 50 50"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 5L27.5 20L40 22.5L27.5 25L25 40L22.5 25L10 22.5L22.5 20L25 5Z"
          stroke="#e6b8c3"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    );
  }
  
  if (type === 'heart') {
    return (
      <svg
        viewBox="0 0 50 50"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 42C25 42 8 30 8 18C8 12 12 8 17 8C20 8 23 10 25 13C27 10 30 8 33 8C38 8 42 12 42 18C42 30 25 42 25 42Z"
          stroke="#e6b8c3"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    );
  }
  
  return (
    <svg
      viewBox="0 0 50 50"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="15"
        stroke="#e6b8c3"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export function CuteButton({ 
  children, 
  onClick, 
  variant = 'primary' 
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}) {
  const baseClasses = "relative px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1";
  const variantClasses = variant === 'primary' 
    ? "bg-[#a8b89e] text-white shadow-lg hover:shadow-xl"
    : "bg-white text-[#a8b89e] border-2 border-[#a8b89e] shadow-md hover:shadow-lg";
  
  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      <span className="relative z-10">{children}</span>
      <Sparkle className="absolute -top-2 -right-2 w-4 h-4" />
      <Sparkle className="absolute -bottom-1 -left-1 w-3 h-3" />
    </button>
  );
}

export function SectionFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Doodle type="star" className="absolute -top-4 -left-4 w-8 h-8 opacity-40" />
      <Doodle type="circle" className="absolute -bottom-4 -right-4 w-10 h-10 opacity-40" />
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#f4c4d0]/40 shadow-xl">
        {children}
      </div>
    </div>
  );
}