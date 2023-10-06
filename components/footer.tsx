import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="fixed max-w-screen-2xl w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms-of-service" className="text-gray-600 hover:text-gray-900">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;