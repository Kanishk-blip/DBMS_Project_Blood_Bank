import { useState, useEffect } from 'react';

export default function HospitalInfoPage() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetchHospitalData();
  }, []);

  const fetchHospitalData = () => {
    fetch('http://localhost:8000/Hospital_Info')
      .then(response => response.json())
      .then(data => setHospitals(data))
      .catch(error => console.error('Error fetching hospital data:', error));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-red-800 mb-8 pb-2 border-b-2 border-red-800">
          Hospital Information Page
        </h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-red-700 text-white p-4">
            <h2 className="font-semibold text-xl">
              List of Hospitals Needing Blood
            </h2>
          </div>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    ID
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Phone No.
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Needed Blood Group
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Quantity Needed
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    City PIN
                  </th>
                </tr>
              </thead>
              <tbody>
                {hospitals.map((hospital, index) => (
                  <tr key={hospital.HOSP_ID} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{hospital.HOSP_ID}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{hospital.HOSP_NAME}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{hospital.HOSP_PHNO}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{hospital.HOSP_NEEDED_BGRP}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{hospital.HOSP_NEEDED_QNTY}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{hospital.CITY_PIN}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {hospitals.length === 0 && (
              <p className="text-center text-gray-500 mt-4">No hospital data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
