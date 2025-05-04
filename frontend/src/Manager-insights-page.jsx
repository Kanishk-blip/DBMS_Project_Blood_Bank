// import { useState, useEffect } from 'react';

// export default function ManagerInsights() {
//   const [averageBloodRequested, setAverageBloodRequested] = useState([]);
//   const [topManagers, setTopManagers] = useState([]);
//   const [managerRequests, setManagerRequests] = useState(null);
//   const [selectedManager, setSelectedManager] = useState("Meena Kapoor");

//   // Hardcoded manager mapping based on your data
//   const managerMapping = {
//     "Meena Kapoor": 201,
//     "Rajesh Khanna": 202,
//     "Anu Verma": 203,
//     "Ravi Ranjan": 204,
//     "Prakash Mehta": 205,
//     "Suman Ghosh": 206,
//     "Lakshmi R": 207,
//   };

//   useEffect(() => {
//     fetchAverageBloodRequested();
//     fetchTopManagers();
//     fetchManagerRequests(managerMapping[selectedManager]);  // Initial load for default manager
//   }, []);

//   const fetchAverageBloodRequested = () => {
//     fetch('http://localhost:8000/average-blood-by-manager')
//       .then(response => response.json())
//       .then(data => setAverageBloodRequested(data))
//       .catch(error => console.error('Error fetching average blood requested by manager:', error));
//   };

//   const fetchTopManagers = () => {
//     fetch('http://localhost:8000/top-3-busiest-managers')
//       .then(response => response.json())
//       .then(data => setTopManagers(data))
//       .catch(error => console.error('Error fetching top managers:', error));
//   };

//   const fetchManagerRequests = (managerId) => {
//     fetch(`http://localhost:8000/manager/requests/${managerId}`)
//       .then(response => response.json())
//       .then(data => {
//         const totalRequests = data.message.split(" = ")[1];
//         setManagerRequests({
//           manager_name: Object.keys(managerMapping).find(key => managerMapping[key] === managerId),
//           total_requests: totalRequests,
//         });
//       })
//       .catch(error => console.error('Error fetching manager requests:', error));
//   };

//   const handleManagerChange = (e) => {
//     const selectedName = e.target.value;
//     setSelectedManager(selectedName);

//     const managerId = managerMapping[selectedName];
//     if (managerId) {
//       fetchManagerRequests(managerId);
//     } else {
//       console.error("Manager ID not found for the selected manager name.");
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-3xl font-bold text-blue-800 mb-8 pb-2 border-b-2 border-blue-800">Manager Insights Page</h1>

//         {/* Panel 1: Average blood quantity requested for each manager */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
//           <div className="bg-blue-700 text-white p-4">
//             <h2 className="font-semibold text-xl">Average Blood Quantity Requested (Function)</h2>
//           </div>
//           <div className="p-4">
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Manager Name</th>
//                   <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Average Blood Quantity Requested (in litre)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {averageBloodRequested.map((manager, index) => (
//                   <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{manager.M_NAME}</td>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{manager.AVG_REQUESTED}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Panel 2: Top 3 busiest managers */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
//           <div className="bg-blue-700 text-white p-4">
//             <h2 className="font-semibold text-xl">Top 3 Busiest Managers (Function)</h2>
//           </div>
//           <div className="p-4">
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

//         {/* Panel 3: Count Requests by Manager */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="bg-blue-700 text-white p-4">
//             <h2 className="font-semibold text-xl">Count Requests by Manager (Procedure)</h2>
//           </div>
//           <div className="p-4">
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="manager">
//                 Select Manager:
//               </label>
//               <select 
//                 className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="manager"
//                 value={selectedManager}
//                 onChange={handleManagerChange}
//               >
//                 {Object.keys(managerMapping).map((managerName) => (
//                   <option key={managerMapping[managerName]} value={managerName}>
//                     {managerName}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             {managerRequests && (
//               <table className="min-w-full bg-white">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Manager Name</th>
//                     <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Total Requests</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="bg-white">
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{managerRequests.manager_name}</td>
//                     <td className="py-2 px-4 border-b border-gray-200 text-sm">{managerRequests.total_requests}</td>
//                   </tr>
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

export default function ManagerInsights() {
  const [averageBloodRequested, setAverageBloodRequested] = useState([]);
  const [topManagers, setTopManagers] = useState([]);
  const [managerRequests, setManagerRequests] = useState(null);
  const [selectedManager, setSelectedManager] = useState("Meena Kapoor");

  const managerMapping = {
    "Meena Kapoor": 201,
    "Rajesh Khanna": 202,
    "Anu Verma": 203,
    "Ravi Ranjan": 204,
    "Prakash Mehta": 205,
    "Suman Ghosh": 206,
    "Lakshmi R": 207,
  };

  useEffect(() => {
    fetchAverageBloodRequested();
    fetchTopManagers();
    fetchManagerRequests(managerMapping[selectedManager]);
  }, []);

  const fetchAverageBloodRequested = () => {
    fetch('http://localhost:8000/average-blood-by-manager')
      .then(response => response.json())
      .then(data => setAverageBloodRequested(data))
      .catch(error => console.error('Error fetching average blood requested by manager:', error));
  };

  const fetchTopManagers = () => {
    fetch('http://localhost:8000/top-3-busiest-managers')
      .then(response => response.json())
      .then(data => setTopManagers(data))
      .catch(error => console.error('Error fetching top managers:', error));
  };

  const fetchManagerRequests = (managerId) => {
    fetch(`http://localhost:8000/manager/requests/${managerId}`)
      .then(response => response.json())
      .then(data => {
        const totalRequests = data.message.split(" = ")[1];
        setManagerRequests({
          manager_name: Object.keys(managerMapping).find(key => managerMapping[key] === managerId),
          total_requests: totalRequests,
        });
      })
      .catch(error => console.error('Error fetching manager requests:', error));
  };

  const handleManagerChange = (e) => {
    const selectedName = e.target.value;
    setSelectedManager(selectedName);

    const managerId = managerMapping[selectedName];
    if (managerId) {
      fetchManagerRequests(managerId);
    }
  };

  return (
    <div className="min-h-screen p-6 relative">
      {/* Soft background pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#f3f4f6',
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(59,130,246,0.1) 2%, transparent 10%),
            radial-gradient(circle at 80% 40%, rgba(59,130,246,0.08) 2%, transparent 8%),
            radial-gradient(circle at 50% 70%, rgba(59,130,246,0.1) 3%, transparent 8%)
          `,
          backgroundSize: '80px 80px, 100px 100px, 120px 120px',
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className="max-w-6xl mx-auto bg-white shadow-xl relative z-10">
        <div className="bg-blue-600 p-6">
          <h1 className="text-3xl font-bold text-white">Manager Insights Dashboard</h1>
        </div>

        <div className="p-6 grid grid-cols-1 gap-6">
          {/* Average Blood Quantity Requested */}
          <div className="border-l-4 border-indigo-600 bg-white shadow-lg">
            <div className="bg-indigo-50 p-4 border-b border-indigo-100 flex items-center">
              <div className="w-2 h-6 bg-indigo-600 mr-3"></div>
              <h2 className="text-xl font-bold text-indigo-800">Average Blood Quantity Requested (Function)</h2>
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-3 px-4 text-left font-bold text-indigo-800 border-b-2 border-indigo-100">Manager Name</th>
                    <th className="py-3 px-4 text-left font-bold text-indigo-800 border-b-2 border-indigo-100">Avg Quantity (litres)</th>
                  </tr>
                </thead>
                <tbody>
                  {averageBloodRequested.map((manager, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-indigo-50'}>
                      <td className="py-3 px-4 border-b border-indigo-100 text-gray-800">{manager.M_NAME}</td>
                      <td className="py-3 px-4 border-b border-indigo-100 text-gray-800">{manager.AVG_REQUESTED}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top 3 Busiest Managers */}
          <div className="border-l-4 border-blue-600 bg-white shadow-lg">
            <div className="bg-blue-50 p-4 border-b border-blue-100 flex items-center">
              <div className="w-2 h-6 bg-blue-600 mr-3"></div>
              <h2 className="text-xl font-bold text-blue-800">Top 3 Busiest Managers (Function)</h2>
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-3 px-4 text-left font-bold text-blue-800 border-b-2 border-blue-100">Manager Name</th>
                    <th className="py-3 px-4 text-left font-bold text-blue-800 border-b-2 border-blue-100">Total Requests</th>
                  </tr>
                </thead>
                <tbody>
                  {topManagers.map((manager, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                      <td className="py-3 px-4 border-b border-blue-100 text-gray-800">{manager.M_NAME}</td>
                      <td className="py-3 px-4 border-b border-blue-100 text-gray-800">{manager.TOTAL_REQUESTS}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Count Requests by Manager (Dropdown) */}
          <div className="border-l-4 border-teal-600 bg-white shadow-lg">
            <div className="bg-teal-50 p-4 border-b border-teal-100 flex items-center">
              <div className="w-2 h-6 bg-teal-600 mr-3"></div>
              <h2 className="text-xl font-bold text-teal-800">Count Requests by Manager (Procedure)</h2>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label htmlFor="manager" className="block text-gray-700 font-semibold mb-2">Select Manager:</label>
                <select
                  id="manager"
                  value={selectedManager}
                  onChange={handleManagerChange}
                  className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  {Object.keys(managerMapping).map((managerName) => (
                    <option key={managerMapping[managerName]} value={managerName}>
                      {managerName}
                    </option>
                  ))}
                </select>
              </div>
              {managerRequests && (
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 text-left font-bold text-teal-800 border-b-2 border-teal-100">Manager Name</th>
                      <th className="py-3 px-4 text-left font-bold text-teal-800 border-b-2 border-teal-100">Total Requests</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border-b border-teal-100 text-gray-800">{managerRequests.manager_name}</td>
                      <td className="py-3 px-4 border-b border-teal-100 text-gray-800">{managerRequests.total_requests}</td>
                    </tr>
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
