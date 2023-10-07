import React from 'react';
import ReactMarkdown from 'react-markdown';

const PrivacyPolicy = () => {
  const markdownContent = `
  # Privacy Policy for Roleplaypals.fun

  **Last updated:** October 7, 2023

  ## 1. Introduction

  Welcome to Roleplaypals.fun (the "Website"). At Roleplaypals.fun, we respect your privacy and are committed to protecting your personal information. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your information when you visit our website.

  By accessing or using Roleplaypals.fun, you consent to the practices described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use our website.

  ## 2. Information We Collect

  ### 2.1. Personal Information

  We may collect personal information that you voluntarily provide to us when you interact with our website. This information may include, but is not limited to:

  - Name
  - Email address
  - Contact information

  ### 2.2. Usage Information

  We may also automatically collect information about your usage of our website. This information may include:

  - IP address
  - Browser type
  - Operating system
  - Referring URLs
  - Clickstream data

  ## 3. How We Use Your Information

  We may use the information we collect for various purposes, including but not limited to:

  - Providing and improving our website and services
  - Responding to your inquiries and requests
  - Sending you updates and promotional materials
  - Analyzing website usage and trends
  - Enforcing our terms and policies

  ## 4. Disclosure of Your Information

  We may share your information with third parties under the following circumstances:

  - With your consent
  - To comply with legal obligations
  - To protect our rights, privacy, safety, or property
  - In connection with a business transfer or sale

  ## 5. Cookies and Tracking Technologies

  Roleplaypals.fun may use cookies and similar tracking technologies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.

  ## 6. Third-Party Links

  Our website may contain links to third-party websites. We have no control over the content or privacy practices of these websites and are not responsible for their practices. We encourage you to review the privacy policies of these third-party sites.

  ## 7. Security

  We take reasonable steps to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.

  ## 8. Children's Privacy

  Roleplaypals.fun is not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children. If you believe we have collected information from a child, please contact us immediately.

  ## 9. Changes to this Privacy Policy

  We may update this Privacy Policy from time to time. The revised policy will be posted on this page, and the "Last updated" date will be updated accordingly. Please review this Privacy Policy periodically to stay informed about our practices.

  ## 10. Contact Us

  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at jmck38845@gmail.com

  
  `;

  return (
    <div className="h-full p-4 space-y-2">
      <h3 className="text-lg font-medium">Privacy Policy</h3>
      <div className="text-muted-foreground text-sm">
        <div className="privacy-policy">
            <div className="flex flex-col gap-2">
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
