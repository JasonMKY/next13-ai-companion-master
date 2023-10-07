import React from 'react';
import ReactMarkdown from 'react-markdown';

const TermsOfService = () => {
  const markdownContent = `# Terms of Service for Roleplaypals.fun

  **Last updated:** October 7, 2023
  
  Please read these Terms of Service ("Terms") carefully before using Roleplaypals.fun (the "Website") operated by [Your Company Name] ("us," "we," or "our").
  
  By accessing or using the Website, you agree to comply with and be bound by these Terms. If you disagree with any part of the Terms, please do not use our Website.
  
  ## 1. Use of the Website
  
  ### 1.1. Eligibility
  
  You must be at least 13 years old to use the Website. By using the Website, you represent and warrant that you are at least 13 years old.
  
  ### 1.2. User Account
  
  You may need to create an account to access certain features of the Website. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use or security breaches.
  
  ## 2. Content and User Conduct
  
  ### 2.1. User-Generated Content
  
  You are solely responsible for any content you submit, including text, images, and other materials ("User Content"). You grant us a non-exclusive, worldwide, royalty-free license to use, modify, and display your User Content for the purpose of providing and improving the Website.
  
  ### 2.2. Prohibited Conduct
  
  You agree not to engage in any of the following activities:
  
  - Violating any applicable laws or regulations.
  - Harassing, threatening, or harming others.
  - Uploading or distributing malicious software or harmful content.
  - Impersonating another person or entity.
  - Attempting to gain unauthorized access to the Website or its systems.
  
  ## 3. Intellectual Property
  
  ### 3.1. Ownership
  
  All content on the Website, including text, graphics, logos, and images, is the intellectual property of RoleplayPals and is protected by copyright and other intellectual property laws.
  
  ### 3.2. Limited License
  
  We grant you a limited, non-exclusive, revocable license to access and use the Website for personal, non-commercial purposes. You may not reproduce, distribute, or create derivative works based on our content without our express consent.
  
  ## 4. Privacy
  
  ### 4.1. Privacy Policy
  
  Your use of the Website is also governed by our Privacy Policy.
  
  ## 5. Termination
  
  ### 5.1. Termination
  
  We reserve the right to terminate or suspend your access to the Website at our discretion, without notice, for any reason, including a breach of these Terms.
  
  ## 6. Disclaimer of Warranties
  
  ### 6.1. No Warranty
  
  The Website is provided "as is" and "as available" without any warranties of any kind, whether express or implied. We make no warranties regarding the accuracy, reliability, or availability of the Website.
  
  ## 7. Limitation of Liability
  
  ### 7.1. Limitation of Liability
  
  To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
  
  ## 8. Governing Law
  
  ### 8.1. Governing Law
  
  These Terms are governed by and construed in accordance with the laws of United States.
  
  ## 9. Contact Information
  
  ### 9.1. Contact Us
  
  If you have any questions or concerns about these Terms, please contact us at jmck38845@gmail.com.
  
  By using Roleplaypals.fun, you agree to these Terms of Service. If you do not agree with these Terms, please do not use our Website.


  `;

  return (
    <div className="h-full p-4 space-y-2">
      <h3 className="text-lg font-medium">Terms of Service</h3>
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

export default TermsOfService;
