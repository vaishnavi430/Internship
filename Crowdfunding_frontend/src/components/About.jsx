import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-50 rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-4">
                We are dedicated to creating meaningful connections and fostering collaboration 
                within our community.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to provide a platform where people can come together, share ideas, 
                and work towards common goals.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&q=80" 
                  alt="Team Meeting" 
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80" 
                  alt="Office Culture" 
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
              alt="Our Team" 
              className="rounded-lg shadow-md h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;