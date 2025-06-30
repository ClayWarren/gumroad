import React from 'react';

interface DiscoverLayoutProps {
  children: React.ReactNode;
}

const DiscoverLayout: React.FC<DiscoverLayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      {children}
    </div>
  );
};

export default DiscoverLayout;