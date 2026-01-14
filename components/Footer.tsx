import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-bold text-brand-500">Jeevadeepti</h3>
            <p className="text-gray-400 text-sm mt-1">Lighting Lives through Blood</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">An Initiative by</p>
            <p className="text-md font-semibold font-malayalam">Yuvadeepti SMYM</p>
            <p className="text-xs text-gray-500 mt-2">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
