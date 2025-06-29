import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1">
      {children}
    </div>
  );
};

export default MainLayout;
