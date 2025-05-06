import { useState, useEffect } from 'react';

export default function BloodDonorPage() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetchDonorData();
  }, []);

  const fetchDonorData = () => {
    fetch('http://localhost:8000/Blood_Donor')
      .then(response => response.json())
      .then(data => setDonors(data))
      .catch(error => console.error('Error fetching donor data:', error));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-red-800 mb-8 pb-2 border-b-2 border-red-800">
          Blood Donor Page 
        </h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-red-700 text-white p-4">
            <h2 className="font-semibold text-xl">
              List of Registered Blood Donors
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
                    Sex
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Blood Group
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Registration Date
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Birth Date
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    City PIN
                  </th>
                </tr>
              </thead>
              <tbody>
                {donors.map((donor, index) => (
                  <tr key={donor.BD_ID} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">
                      {donor.BD_ID}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">
                      {donor.BD_NAME}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">
                      {donor.BD_SEX}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">
                      {donor.BD_BGROUP}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">
                      {new Date(donor.BD_REG_DATE).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">
                      {new Date(donor.BD_BDATE).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">
                      {donor.CITY_PIN}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {donors.length === 0 && (
              <p className="text-center text-gray-500 mt-4">No donor data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
