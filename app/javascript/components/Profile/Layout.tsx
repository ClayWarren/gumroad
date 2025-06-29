import React from 'react';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div className="profile grid grid-rows-[auto_1fr] min-h-full">
      {children}
    </div>
  );
};

export default ProfileLayout;