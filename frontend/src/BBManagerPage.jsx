import { useState, useEffect } from 'react';

export default function BBManagerPage() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    fetchStaffData();
  }, []);

  const fetchStaffData = () => {
    fetch('http://localhost:8000/BB_Manager')
      .then(response => response.json())
      .then(data => setStaff(data))
      .catch(error => console.error('Error fetching staff data:', error));
  };

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-8 pb-2 border-b-4 border-blue-700">
          BB Manager Page
        </h1>

        <div className="rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <h2 className="font-semibold text-xl">
              List of Blood Bank Managers
            </h2>
          </div>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-blue-100 text-left text-sm font-semibold text-gray-800">
                    ID
                  </th>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-blue-100 text-left text-sm font-semibold text-gray-800">
                    Name
                  </th>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-blue-100 text-left text-sm font-semibold text-gray-800">
                    Phone No.
                  </th>
                </tr>
              </thead>
              <tbody>
                {staff.map((member, index) => (
                  <tr key={member.M_ID} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{member.M_ID}</td>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{member.M_NAME}</td>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{member.M_PHNO}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {staff.length === 0 && (
              <p className="text-center text-gray-500 mt-4">No staff data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
