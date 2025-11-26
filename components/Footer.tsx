import React from "react";

const Footer = () => {
  return (
    <footer className="pb-5  ">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Rabiyul Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
