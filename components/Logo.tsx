
import React from 'react';

/**
 * Logo component for "צמד ברזל"
 * Updated to a placeholder outline as requested by the user.
 */
interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`${className} relative flex items-center justify-center overflow-hidden`}>
      <img 
        src="/assets/logo.png" 
        alt="צמד ברזל" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
