import React from 'react';

interface DiscoverLayoutProps {
  children: React.ReactNode;
}

const DiscoverLayout: React.FC<DiscoverLayoutProps> = ({ children }) => {
  return (
    <div className="discover">
      {children}
    </div>
  );
};

export default DiscoverLayout;