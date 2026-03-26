import React from 'react';
import PrivacyPolicyBody from '@/components/PrivacyPolicyBody';
import { PRIVACY_POLICY_TEXT } from '@/lib/privacyPolicy';

export const PrivacyContentSection: React.FC = () => {
  return (
    <section className="section-shell py-8">
      <h1 className="page-title mb-8">{PRIVACY_POLICY_TEXT.title}</h1>
      <div className="content-card p-8">
        <PrivacyPolicyBody />
      </div>
    </section>
  );
};

export default PrivacyContentSection;
