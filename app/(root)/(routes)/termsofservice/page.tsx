import React from 'react';
import ReactMarkdown from 'react-markdown';

const TermsOfService = () => {
  const markdownText = 
  `# Terms of Service (ToS) for RolePlayPals.fun

  **Last Updated:** October 8, 2023
  
  ## 1. Acceptance of Terms
  
  By using RolePlayPals.fun ("the Website"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use the Website.
  
  ## 2. Changes to the Terms
  
  We may revise and update these Terms of Service from time to time. All changes are effective immediately when posted on the Website. Your continued use of the Website after any changes to the Terms constitutes your acceptance of the updated Terms.
  
  ## 3. Use of the Website
  
  ### 3.1. Eligibility
  
  You must be at least 13 years old to use the Website.
  
  ### 3.2. User Accounts
  
  You are responsible for maintaining the security of your account credentials. You agree to provide accurate and complete information when creating an account. You are solely responsible for all activities that occur under your account.
  
  ### 3.3. Prohibited Activities
  
  You agree not to engage in any of the following activities while using the Website:
  
  - Violating any applicable laws or regulations.
  - Impersonating another person or entity.
  - Harassing, intimidating, or threatening others.
  - Posting or transmitting malicious code, viruses, or other harmful content.
  - Collecting or storing personal information of others without their consent.
  
  ## 4. Content and Ownership
  
  ### 4.1. User-Generated Content
  
  The Website may allow users to submit content, including text, images, and other materials ("User Content"). You retain ownership of your User Content, but you grant us a worldwide, royalty-free, and non-exclusive license to use, reproduce, modify, distribute, and display your User Content on the Website.
  
  ### 4.2. Monitoring
  
  We may, but have no obligation to, monitor, edit, or remove User Content that we determine, in our sole discretion, violates these Terms or is otherwise objectionable.
  
  ## 5. Privacy Policy
  
  By using the Website, you agree to our [-Privacy Policy-](http://www.roleplaypals.fun/privacypolicy), which outlines how we collect, use, and disclose your personal information.
  
  ## 6. Termination
  
  We reserve the right to terminate or suspend your account and access to the Website for any reason, without prior notice.
  
  ## 7. Disclaimer of Warranties
  
  The Website is provided "as is" and "as available" without any warranties of any kind, whether express or implied. We do not guarantee the accuracy, reliability, or availability of the Website.
  
  ## 8. Limitation of Liability
  
  To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Website.
  
  ## 9. Governing Law
  
  These Terms of Service are governed by and construed in accordance with the laws of United States.
  
  ## 10. Contact Information
  
  If you have any questions or concerns regarding these Terms of Service, you may contact us at jmck38845@gmail.com.
  `;

  const style = {
    marginLeft: '0.3in', // Set the left margin to 3 inches
  };
  
  return (
    <div className="terms-of-service" style={style}>
        <div style={{ marginTop: '0.3in' }}></div> 
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
};

export default TermsOfService;