import '@/app/components/header/header.scss';
import MainNav from '../main-nav/main-nav';
import React, { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  paragraph?: string;
  children?: ReactNode;
}

export default function Header({ title, paragraph, children }: HeaderProps) {
  return (
    <header className="main-header">
      <section>
        {title && <h1>{title}</h1>}
        {paragraph && <p>{paragraph}</p>}
        {children}
      </section>
    </header>
  );
}
