import { useState, useEffect } from 'react';

export default function CityPage() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCityData();
  }, []);

  const fetchCityData = () => {
    fetch('http://localhost:8000/City')
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.error('Error fetching city data:', error));
  };

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-8 pb-2 border-b-4 border-blue-700">
          City Information Page
        </h1>

        <div className="rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <h2 className="font-semibold text-xl">
              List of Cities
            </h2>
          </div>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-blue-100 text-left text-sm font-semibold text-gray-800">
                    City PIN
                  </th>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-blue-100 text-left text-sm font-semibold text-gray-800">
                    City Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {cities.map((city, index) => (
                  <tr key={city.CITY_PIN} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{city.CITY_PIN}</td>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{city.CITY_NAME}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {cities.length === 0 && (
              <p className="text-center text-gray-500 mt-4">No city data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
