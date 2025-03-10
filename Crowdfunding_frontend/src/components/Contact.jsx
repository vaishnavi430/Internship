import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-50 rounded-lg shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-indigo-600" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@crowdapp.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-indigo-600" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">123 Main St, City, Country</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=400&q=80" 
                  alt="Office Interior" 
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&q=80" 
                  alt="Meeting Room" 
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
              alt="Contact" 
              className="rounded-lg shadow-md h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;