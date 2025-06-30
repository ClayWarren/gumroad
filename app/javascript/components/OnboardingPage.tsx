import React from 'react';

interface OnboardingPageProps {
  children: React.ReactNode;
}

const OnboardingPage: React.FC<OnboardingPageProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {children}
    </div>
  );
};

export default OnboardingPage;