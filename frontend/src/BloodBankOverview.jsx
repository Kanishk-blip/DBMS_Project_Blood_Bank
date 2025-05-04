// import { useState, useEffect } from 'react';

// export default function BloodBankOverview() {
//   const [bloodGroupBalance, setBloodGroupBalance] = useState([]);
//   const [topManagers, setTopManagers] = useState([]);
//   const [topHospitals, setTopHospitals] = useState([]);
//   const [citiesWithBoth, setCitiesWithBoth] = useState([]);

//   useEffect(() => {
//     fetchBloodGroupBalance();
//     fetchTopManagers();
//     fetchTopHospitals();
//     fetchCitiesWithBoth();
//   }, []);

//   const fetchBloodGroupBalance = () => {
//     fetch('http://localhost:8000/blood-group-balance')
//       .then((res) => res.json())
//       .then((data) => setBloodGroupBalance(data))
//       .catch((err) => console.error('Error fetching blood group balance:', err));
//   };

//   const fetchTopManagers = () => {
//     fetch('http://localhost:8000/top-3-busiest-managers')
//       .then((res) => res.json())
//       .then((data) => setTopManagers(data))
//       .catch((err) => console.error('Error fetching top managers:', err));
//   };

//   const fetchTopHospitals = () => {
//     fetch('http://localhost:8000/hospitals-with-highest-blood-request')
//       .then((res) => res.json())
//       .then((data) => setTopHospitals(data))
//       .catch((err) => console.error('Error fetching hospitals:', err));
//   };

//   const fetchCitiesWithBoth = () => {
//     fetch('http://localhost:8000/cities-with-donors-and-recipients')
//       .then((res) => res.json())
//       .then((data) => setCitiesWithBoth(data))
//       .catch((err) => console.error('Error fetching cities:', err));
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-3xl font-bold text-red-800 mb-8 pb-2 border-b-2 border-red-800">Blood Bank Overview</h1>

//         {/* Panel 1: Blood Group Balance */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
//           <div className="bg-red-700 text-white p-4">
//             <h2 className="font-semibold text-xl">Blood Group Balance (Donors vs Recipients)</h2>
//           </div>
//           <div className="p-4 overflow-x-auto">
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Blood Group</th>
//                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Donors</th>
//                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Recipients</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {bloodGroupBalance.map((row, index) => (
//                   <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{row.BLOOD_GROUP}</td>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{row.DONORS}</td>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{row.RECIPIENTS}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Panel 2: Top 3 Busiest Managers */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
//           <div className="bg-red-700 text-white p-4">
//             <h2 className="font-semibold text-xl">Top 3 Busiest Managers</h2>
//           </div>
//           <div className="p-4 overflow-x-auto">
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Manager Name</th>
//                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Total Requests</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {topManagers.map((manager, index) => (
//                   <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{manager.M_NAME}</td>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{manager.TOTAL_REQUESTS}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Panel 3: Hospitals with Highest Blood Group Request */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
//           <div className="bg-red-700 text-white p-4">
//             <h2 className="font-semibold text-xl">Hospitals with the Highest Blood Group Request</h2>
//           </div>
//           <div className="p-4 overflow-x-auto">
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Hospital Name</th>
//                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Needed Blood Group</th>
//                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Needed Quantity</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {topHospitals.map((hospital, index) => (
//                   <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{hospital.HOSP_NAME}</td>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{hospital.HOSP_NEEDED_BGRP}</td>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{hospital.HOSP_NEEDED_QNTY}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Panel 4: Cities with Both Donors & Recipients */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
//           <div className="bg-red-700 text-white p-4">
//             <h2 className="font-semibold text-xl">Cities with Both Donors and Recipients</h2>
//           </div>
//           <div className="p-4">
//             <ul className="list-disc pl-5 text-gray-700">
//               {citiesWithBoth.map((city, index) => (
//                 <li key={index} className="mb-2 text-sm">{city.CITY_NAME}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











import { useState, useEffect } from 'react';

export default function BloodBankOverview() {
  const [bloodGroupBalance, setBloodGroupBalance] = useState([]);
  const [topManagers, setTopManagers] = useState([]);
  const [topHospitals, setTopHospitals] = useState([]);
  const [citiesWithBoth, setCitiesWithBoth] = useState([]);

  useEffect(() => {
    fetchBloodGroupBalance();
    fetchTopManagers();
    fetchTopHospitals();
    fetchCitiesWithBoth();
  }, []);

  const fetchBloodGroupBalance = () => {
    fetch('http://localhost:8000/blood-group-balance')
      .then((res) => res.json())
      .then((data) => setBloodGroupBalance(data))
      .catch((err) => console.error('Error fetching blood group balance:', err));
  };

  const fetchTopManagers = () => {
    fetch('http://localhost:8000/top-3-busiest-managers')
      .then((res) => res.json())
      .then((data) => setTopManagers(data))
      .catch((err) => console.error('Error fetching top managers:', err));
  };

  const fetchTopHospitals = () => {
    fetch('http://localhost:8000/hospitals-with-highest-blood-request')
      .then((res) => res.json())
      .then((data) => setTopHospitals(data))
      .catch((err) => console.error('Error fetching hospitals:', err));
  };

  const fetchCitiesWithBoth = () => {
    fetch('http://localhost:8000/cities-with-donors-and-recipients')
      .then((res) => res.json())
      .then((data) => setCitiesWithBoth(data))
      .catch((err) => console.error('Error fetching cities:', err));
  };

  return (
    <div className="bg-gradient-to-br from-red-50 via-white to-red-100 min-h-screen py-10 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-4xl font-extrabold text-red-700 mb-4 border-b-4 border-red-500 inline-block pb-2">Blood Bank Overview</h1>

        {/* Panel 1: Blood Group Balance */}
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-red-200 hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Blood Group Balance (Donors vs Recipients)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-red-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Blood Group</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Donors</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Recipients</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {bloodGroupBalance.map((row, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-sm text-gray-700">{row.BLOOD_GROUP}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{row.DONORS}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{row.RECIPIENTS}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Panel 2: Top 3 Busiest Managers */}
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-red-200 hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Top 3 Busiest Managers</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-red-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Manager Name</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Total Requests</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {topManagers.map((manager, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-sm text-gray-700">{manager.M_NAME}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{manager.TOTAL_REQUESTS}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Panel 3: Hospitals with Highest Blood Group Request */}
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-red-200 hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Hospitals with the Highest Blood Group Request</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-red-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Hospital Name</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Needed Blood Group</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Needed Quantity</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {topHospitals.map((hospital, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-sm text-gray-700">{hospital.HOSP_NAME}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{hospital.HOSP_NEEDED_BGRP}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{hospital.HOSP_NEEDED_QNTY}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Panel 4: Cities with Both Donors & Recipients */}
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-red-200 hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Cities with Both Donors and Recipients</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {citiesWithBoth.map((city, index) => (
              <li key={index} className="text-sm">{city.CITY_NAME}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

