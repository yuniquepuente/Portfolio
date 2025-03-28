import React from "react";
const Footer = () => {
  return (
    <footer className="w-full py-8 mt-20 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full mb-4 md:mb-0">
          
            <div className="flex justify-between">
              <p className="font-serif text-sm tracking-wider">
                Art by Yunique Puente
              </p>
              <p className="font-serif text-sm tracking-wide">
                Developed by Dante Vargas
              </p>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
