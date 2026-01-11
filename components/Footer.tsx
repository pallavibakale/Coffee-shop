import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-neutral-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white rounded-sm" />
            <span className="text-white font-semibold tracking-tight text-lg">
              AETHER BREW
            </span>
          </div>
          <p className="text-neutral-500 text-sm max-w-xs">
            Refining the ritual. <br />
            Engineered for clarity, connection, and craft.
          </p>
        </div>

        <div className="flex gap-12 text-sm text-neutral-400">
          <div className="flex flex-col gap-3">
            <span className="text-white font-medium mb-1">Explore</span>
            <a href="#" className="hover:text-white transition-colors">
              Subscriptions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Wholesale
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-medium mb-1">Company</span>
            <a href="#" className="hover:text-white transition-colors">
              Manifesto
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Careers
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-medium mb-1">Connect</span>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-900 text-xs text-neutral-600 flex justify-between">
        <span>© 2024 Aether Brew Systems Inc.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-neutral-400">
            Privacy
          </a>
          <a href="#" className="hover:text-neutral-400">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
