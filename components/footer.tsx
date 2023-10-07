import React from "react";

const Footer = () => {
  const style = {
    marginLeft: "5in", // Set the left margin to 3 inches
  };

  return (
    <footer className="fixed bottom-0 w-full bg-background text-foreground" style={style}>
      <div className="container mx-auto py-10">
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
              Privay Policy
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