import React, { useEffect } from 'react';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: '120px 20px 80px', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '16px', boxShadow: 'var(--shadow-md)' }}>
        <h1 style={{ color: 'var(--color-primary)', marginBottom: '24px', fontSize: '2.5rem' }}>Privacy Policy</h1>
        <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '16px' }}>
          Welcome to Elevare Public School. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our website.
        </p>
        
        <h3 style={{ color: 'var(--color-primary)', marginTop: '32px', marginBottom: '12px' }}>1. Information We Collect</h3>
        <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '16px' }}>
          We may collect personal information such as your name, email address, phone number, and student details when you submit inquiries, application forms, or subscribe to our newsletters.
        </p>

        <h3 style={{ color: 'var(--color-primary)', marginTop: '32px', marginBottom: '12px' }}>2. How We Use Your Information</h3>
        <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '16px' }}>
          The information collected is used solely for admission processing, school-parent communication, sharing important updates, and improving our online services. We do not sell or share your data with third parties without your explicit consent, except as required by law.
        </p>

        <h3 style={{ color: 'var(--color-primary)', marginTop: '32px', marginBottom: '12px' }}>3. Data Security</h3>
        <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '16px' }}>
          We implement standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, please be aware that no transmission over the internet is completely secure.
        </p>

        <h3 style={{ color: 'var(--color-primary)', marginTop: '32px', marginBottom: '12px' }}>4. Contact Us</h3>
        <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '16px' }}>
          If you have any questions or concerns regarding this Privacy Policy, please contact our administrative office at admissions@elevarepublicschool.edu.in.
        </p>
        
        <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginTop: '40px', borderTop: '1px solid #E2E8F0', paddingTop: '20px' }}>
          Last updated: August 2026
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
