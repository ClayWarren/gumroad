import React from 'react';

interface OnboardingPageProps {
  children: React.ReactNode;
}

const OnboardingPage: React.FC<OnboardingPageProps> = ({ children }) => {
  return (
    <div className="onboarding-page">
      {children}
    </div>
  );
};

export default OnboardingPage;