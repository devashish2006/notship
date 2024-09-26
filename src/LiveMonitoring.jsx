import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import './LiveMonitoring.css'; // Custom CSS for styling

const LiveMonitoring = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Oil Spill Levels',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4, // Smooth curve
      },
    ],
  });

  const [isFetching, setIsFetching] = useState(true); // State to toggle fetching
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const newData = Math.random() * 100; // Simulate new data
      const newTime = new Date().toLocaleTimeString();

      setChartData((prev) => ({
        labels: [...prev.labels, newTime].slice(-10), // Keep last 10 labels
        datasets: [{
          ...prev.datasets[0],
          data: [...prev.datasets[0].data, newData].slice(-10), // Keep last 10 data points
        }],
      }));
    };

    if (isFetching) {
      const id = setInterval(fetchData, 2000); // Update every 2 seconds
      setIntervalId(id);
    } else if (intervalId) {
      clearInterval(intervalId); // Clear interval when not fetching
    }

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [isFetching, intervalId]);

  const handleToggleFetching = () => {
    setIsFetching(!isFetching);
  };

  const handleResetData = () => {
    setChartData({
      labels: [],
      datasets: [{
        label: 'Oil Spill Levels',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      }],
    });
  };

  return (
    <div className="live-monitoring-container w-4/5 mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Live Monitoring Dashboard</h2>
      <div className="flex justify-between items-center mb-4">
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300`}
          onClick={handleToggleFetching}
        >
          {isFetching ? "Stop Fetching" : "Start Fetching"}
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition-colors duration-300"
          onClick={handleResetData}
        >
          Reset Data
        </button>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4">
        <Line
          data={chartData}
          options={{
            responsive: true,
            animation: {
              duration: 800, // Animation duration
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Time',
                },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Oil Spill Levels',
                },
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default LiveMonitoring;
