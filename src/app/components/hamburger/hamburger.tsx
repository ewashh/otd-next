'use client';

import '@/app/components/hamburger/hamburger.scss';
import { useState, ReactNode } from 'react';

interface HamburgerProps {
  children?: ReactNode;
}

export default function Hamburger({ children }: HamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger" onClick={toggleContent}>
      <div
        className={`hamburger__icon ${isOpen ? 'open' : ''}`}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      {isOpen && (
        <div className="hamburger__content">
          {children}
        </div>
      )}
    </div>
  );
}
