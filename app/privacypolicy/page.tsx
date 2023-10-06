import React from 'react';
import ReactMarkdown from 'react-markdown';

const PrivacyPolicy = () => {
  const markdownText = 
  `# Privacy Policy
  
  **Last Updated:** October 8, 2023
  
  Welcome to RolePlayPals.fun (the "Website"). At RolePlayPals.fun, we take your privacy seriously and are committed to safeguarding your personal information. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you visit our Website or use our services.
  
  By accessing or using RolePlayPals.fun, you agree to the practices described in this Privacy Policy. If you do not agree with our practices, please do not use our Website or services.
  
  ## 1. Information We Collect
  
  ### 1.1. Information You Provide
  
  We collect personal information that you provide directly to us when using our Website or services. This may include, but is not limited to, your name, email address, and any other information you provide when contacting us or signing up for an account.
  
  ### 1.2. Information We Automatically Collect
  
  When you visit our Website, we may automatically collect certain information about your device and usage patterns, including your IP address, browser type, operating system, and the pages you view. We may also collect information about how you interact with our Website, such as the date and time of your visit and the actions you take while on our Website.
  
  ### 1.3. Cookies and Tracking Technologies
  
  We may use cookies and similar tracking technologies to collect information about your online activities and preferences. Cookies are small files that are stored on your computer or mobile device when you visit a website. You can manage your cookie preferences through your browser settings.
  
  ## 2. How We Use Your Information
  
  We may use the information we collect for various purposes, including:
  
  - To Provide and Maintain our Services: We use your information to deliver and maintain our Website and services, including user accounts, customer support, and security.
  
  - To Improve our Services: We analyze usage patterns to improve the functionality and content of our Website and services, as well as to develop new features and offerings.
  
  - To Communicate with You: We may send you emails or other communications related to your use of our Website or services, including updates, notifications, and promotional materials. You can opt out of these communications at any time.
  
  - For Legal Purposes: We may use your information to comply with legal obligations, resolve disputes, and enforce our agreements.
  
  ## 3. How We Share Your Information
  
  We may share your personal information in the following circumstances:
  
  - With Third-Party Service Providers: We may share your information with third-party service providers who help us operate our Website and provide our services.
  
  - With Your Consent: We may share your information with third parties if you provide us with your consent to do so.
  
  - For Legal Reasons: We may disclose your information if required by law, regulation, or legal process, or if we believe it is necessary to protect our rights, property, or safety.
  
  ## 4. Security
  
  We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
  
  ## 5. Children's Privacy
  
  Our Website is not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If you believe that we have inadvertently collected personal information from a child under 13, please contact us, and we will take appropriate steps to delete such information.
  
  ## 6. Changes to this Privacy Policy
  
  We may update this Privacy Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with a revised "Last Updated" date. We encourage you to review this Privacy Policy periodically.
  
  ## 7. Contact Us
  
  If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at jmck38845@gmail.com.
  
  By using RolePlayPals.fun, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.`;

  const style = {
    marginLeft: '0.6in', // Set the left margin to 3 inches
  };
  
  return (
    <div className="privacy-policy" style={style}>
        <div style={{ marginTop: '1in' }}></div> 
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
};

export default PrivacyPolicy;