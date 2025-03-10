import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login />;
      case 'signup':
        return <SignUp />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">CrowdApp</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setCurrentPage('home')} className={(currentPage === 'home' ? 'text-indigo-600' : 'text-gray-600') + " hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium"}>Home</button>
              <button onClick={() => setCurrentPage('about')} className={(currentPage === 'about' ? 'text-indigo-600' : 'text-gray-600') + " hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium"}>About</button>
              <button onClick={() => setCurrentPage('contact')} className={(currentPage === 'contact' ? 'text-indigo-600' : 'text-gray-600') + " hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium"}>Contact</button>
              <button onClick={() => setCurrentPage('login')} className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Login</button>
              <button onClick={() => setCurrentPage('signup')} className="bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-50">Sign Up</button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left">Home</button>
                <button onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left">About</button>
                <button onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left">Contact</button>
                <button onClick={() => { setCurrentPage('login'); setIsMenuOpen(false); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left">Login</button>
                <button onClick={() => { setCurrentPage('signup'); setIsMenuOpen(false); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left">Sign Up</button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;