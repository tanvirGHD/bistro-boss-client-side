import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral py-4">
      <footer className="footer  text-neutral-content p-10 flex flex-col md:flex-row justify-between items-center">
        <aside className="text-center md:text-left">
          <p className="mt-4">
            <strong>ACME Industries Ltd.</strong>
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className="mt-6 md:mt-0">
          <h6 className="footer-title text-lg mb-4">Social</h6>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-neutral-content hover:text-blue-500"
            >
              <img
                src="https://img.icons8.com/fluency/48/facebook-new.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-neutral-content hover:text-blue-400"
            >
              <img
                src="https://img.icons8.com/fluency/48/twitter.png"
                alt="Twitter"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-neutral-content hover:text-pink-500"
            >
              <img
                src="https://img.icons8.com/fluency/48/instagram-new.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-content hover:text-blue-700"
            >
              <img
                src="https://img.icons8.com/fluency/48/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>
          </div>
        </nav>
      </footer>
        <p className="text-center text-white">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
    </div>
  );
};

export default Footer;
