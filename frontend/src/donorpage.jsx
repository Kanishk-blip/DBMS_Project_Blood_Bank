// // // import { useState, useEffect } from 'react';

// // // export default function DonorInsights() {
// // //   const [donorsSameGroup, setDonorsSameGroup] = useState([]);
// // //   const [donorsByGroup, setDonorsByGroup] = useState([]);
// // //   const [donorsByCity, setDonorsByCity] = useState([]);
// // //   const [selectedCity, setSelectedCity] = useState("New York");

// // //   useEffect(() => {
// // //     fetchDonorsSameGroup();
// // //     fetchDonorsByCity(selectedCity);
// // //   }, [selectedCity]);

// // //   const fetchDonorsSameGroup = () => {
// // //     fetch('http://localhost:8000/donors-with-most-requested-blood-group')
// // //       .then(response => response.json())
// // //       .then(data => setDonorsSameGroup(data))
// // //       .catch(error => console.error('Error fetching donors with most requested blood group:', error));
// // //   };

// // //   const fetchDonorsByCity = (city) => {
// // //     fetch(`http://localhost:8000/get-donors-by-city/${encodeURIComponent(city)}`)
// // //       .then(response => response.json())
// // //       .then(data => {
// // //         const formattedData = data.map((donorArray) => ({
// // //           donor_name: donorArray[0],  // Get name from the array
// // //           city: city,                  // The city is passed directly from state
// // //           age: "N/A"                   // Add a placeholder for age (if not provided)
// // //         }));
// // //         setDonorsByCity(formattedData);  // Update state with formatted data
// // //       })
// // //       .catch(error => console.error('Error fetching donors by city:', error));
// // //   };
// // //   console.log(donorsByCity)

// // //   const cities = ["New York", "Chicago", "Los Angeles"];  // Replace with dynamic list of cities if available

// // //   return (
// // //     <div className="bg-gray-100 min-h-screen p-6">
// // //       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
// // //         <h1 className="text-3xl font-bold text-blue-800 mb-8 pb-2 border-b-2 border-blue-800">Donor Insights Page (Group-1)</h1>

// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
// // //           {/* First Panel */}
// // //           <div className="bg-white rounded-lg shadow-md overflow-hidden">
// // //             <div className="bg-blue-700 text-white p-4">
// // //               <h2 className="font-semibold text-xl">List of donors who have the same blood group as the most requested group</h2>
// // //             </div>
// // //             <div className="p-4">
// // //               <table className="min-w-full bg-white">
// // //                 <thead>
// // //                   <tr>
// // //                     <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Donor Name</th>
// // //                     <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Blood Group</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {donorsSameGroup.map((donor, index) => (
// // //                     <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
// // //                       <td className="py-2 px-4 border-b border-gray-200 text-sm">{donor.BD_NAME}</td>
// // //                       <td className="py-2 px-4 border-b border-gray-200 text-sm">{donor.BD_BG}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           </div>

// // //           {/* Second Panel */}
// // //           <div className="bg-white rounded-lg shadow-md overflow-hidden">
// // //             <div className="bg-blue-700 text-white p-4">
// // //               <h2 className="font-semibold text-xl">Function: Donor Count by blood group</h2>
// // //             </div>
// // //             <div className="p-4">
// // //               <p className="text-gray-500 italic text-sm">
// // //                 Data will be displayed here once the API for donors by blood group is implemented.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Third Panel */}
// // //         <div className="bg-white rounded-lg shadow-md overflow-hidden">
// // //           <div className="bg-blue-700 text-white p-4">
// // //             <h2 className="font-semibold text-xl">Procedure: List of Donors by City</h2>
// // //           </div>
// // //           <div className="p-4">
// // //             <div className="mb-4">
// // //               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
// // //                 Select City:
// // //               </label>
// // //               <select 
// // //                 className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// // //                 id="city"
// // //                 value={selectedCity}
// // //                 onChange={(e) => setSelectedCity(e.target.value)}
// // //               >
// // //                 {cities.map((city) => (
// // //                   <option key={city} value={city}>{city}</option>
// // //                 ))}
// // //               </select>
// // //             </div>
// // //             <table className="min-w-full bg-white">
// // //               <thead>
// // //                 <tr>
// // //                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Donor Name</th>
// // //                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">City</th>
// // //                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Age</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {donorsByCity.map((donor, index) => (
// // //                   <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
// // //                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{donor.donor_name}</td>
// // //                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{donor.city}</td>
// // //                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{donor.age}</td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import { useState, useEffect } from 'react';

// // export default function DonorInsights() {
// //   const [donorsSameGroup, setDonorsSameGroup] = useState([]);
// //   const [donorsByCity, setDonorsByCity] = useState([]);
// //   const [selectedCity, setSelectedCity] = useState("New York");

// //   useEffect(() => {
// //     fetchDonorsSameGroup();
// //     fetchDonorsByCity(selectedCity);
// //   }, [selectedCity]);

// //   const fetchDonorsSameGroup = () => {
// //     fetch('http://localhost:8000/donors-with-most-requested-blood-group')
// //       .then(response => response.json())
// //       .then(data => setDonorsSameGroup(data))
// //       .catch(error => console.error('Error fetching donors with most requested blood group:', error));
// //   };

// //   const fetchDonorsByCity = (city) => {
// //     fetch(`http://localhost:8000/get-donors-by-city/${encodeURIComponent(city)}`)
// //       .then(response => response.json())
// //       .then(data => {
// //         const formattedData = data.map((donorArray) => ({
// //           donor_name: donorArray[0],  // Extract donor name from the array
// //           city: city,                  // The city is passed directly from state
          
// //         }));
// //         setDonorsByCity(formattedData);  // Update state with formatted data
// //       })
// //       .catch(error => console.error('Error fetching donors by city:', error));
// //   };

// //   const cities = ["New York", "Chicago", "Los Angeles"];  // Replace with dynamic list of cities if available

// //   return (
// //     <div className="bg-gray-100 min-h-screen p-6">
// //       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
// //         <h1 className="text-3xl font-bold text-blue-800 mb-8 pb-2 border-b-2 border-blue-800">Donor Insights Page (Group-1)</h1>

// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
// //           {/* First Panel */}
// //           <div className="bg-white rounded-lg shadow-md overflow-hidden">
// //             <div className="bg-blue-700 text-white p-4">
// //               <h2 className="font-semibold text-xl">List of donors who have the same blood group as the most requested group</h2>
// //             </div>
// //             <div className="p-4">
// //               <table className="min-w-full bg-white">
// //                 <thead>
// //                   <tr>
// //                     <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Donor Name</th>
// //                     <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Blood Group</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {donorsSameGroup.map((donor, index) => (
// //                     <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
// //                       <td className="py-2 px-4 border-b border-gray-200 text-sm">{donor.BD_NAME}</td>
// //                       <td className="py-2 px-4 border-b border-gray-200 text-sm">{donor.BD_BGROUP}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>

// //           {/* Second Panel */}
// //           <div className="bg-white rounded-lg shadow-md overflow-hidden">
// //             <div className="bg-blue-700 text-white p-4">
// //               <h2 className="font-semibold text-xl">Function: Donor Count by blood group</h2>
// //             </div>
// //             <div className="p-4">
// //               <p className="text-gray-500 italic text-sm">
// //                 Data will be displayed here once the API for donors by blood group is implemented.
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Third Panel */}
// //         <div className="bg-white rounded-lg shadow-md overflow-hidden">
// //           <div className="bg-blue-700 text-white p-4">
// //             <h2 className="font-semibold text-xl">Procedure: List of Donors by City</h2>
// //           </div>
// //           <div className="p-4">
// //             <div className="mb-4">
// //               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
// //                 Select City:
// //               </label>
// //               <select 
// //                 className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 id="city"
// //                 value={selectedCity}
// //                 onChange={(e) => setSelectedCity(e.target.value)}
// //               >
// //                 {cities.map((city) => (
// //                   <option key={city} value={city}>{city}</option>
// //                 ))}
// //               </select>
// //             </div>
// //             <table className="min-w-full bg-white">
// //               <thead>
// //                 <tr>
// //                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Donor Name</th>
// //                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">City</th>
                 
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {donorsByCity.map((donor, index) => (
// //                   <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
// //                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{donor.donor_name}</td>
// //                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{donor.city}</td>
// //                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{donor.age}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// old page without function api 











// import { useState, useEffect } from 'react';

// export default function DonorInsights() {
//   const [donorsSameGroup, setDonorsSameGroup] = useState([]);
//   const [donorsByCity, setDonorsByCity] = useState([]);
//   const [selectedCity, setSelectedCity] = useState('New Delhi'); // Default city
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // List of cities
//   const cities = ['New Delhi', 'Mumbai', 'Bangalore', 'Jaipur', 'Hyderabad', 'Chennai', 'Kolkata'];

//   useEffect(() => {
//     fetchDonorsSameGroup();
//     fetchDonorsByCity(selectedCity);
//   }, [selectedCity]);

//   // Fetch donors with the same blood group as the most requested
//   const fetchDonorsSameGroup = () => {
//     fetch('http://localhost:8000/donors-with-most-requested-blood-group')
//       .then((response) => response.json())
//       .then((data) => setDonorsSameGroup(data))
//       .catch((error) => console.error('Error fetching donors with most requested blood group:', error));
//   };

//   // Fetch donors by city
//   const fetchDonorsByCity = (city) => {
//     setLoading(true);
//     fetch(`http://localhost:8000/get-donors-by-city/${encodeURIComponent(city)}`)
//       .then((response) => response.json())
//       .then((data) => {
//         const formattedData = data.map((donorArray) => ({
//           donor_name: donorArray[0],
//           city: city,
//         }));
//         setDonorsByCity(formattedData);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError('Error fetching donors by city');
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="min-h-screen p-6 relative">
//       {/* Background styling with blood donation theme */}
//       <div className="absolute inset-0 z-0" style={{
//         backgroundColor: '#f8f0f0',
//         backgroundImage: `
//           radial-gradient(circle at 25% 25%, rgba(220, 53, 69, 0.1) 2%, transparent 10%),
//           radial-gradient(circle at 75% 44%, rgba(220, 53, 69, 0.15) 2%, transparent 10%),
//           radial-gradient(circle at 46% 52%, rgba(220, 53, 69, 0.1) 2%, transparent 8%),
//           radial-gradient(circle at 33% 63%, rgba(220, 53, 69, 0.13) 3%, transparent 8%),
//           radial-gradient(circle at 80% 75%, rgba(220, 53, 69, 0.11) 2%, transparent 8%)
//         `,
//         backgroundSize: '60px 60px, 90px 90px, 70px 70px, 120px 120px, 80px 80px',
//         backgroundRepeat: 'repeat',
//         backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 100px, 30px 40px',
//       }}></div>
      
//       <div className="max-w-6xl mx-auto bg-white shadow-xl p-0 relative z-10">
//         {/* Header Bar */}
//         <div className="bg-indigo-600 p-6">
//           <h1 className="text-3xl font-bold text-white tracking-tight">Donor Insights Dashboard</h1>
//         </div>

//         <div className="p-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//             {/* First Panel */}
//             <div className="border-l-4 border-indigo-600 bg-white shadow-lg">
//               <div className="bg-indigo-50 p-4 border-b border-indigo-100 flex items-center">
//                 <div className="w-2 h-6 bg-indigo-600 mr-3"></div>
//                 <h2 className="text-xl font-bold text-indigo-800">Most Requested Blood Group Donors</h2>
//               </div>
//               <div className="p-4">
//                 <table className="min-w-full">
//                   <thead>
//                     <tr>
//                       <th className="py-3 px-4 text-left font-bold text-indigo-800 border-b-2 border-indigo-100">Donor Name</th>
//                       <th className="py-3 px-4 text-left font-bold text-indigo-800 border-b-2 border-indigo-100">Blood Group</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {donorsSameGroup.map((donor, index) => (
//                       <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-indigo-50'}>
//                         <td className="py-3 px-4 border-b border-indigo-50 text-gray-800 font-medium">{donor.BD_NAME}</td>
//                         <td className="py-3 px-4 border-b border-indigo-50 text-gray-800 font-medium">{donor.BD_BGROUP}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Second Panel */}
//             <div className="border-l-4 border-blue-600 bg-white shadow-lg">
//               <div className="bg-blue-50 p-4 border-b border-blue-100 flex items-center">
//                 <div className="w-2 h-6 bg-blue-600 mr-3"></div>
//                 <h2 className="text-xl font-bold text-blue-800">Donor Count by Blood Group</h2>
//               </div>
//               <div className="p-4">
//                 <p className="text-gray-600 italic">
//                   Data will be displayed here once the API for donors by blood group is implemented.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Third Panel */}
//           <div className="border-l-4 border-teal-600 bg-white shadow-lg">
//             <div className="bg-teal-50 p-4 border-b border-teal-100 flex items-center">
//               <div className="w-2 h-6 bg-teal-600 mr-3"></div>
//               <h2 className="text-xl font-bold text-teal-800">Donors By City</h2>
//             </div>
//             <div className="p-4">
//               {/* City Selection */}
//               <div className="mb-6 flex items-center">
//                 <label className="block text-gray-700 font-bold mr-4" htmlFor="city">
//                   Select City:
//                 </label>
//                 <select
//                   className="bg-white text-gray-800 border border-gray-300 p-2 w-64 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
//                   id="city"
//                   value={selectedCity}
//                   onChange={(e) => setSelectedCity(e.target.value)}
//                 >
//                   {cities.map((city) => (
//                     <option key={city} value={city}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Loading indicator */}
//               {loading && <p className="text-teal-600 font-bold">Loading data...</p>}

//               {/* Error message */}
//               {error && <p className="text-red-600 font-bold">{error}</p>}

//               {/* Donor List Table */}
//               <table className="min-w-full">
//                 <thead>
//                   <tr>
//                     <th className="py-3 px-4 text-left font-bold text-teal-800 border-b-2 border-teal-100">Donor Name</th>
//                     <th className="py-3 px-4 text-left font-bold text-teal-800 border-b-2 border-teal-100">City</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {donorsByCity.map((donor, index) => (
//                     <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-teal-50'}>
//                       <td className="py-3 px-4 border-b border-teal-50 text-gray-800 font-medium">{donor.donor_name}</td>
//                       <td className="py-3 px-4 border-b border-teal-50 text-gray-800 font-medium">{donor.city}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Visual elements representing blood donation */}
//       <div className="fixed bottom-4 right-4 z-0 w-32 h-32 rounded-full border-4 border-red-500 border-opacity-30 animate-pulse"></div>
//       <div className="fixed top-16 left-8 z-0 w-24 h-24 rounded-full border-4 border-red-600 border-opacity-20"></div>
//       <div className="fixed bottom-24 left-12 z-0 w-16 h-16 rounded-full bg-red-500 bg-opacity-10"></div>
//     </div>
//   );
// }









import { useState, useEffect } from 'react';

export default function DonorInsights() {
  const [donorsSameGroup, setDonorsSameGroup] = useState([]);
  const [donorsByCity, setDonorsByCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState('New Delhi'); // Default city
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('A+'); // Default blood group
  const [donorCount, setDonorCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // List of cities
  const cities = ['New Delhi', 'Mumbai', 'Bangalore', 'Jaipur', 'Hyderabad', 'Chennai', 'Kolkata'];

  // List of blood groups
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  useEffect(() => {
    fetchDonorsSameGroup();
    fetchDonorsByCity(selectedCity);
  }, [selectedCity]);

  useEffect(() => {
    fetchDonorCountByGroup(selectedBloodGroup);
  }, [selectedBloodGroup]);

  // Fetch donors with the same blood group as the most requested
  const fetchDonorsSameGroup = () => {
    fetch('http://localhost:8000/donors-with-most-requested-blood-group')
      .then((response) => response.json())
      .then((data) => setDonorsSameGroup(data))
      .catch((error) => console.error('Error fetching donors with most requested blood group:', error));
  };

  // Fetch donors by city
  const fetchDonorsByCity = (city) => {
    setLoading(true);
    fetch(`http://localhost:8000/get-donors-by-city/${encodeURIComponent(city)}`)
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((donorArray) => ({
          donor_name: donorArray[0],
          city: city,
        }));
        setDonorsByCity(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching donors by city');
        setLoading(false);
      });
  };

  // Fetch donor count by blood group
  const fetchDonorCountByGroup = (group) => {
    fetch(`http://localhost:8000/donor-count/${encodeURIComponent(group)}`)
      .then((response) => response.json())
      .then((data) => {
        // Extract the number from the message string
        const match = data.message.match(/= (\d+)/);
        const count = match ? parseInt(match[1], 10) : 0;
        setDonorCount({
          group: group,
          count: count,
        });
      })
      .catch((error) => console.error('Error fetching donor count by group:', error));
  };

  return (
    <div className="min-h-screen p-6 relative">
      {/* Background styling with blood donation theme */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#f8f0f0',
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(220, 53, 69, 0.1) 2%, transparent 10%),
            radial-gradient(circle at 75% 44%, rgba(220, 53, 69, 0.15) 2%, transparent 10%),
            radial-gradient(circle at 46% 52%, rgba(220, 53, 69, 0.1) 2%, transparent 8%),
            radial-gradient(circle at 33% 63%, rgba(220, 53, 69, 0.13) 3%, transparent 8%),
            radial-gradient(circle at 80% 75%, rgba(220, 53, 69, 0.11) 2%, transparent 8%)
          `,
          backgroundSize: '60px 60px, 90px 90px, 70px 70px, 120px 120px, 80px 80px',
          backgroundRepeat: 'repeat',
          backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 100px, 30px 40px',
        }}
      ></div>

      <div className="max-w-6xl mx-auto bg-white shadow-xl p-0 relative z-10">
        {/* Header Bar */}
        <div className="bg-indigo-600 p-6">
          <h1 className="text-3xl font-bold text-white tracking-tight">Donor Insights Dashboard</h1>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* First Panel */}
            <div className="border-l-4 border-indigo-600 bg-white shadow-lg">
              <div className="bg-indigo-50 p-4 border-b border-indigo-100 flex items-center">
                <div className="w-2 h-6 bg-indigo-600 mr-3"></div>
                <h2 className="text-xl font-bold text-indigo-800">Most Requested Blood Group Donors</h2>
              </div>
              <div className="p-4">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 text-left font-bold text-indigo-800 border-b-2 border-indigo-100">Donor Name</th>
                      <th className="py-3 px-4 text-left font-bold text-indigo-800 border-b-2 border-indigo-100">Blood Group</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donorsSameGroup.map((donor, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-indigo-50'}>
                        <td className="py-3 px-4 border-b border-indigo-50 text-gray-800 font-medium">{donor.BD_NAME}</td>
                        <td className="py-3 px-4 border-b border-indigo-50 text-gray-800 font-medium">{donor.BD_BGROUP}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Second Panel */}
            <div className="border-l-4 border-blue-600 bg-white shadow-lg">
              <div className="bg-blue-50 p-4 border-b border-blue-100 flex items-center">
                <div className="w-2 h-6 bg-blue-600 mr-3"></div>
                <h2 className="text-xl font-bold text-blue-800">Donor Count by Blood Group</h2>
              </div>
              <div className="p-4">
                {/* Blood Group Selection */}
                <div className="mb-6 flex items-center">
                  <label className="block text-gray-700 font-bold mr-4" htmlFor="bloodGroup">
                    Select Blood Group:
                  </label>
                  <select
                    className="bg-white text-gray-800 border border-gray-300 p-2 w-40 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    id="bloodGroup"
                    value={selectedBloodGroup}
                    onChange={(e) => setSelectedBloodGroup(e.target.value)}
                  >
                    {bloodGroups.map((group) => (
                      <option key={group} value={group}>
                        {group}
                      </option>
                    ))}
                  </select>
                </div>

                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 text-left font-bold text-blue-800 border-b-2 border-blue-100">Blood Group</th>
                      <th className="py-3 px-4 text-left font-bold text-blue-800 border-b-2 border-blue-100">Donor Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donorCount ? (
                      <tr className="bg-white">
                        <td className="py-3 px-4 border-b border-blue-50 text-gray-800 font-medium">{donorCount.group}</td>
                        <td className="py-3 px-4 border-b border-blue-50 text-gray-800 font-medium">{donorCount.count}</td>
                      </tr>
                    ) : (
                      <tr>
                        <td colSpan="2" className="py-3 px-4 text-gray-600 italic">
                          No data available.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Third Panel */}
          <div className="border-l-4 border-teal-600 bg-white shadow-lg">
            <div className="bg-teal-50 p-4 border-b border-teal-100 flex items-center">
              <div className="w-2 h-6 bg-teal-600 mr-3"></div>
              <h2 className="text-xl font-bold text-teal-800">Donors By City</h2>
            </div>
            <div className="p-4">
              {/* City Selection */}
              <div className="mb-6 flex items-center">
                <label className="block text-gray-700 font-bold mr-4" htmlFor="city">
                  Select City:
                </label>
                <select
                  className="bg-white text-gray-800 border border-gray-300 p-2 w-64 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  id="city"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Loading indicator */}
              {loading && <p className="text-teal-600 font-bold">Loading data...</p>}

              {/* Error message */}
              {error && <p className="text-red-600 font-bold">{error}</p>}

              {/* Donor List Table */}
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-3 px-4 text-left font-bold text-teal-800 border-b-2 border-teal-100">Donor Name</th>
                    <th className="py-3 px-4 text-left font-bold text-teal-800 border-b-2 border-teal-100">City</th>
                  </tr>
                </thead>
                <tbody>
                  {donorsByCity.map((donor, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-teal-50'}>
                      <td className="py-3 px-4 border-b border-teal-50 text-gray-800 font-medium">{donor.donor_name}</td>
                      <td className="py-3 px-4 border-b border-teal-50 text-gray-800 font-medium">{donor.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Visual elements representing blood donation */}
      <div className="fixed bottom-4 right-4 z-0 w-32 h-32 rounded-full border-4 border-red-500 border-opacity-30 animate-pulse"></div>
      <div className="fixed top-16 left-8 z-0 w-24 h-24 rounded-full border-4 border-red-600 border-opacity-20"></div>
      <div className="fixed bottom-24 left-12 z-0 w-16 h-16 rounded-full bg-red-500 bg-opacity-10"></div>
    </div>
  );
}
