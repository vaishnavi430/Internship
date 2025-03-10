import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">CrowdApp</h3>
            <p className="text-gray-600">
              Connecting people, fostering collaboration, and building communities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} CrowdApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;