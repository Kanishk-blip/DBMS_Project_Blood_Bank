// import { useState, useEffect } from 'react';

// export default function CityWiseStatistics() {
//   const [donorsCountByCity, setDonorsCountByCity] = useState([]);
//   const [bloodQuantityRangeByCity, setBloodQuantityRangeByCity] = useState([]);
//   const [donorsInMultipleHospitalsCity, setDonorsInMultipleHospitalsCity] = useState([]);

//   useEffect(() => {
//     fetchDonorsCountByCity();
//     fetchBloodQuantityRangeByCity();
//     fetchDonorsInMultipleHospitalsCity();
//   }, []);

//   const fetchDonorsCountByCity = () => {
//     fetch('http://localhost:8000/donors-count-by-city')
//       .then(response => response.json())
//       .then(data => setDonorsCountByCity(data))
//       .catch(error => console.error('Error fetching donors count by city:', error));
//   };

//   const fetchBloodQuantityRangeByCity = () => {
//     fetch('http://localhost:8000/city-blood-quantity-range')
//       .then(response => response.json())
//       .then(data => setBloodQuantityRangeByCity(data))
//       .catch(error => console.error('Error fetching blood quantity range by city:', error));
//   };

//   const fetchDonorsInMultipleHospitalsCity = () => {
//     fetch('http://localhost:8000/donors-in-cities-multiple-hospitals')
//       .then(response => response.json())
//       .then(data => setDonorsInMultipleHospitalsCity(data))
//       .catch(error => console.error('Error fetching donors in cities with multiple hospitals:', error));
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-3xl font-bold text-blue-800 mb-8 pb-2 border-b-2 border-blue-800">
//           City-wise Statistics Page (Group-3)
//         </h1>

//         {/* Donor Count by City */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
//           <div className="bg-blue-700 text-white p-4">
//             <h2 className="font-semibold text-xl">Number of Donors in Each City</h2>
//           </div>
//           <div className="p-4">
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
//                     City Name
//                   </th>
//                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
//                     Donor Count
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {donorsCountByCity.map((city, index) => (
//                   <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{city.CITY_NAME}</td>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{city.DONOR_COUNT}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Blood Quantity Min/Max by City */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
//           <div className="bg-blue-700 text-white p-4">
//             <h2 className="font-semibold text-xl">Min/Max Blood Quantity Requested from Each City</h2>
//           </div>
//           <div className="p-4">
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
//                     City Name
//                   </th>
//                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
//                     Min Quantity
//                   </th>
//                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
//                     Max Quantity
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {bloodQuantityRangeByCity.map((city, index) => (
//                   <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{city.CITY_NAME}</td>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{city.MIN_QTY}</td>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{city.MAX_QTY}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Donors in Cities with More than One Hospital */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
//           <div className="bg-blue-700 text-white p-4">
//             <h2 className="font-semibold text-xl">Donors Living in Cities with More Than One Hospital</h2>
//           </div>
//           <div className="p-4">
//             {donorsInMultipleHospitalsCity.length === 0 ? (
//               <p className="text-gray-500 italic text-sm">No donors found in cities with more than one hospital.</p>
//             ) : (
//               <table className="min-w-full bg-white">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
//                       Donor Name
//                     </th>
//                     <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
//                       City Name
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {donorsInMultipleHospitalsCity.map((donor, index) => (
//                     <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                       <td className="py-2 px-4 border-b border-gray-200 text-sm">{donor.BD_NAME}</td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-sm">{donor.CITY_NAME}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
















import { useState, useEffect } from 'react';

export default function CityWiseStatistics() {
  const [donorsCountByCity, setDonorsCountByCity] = useState([]);
  const [bloodQuantityRangeByCity, setBloodQuantityRangeByCity] = useState([]);
  const [donorsInMultipleHospitalsCity, setDonorsInMultipleHospitalsCity] = useState([]);

  useEffect(() => {
    fetchDonorsCountByCity();
    fetchBloodQuantityRangeByCity();
    fetchDonorsInMultipleHospitalsCity();
  }, []);

  const fetchDonorsCountByCity = () => {
    fetch('http://localhost:8000/donors-count-by-city')
      .then(response => response.json())
      .then(data => setDonorsCountByCity(data))
      .catch(error => console.error('Error fetching donors count by city:', error));
  };

  const fetchBloodQuantityRangeByCity = () => {
    fetch('http://localhost:8000/city-blood-quantity-range')
      .then(response => response.json())
      .then(data => setBloodQuantityRangeByCity(data))
      .catch(error => console.error('Error fetching blood quantity range by city:', error));
  };

  const fetchDonorsInMultipleHospitalsCity = () => {
    fetch('http://localhost:8000/donors-in-cities-multiple-hospitals')
      .then(response => response.json())
      .then(data => setDonorsInMultipleHospitalsCity(data))
      .catch(error => console.error('Error fetching donors in cities with multiple hospitals:', error));
  };

  return (
    <div className="min-h-screen p-6 relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#f0f4f8',
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 2%, transparent 10%),
            radial-gradient(circle at 70% 40%, rgba(59, 130, 246, 0.15) 2%, transparent 10%),
            radial-gradient(circle at 50% 60%, rgba(59, 130, 246, 0.1) 2%, transparent 8%)
          `,
          backgroundSize: '60px 60px, 90px 90px, 70px 70px',
          backgroundRepeat: 'repeat'
        }}
      ></div>

      <div className="max-w-6xl mx-auto bg-white shadow-xl p-0 relative z-10">
        <div className="bg-blue-800 p-6">
          <h1 className="text-3xl font-bold text-white tracking-tight">City-wise Statistics Dashboard</h1>
        </div>

        <div className="p-6 space-y-8">
          {/* Donor Count by City */}
          <div className="border-l-4 border-blue-600 bg-white shadow-md">
            <div className="bg-blue-50 p-4 border-b border-blue-100 flex items-center">
              <div className="w-2 h-6 bg-blue-600 mr-3"></div>
              <h2 className="text-xl font-bold text-blue-800">Number of Donors in Each City</h2>
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-3 px-4 text-left font-bold text-blue-800 border-b-2 border-blue-100">City Name</th>
                    <th className="py-3 px-4 text-left font-bold text-blue-800 border-b-2 border-blue-100">Donor Count</th>
                  </tr>
                </thead>
                <tbody>
                  {donorsCountByCity.map((city, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                      <td className="py-3 px-4 border-b border-blue-50 text-gray-800 font-medium">{city.CITY_NAME}</td>
                      <td className="py-3 px-4 border-b border-blue-50 text-gray-800 font-medium">{city.DONOR_COUNT}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Blood Quantity Min/Max by City */}
          <div className="border-l-4 border-indigo-600 bg-white shadow-md">
            <div className="bg-indigo-50 p-4 border-b border-indigo-100 flex items-center">
              <div className="w-2 h-6 bg-indigo-600 mr-3"></div>
              <h2 className="text-xl font-bold text-indigo-800">Min/Max Blood Quantity Requested from Each City</h2>
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-3 px-4 text-left font-bold text-indigo-800 border-b-2 border-indigo-100">City Name</th>
                    <th className="py-3 px-4 text-left font-bold text-indigo-800 border-b-2 border-indigo-100">Min Quantity</th>
                    <th className="py-3 px-4 text-left font-bold text-indigo-800 border-b-2 border-indigo-100">Max Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {bloodQuantityRangeByCity.map((city, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-indigo-50'}>
                      <td className="py-3 px-4 border-b border-indigo-50 text-gray-800 font-medium">{city.CITY_NAME}</td>
                      <td className="py-3 px-4 border-b border-indigo-50 text-gray-800 font-medium">{city.MIN_QTY}</td>
                      <td className="py-3 px-4 border-b border-indigo-50 text-gray-800 font-medium">{city.MAX_QTY}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Donors in Cities with More than One Hospital */}
          <div className="border-l-4 border-teal-600 bg-white shadow-md">
            <div className="bg-teal-50 p-4 border-b border-teal-100 flex items-center">
              <div className="w-2 h-6 bg-teal-600 mr-3"></div>
              <h2 className="text-xl font-bold text-teal-800">Donors Living in Cities with More Than One Hospital</h2>
            </div>
            <div className="p-4 overflow-x-auto">
              {donorsInMultipleHospitalsCity.length === 0 ? (
                <p className="text-gray-500 italic text-sm">No donors found in cities with more than one hospital.</p>
              ) : (
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 text-left font-bold text-teal-800 border-b-2 border-teal-100">Donor Name</th>
                      <th className="py-3 px-4 text-left font-bold text-teal-800 border-b-2 border-teal-100">City Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donorsInMultipleHospitalsCity.map((donor, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-teal-50'}>
                        <td className="py-3 px-4 border-b border-teal-50 text-gray-800 font-medium">{donor.BD_NAME}</td>
                        <td className="py-3 px-4 border-b border-teal-50 text-gray-800 font-medium">{donor.CITY_NAME}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}