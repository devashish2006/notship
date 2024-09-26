import React, { useState } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js";
import { Link } from "react-router-dom"; // Import Link for navigation
import AnomalyDetectionGraph from './AnomalyDetectionGraph'; // Assuming you have this component created
import ShipDetails from './ship-details'; // Import the new component

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const SatelliteImageMonitor = () => {
  const [selectedSatellite, setSelectedSatellite] = useState(null);
  const [showAnomalyGraph, setShowAnomalyGraph] = useState(false); // State for toggling the anomaly graph

  const satelliteData = [
    {
      id: 1,
      date: "2024-09-20",
      location: "Gulf of Mexico",
      imageUrl: "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2020/08/10/153900-oil-spill-768x431.jpg",
      description: "Oil spill detected near offshore drilling site.",
      status: "Alert",
      color: "bg-red-500",
    },
    {
      id: 2,
      date: "2024-09-18",
      location: "Off Mumbai Coast",
      imageUrl: "https://s3.us-east-1.amazonaws.com/satelyticsweb/uploads/general/oil-spill-1.jpg",
      description: "Suspicious anomaly detected near vessel.",
      status: "Alert",
      color: "bg-yellow-500",
    },
    {
      id: 3,
      date: "2024-09-15",
      location: "Indian Ocean",
      imageUrl: "https://www.offshore-technology.com/wp-content/uploads/sites/20/2018/05/12685861633_cf5c25abc8_b-e1525191470518.jpg",
      description: "Monitoring clean-up efforts of previous oil spill.",
      status: "Monitoring",
      color: "bg-green-500",
    },
    {
      id: 4,
      date: "2024-09-12",
      location: "Bay of Bengal",
      imageUrl: "https://ukeirespill.org/wp-content/uploads/2021/07/Orbital-EOS-viewer-1536x758.jpg",
      description: "Minor spill detected near shipping lane.",
      status: "Monitoring",
      color: "bg-blue-500",
    },
    {
      id: 5,
      date: "2024-09-10",
      location: "Persian Gulf",
      imageUrl: "https://www.sciencenews.org/wp-content/uploads/2022/02/021622_CG_sunlight-oil_feat-1030x580.jpg",
      description: "Oil slick detected near Iranian coastline.",
      status: "Alert",
      color: "bg-red-500",
    },
  ];

  const handleViewDetails = (data) => {
    setSelectedSatellite(data);
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Satellite Image Monitoring</h1>
      </div>

      {/* Grid of satellite images */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {satelliteData.map((data) => (
          <motion.div
            key={data.id}
            className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={data.imageUrl} alt={data.description} className="w-full h-52 object-cover" />
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{data.location}</h3>
                <span className={`text-white text-xs px-3 py-1 rounded-full ${data.color}`}>
                  {data.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{data.date}</p>
              <p className="text-base text-gray-700 leading-relaxed">{data.description}</p>
              <div className="mt-4">
                <button
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-600 transition-colors duration-300"
                  onClick={() => handleViewDetails(data)}
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Conditionally render the ship details if a satellite is selected */}
      {selectedSatellite && (
        <div className="mt-10">
          <ShipDetails satelliteData={selectedSatellite} /> {/* Pass the selected satellite data */}
          <div className="mt-6">
            {/* Button to toggle AnomalyDetectionGraph */}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300"
              onClick={() => setShowAnomalyGraph(!showAnomalyGraph)}
            >
              {showAnomalyGraph ? "Hide Anomaly Detection Graph" : "Show Anomaly Detection Graph"}
            </button>
          </div>
        </div>
      )}

      {/* Conditionally render the AnomalyDetectionGraph component */}
      {showAnomalyGraph && (
        <div className="mt-10">
          <AnomalyDetectionGraph />
        </div>
      )}

      {/* Button to navigate to Live Monitoring */}
      <div className="mt-10 text-center">
        <Link to="/live-monitoring">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
            Go to Live Monitoring
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SatelliteImageMonitor;
