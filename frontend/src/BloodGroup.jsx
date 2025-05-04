import { useState, useEffect } from 'react';

export default function BloodGroupStatistics() {
  const [avgBloodQuantities, setAvgBloodQuantities] = useState([]);

  useEffect(() => {
    fetchAverageBloodQuantity();
  }, []);

  const fetchAverageBloodQuantity = () => {
    fetch('http://localhost:8000/average-blood-quantity')
      .then(response => response.json())
      .then(data => setAvgBloodQuantities(data))
      .catch(error => console.error('Error fetching average blood quantity:', error));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-8 pb-2 border-b-2 border-blue-800">
          Blood Group Statistics Page (Group-2)
        </h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-700 text-white p-4">
            <h2 className="font-semibold text-xl">
              Average Blood Quantity Represented by Each Blood Group
            </h2>
          </div>
          <div className="p-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Blood Group
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Average Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                {avgBloodQuantities.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">
                      {item.RECI_BGRP}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">
                      {item.AVG_QUANTITY}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
