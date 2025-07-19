import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  mobile,
  active,
  onClick 
}) => {
  const baseStyles = "text-white transition-colors duration-200";
  const mobileStyles = "block px-3 py-2 text-base font-medium";
  const desktopStyles = "text-sm font-medium";
  const activeStyles = active ? "text-white" : "text-white/80 hover:text-white";

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${mobile ? mobileStyles : desktopStyles} ${activeStyles}`}
    >
      {children}
    </button>
  );
};