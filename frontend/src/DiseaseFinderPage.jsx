import { useState, useEffect } from 'react';

export default function DiseaseFinderPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctorData();
  }, []);

  const fetchDoctorData = () => {
    fetch('http://localhost:8000/Disease_Finder')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching doctor data:', error));
  };

  return (
    <div className="bg-emerald-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-emerald-800 mb-8 pb-2 border-b-4 border-emerald-700">
          Disease Finder Page
        </h1>

        <div className="rounded-lg shadow-md overflow-hidden">
          <div className="bg-emerald-600 text-white p-4">
            <h2 className="font-semibold text-xl">
              List of Available Doctors
            </h2>
          </div>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-emerald-100 text-left text-sm font-semibold text-gray-800">
                    ID
                  </th>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-emerald-100 text-left text-sm font-semibold text-gray-800">
                    Name
                  </th>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-emerald-100 text-left text-sm font-semibold text-gray-800">
                    Phone No.
                  </th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor, index) => (
                  <tr key={doctor.DFIND_ID} className={index % 2 === 0 ? 'bg-emerald-50' : 'bg-white'}>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{doctor.DFIND_ID}</td>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{doctor.DFIND_NAME}</td>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{doctor.DFIND_PHNO}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {doctors.length === 0 && (
              <p className="text-center text-gray-500 mt-4">No doctor data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
