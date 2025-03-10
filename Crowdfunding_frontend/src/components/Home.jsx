import React, { useState, useEffect } from 'react';

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to CrowdApp</h1>
          <p className="text-xl text-gray-600 mb-8">Your platform for connecting and collaborating.</p>
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
            alt="Team Collaboration" 
            className="rounded-lg shadow-xl mx-auto mb-8"
          />

          {/* Static Images */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80" 
              alt="Business Meeting" 
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80" 
              alt="Creative Space" 
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=400&q=80" 
              alt="Team Work" 
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
          </div>
        </div>

        {/* Dynamic Projects Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          {projects.length > 0 ? (
            <ul>
              {projects.map((project) => (
                <li key={project._id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                  <p className="text-green-600">Raised: ${project.raised} / Goal: ${project.goal}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No projects found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
