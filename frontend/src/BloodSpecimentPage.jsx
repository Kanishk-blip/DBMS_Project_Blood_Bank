import { useState, useEffect } from 'react';

export default function BloodSpecimenPage() {
  const [specimens, setSpecimens] = useState([]);

  useEffect(() => {
    fetchSpecimenData();
  }, []);

  const fetchSpecimenData = () => {
    fetch('http://localhost:8000/Blood_Specimen')
      .then(response => response.json())
      .then(data => setSpecimens(data))
      .catch(error => console.error('Error fetching specimen data:', error));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-red-800 mb-8 pb-2 border-b-2 border-red-800">
          Blood Specimen Page
        </h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-red-700 text-white p-4">
            <h2 className="font-semibold text-xl">
              List of Blood Specimens
            </h2>
          </div>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Specimen No.
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Blood Group
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Blood Status
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Manager ID
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Diagnosis ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {specimens.map((specimen, index) => (
                  <tr key={specimen.SPECIMEN_NO} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{specimen.SPECIMEN_NO}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{specimen.B_GROUP}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{specimen.B_STATUS}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{specimen.M_ID}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{specimen.DFIND_ID}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {specimens.length === 0 && (
              <p className="text-center text-gray-500 mt-4">No blood specimen data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
