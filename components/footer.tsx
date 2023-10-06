import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-4">
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