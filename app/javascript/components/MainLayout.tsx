import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  nav?: React.ReactNode;
  header?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, nav, header }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1">
      {nav}
      {header}
      {children}
    </div>
  );
};

export default MainLayout;
