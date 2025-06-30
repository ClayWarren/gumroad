import React from 'react';

import { CreatorProfile } from "$app/parsers/profile";

interface ProfileLayoutProps {
  children: React.ReactNode;
  creatorProfile: CreatorProfile;
  hideFollowForm?: boolean;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div className="profile grid grid-rows-[auto_1fr] min-h-full">
      {children}
    </div>
  );
};

export default ProfileLayout;