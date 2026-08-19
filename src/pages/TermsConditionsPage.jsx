import React, { useEffect } from 'react';

const TermsConditionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: '120px 20px 80px', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '16px', boxShadow: 'var(--shadow-md)' }}>
        <h1 style={{ color: 'var(--color-primary)', marginBottom: '24px', fontSize: '2.5rem' }}>Terms & Conditions</h1>
        <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '16px' }}>
          By accessing and using the Elevare Public School website, you accept and agree to be bound by the terms and provisions of this agreement.
        </p>
        
        <h3 style={{ color: 'var(--color-primary)', marginTop: '32px', marginBottom: '12px' }}>1. Website Usage</h3>
        <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '16px' }}>
          The content of this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
        </p>

        <h3 style={{ color: 'var(--color-primary)', marginTop: '32px', marginBottom: '12px' }}>2. Intellectual Property</h3>
        <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '16px' }}>
          All materials on this website, including but not limited to text, images, logos, and design, are owned by or licensed to Elevare Public School. Reproduction is strictly prohibited without prior written consent.
        </p>

        <h3 style={{ color: 'var(--color-primary)', marginTop: '32px', marginBottom: '12px' }}>3. Admission and Fees</h3>
        <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '16px' }}>
          Submission of an online inquiry or application does not guarantee admission. Admissions are subject to seat availability, eligibility criteria, and management approval. All fee payments made through the portal (if applicable) are subject to the school's fee policy.
        </p>

        <h3 style={{ color: 'var(--color-primary)', marginTop: '32px', marginBottom: '12px' }}>4. External Links</h3>
        <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '16px' }}>
          From time to time, this website may include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
        </p>
        
        <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginTop: '40px', borderTop: '1px solid #E2E8F0', paddingTop: '20px' }}>
          Last updated: August 2026
        </p>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
