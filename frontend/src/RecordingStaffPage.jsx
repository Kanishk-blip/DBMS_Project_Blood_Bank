import { useState, useEffect } from 'react';

export default function RecordingStaffPage() {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    fetchStaffData();
  }, []);

  const fetchStaffData = () => {
    fetch('http://localhost:8000/Recording_Staff')
      .then(response => response.json())
      .then(data => setStaffList(data))
      .catch(error => console.error('Error fetching recording staff data:', error));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-red-800 mb-8 pb-2 border-b-2 border-red-800">
          Recording Staff Page
        </h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-red-700 text-white p-4">
            <h2 className="font-semibold text-xl">
              List of Recording Staff Members
            </h2>
          </div>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Staff ID
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Phone No.
                  </th>
                </tr>
              </thead>
              <tbody>
                {staffList.map((staff, index) => (
                  <tr key={staff.RECO_ID} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{staff.RECO_ID}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{staff.RECO_NAME}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{staff.RECO_PHNO}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {staffList.length === 0 && (
              <p className="text-center text-gray-500 mt-4">No recording staff data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
