import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <header className="hero relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
  <div className="relative flex flex-col items-center justify-center h-full text-white text-center p-6">
    <h1 className="text-6xl font-extrabold leading-tight drop-shadow-md animate-fadeIn">Oil Spill Detection System</h1>
    <p className="mt-4 text-lg md:text-2xl font-medium drop-shadow-md">Innovating Marine Safety with Real-Time Monitoring</p>
    <div className="mt-6">
      <Link to="/satellite-images">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-200 hover:scale-105">Explore Satellite Images</button>
      </Link>
      <Link to="/damaged-ships" className="ml-4">
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-200 hover:scale-105">View Damaged Ships</button>
      </Link>
    </div>
  </div>
</header>


      <section className="features py-12">
        <h2 className="text-3xl text-center font-bold">Key Features</h2>
        <div className="flex flex-wrap justify-center mt-8 space-x-4">
          <div className="feature max-w-xs bg-white rounded-lg shadow-lg p-6 m-4 text-center transition transform hover:scale-105">
            <img src="https://tse1.mm.bing.net/th?id=OIP.cMGMBcwRePvAOGKyTKif8gHaDp&pid=Api&P=0&h=180" alt="Real-time Monitoring" className="w-16 h-16 mx-auto" />
            <h3 className="mt-4 font-bold">Real-time Monitoring</h3>
            <p>Track oil spills instantly with our cutting-edge technology.</p>
          </div>
          <div className="feature max-w-xs bg-white rounded-lg shadow-lg p-6 m-4 text-center transition transform hover:scale-105">
            <img src="https://tse1.mm.bing.net/th?id=OIP.GYPs5zzr2mSHNhg1kkNumwHaEU&pid=Api&P=0&h=180" alt="Advanced Analytics" className="w-16 h-16 mx-auto" />
            <h3 className="mt-4 font-bold">Advanced Analytics</h3>
            <p>Get insights and analytics on spill detection trends.</p>
          </div>
          <div className="feature max-w-xs bg-white rounded-lg shadow-lg p-6 m-4 text-center transition transform hover:scale-105">
            <img src="https://tse2.mm.bing.net/th?id=OIP.B67A6ZVvH1nvHr5IeECCnAHaEy&pid=Api&P=0&h=180" alt="Alerts and Notifications" className="w-16 h-16 mx-auto" />
            <h3 className="mt-4 font-bold">Alerts & Notifications</h3>
            <p>Receive timely alerts to mitigate risks effectively.</p>
          </div>
        </div>
      </section>

      <section className="statistics py-12 bg-gray-200">
        <h2 className="text-3xl text-center font-bold">Dynamic Statistics</h2>
        <div className="flex justify-center mt-8 space-x-8">
          <div className="stat text-center">
            <h3 className="text-xl font-bold">Total Spills Detected</h3>
            <p className="text-4xl">256</p>
          </div>
          <div className="stat text-center">
            <h3 className="text-xl font-bold">Area Covered</h3>
            <p className="text-4xl">1500 km²</p>
          </div>
          <div className="stat text-center">
            <h3 className="text-xl font-bold">Real-time Alerts Sent</h3>
            <p className="text-4xl">4821</p>
          </div>
        </div>
      </section>

      <section className="map-section py-12">
        <h2 className="text-3xl text-center font-bold">Interactive Map</h2>
        <div className="flex justify-center mt-8">
          <img src="http://img.scoop.it/AmWKVMo0bOJknOtPXNEUpzl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9" alt="Map of Oil Spills" className="rounded-lg" style={{ width: '80%', maxHeight: '400px', objectFit: 'cover' }} />
        </div>
      </section>

      <section className="testimonials py-12 bg-gray-200">
        <h2 className="text-3xl text-center font-bold">What Our Users Say</h2>
        <blockquote className="text-center mt-4 text-xl italic">
          “This system has transformed our response to oil spills. We can now act quickly and effectively!” – Marine Conservationist
        </blockquote>
      </section>

      <footer className="footer py-4 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Oil Spill Detection System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
