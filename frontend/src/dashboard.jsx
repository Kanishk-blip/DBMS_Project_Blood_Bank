// // import { useState, useEffect } from 'react';
// // import { 
// //   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
// //   PieChart, Pie, Cell, ResponsiveContainer,
// //   LineChart, Line
// // } from 'recharts';
// // import { Search, Clock, Droplet, Hospital, MapPin, Users, UserCheck, Activity, AlertCircle } from 'lucide-react';

// // // Mock API calls - would be replaced with actual fetch calls in production
// // const mockApiCall = (endpoint) => {
// //   const mockData = {
// //     '/average-blood-quantity': [
// //       { reci_Bgrp: 'A+', avg_quantity: 450 },
// //       { reci_Bgrp: 'B+', avg_quantity: 390 },
// //       { reci_Bgrp: 'AB+', avg_quantity: 330 },
// //       { reci_Bgrp: 'O+', avg_quantity: 520 },
// //       { reci_Bgrp: 'A-', avg_quantity: 280 },
// //       { reci_Bgrp: 'B-', avg_quantity: 270 },
// //       { reci_Bgrp: 'AB-', avg_quantity: 210 },
// //       { reci_Bgrp: 'O-', avg_quantity: 350 }
// //     ],
// //     '/city-blood-quantity-range': [
// //       { City_Name: 'Delhi', min_qty: 200, max_qty: 600 },
// //       { City_Name: 'Mumbai', min_qty: 180, max_qty: 550 },
// //       { City_Name: 'Bangalore', min_qty: 220, max_qty: 480 },
// //       { City_Name: 'Chennai', min_qty: 250, max_qty: 520 }
// //     ],
// //     '/donors-count-by-city': [
// //       { City_Name: 'Delhi', donor_count: 145 },
// //       { City_Name: 'Mumbai', donor_count: 178 },
// //       { City_Name: 'Bangalore', donor_count: 115 },
// //       { City_Name: 'Chennai', donor_count: 97 },
// //       { City_Name: 'Kolkata', donor_count: 89 }
// //     ],
// //     '/recipients-handled-by-staff': [
// //       { reco_Name: 'Dr. Sharma', total_recipients: 67 },
// //       { reco_Name: 'Dr. Patel', total_recipients: 83 },
// //       { reco_Name: 'Dr. Gupta', total_recipients: 45 },
// //       { reco_Name: 'Dr. Singh', total_recipients: 92 }
// //     ],
// //     '/average-blood-by-manager': [
// //       { m_Name: 'Rajesh Kumar', avg_requested: 420 },
// //       { m_Name: 'Priya Verma', avg_requested: 380 },
// //       { m_Name: 'Amit Shah', avg_requested: 450 },
// //       { m_Name: 'Sanjay Mehta', avg_requested: 390 }
// //     ],
// //     '/blood-group-balance': [
// //       { BLOOD_GROUP: 'A+', DONORS: 145, RECIPIENTS: 132 },
// //       { BLOOD_GROUP: 'O-', DONORS: 65, RECIPIENTS: 89 },
// //       { BLOOD_GROUP: 'B+', DONORS: 124, RECIPIENTS: 108 },
// //       { BLOOD_GROUP: 'AB+', DONORS: 45, RECIPIENTS: 52 },
// //       { BLOOD_GROUP: 'O+', DONORS: 189, RECIPIENTS: 203 },
// //       { BLOOD_GROUP: 'A-', DONORS: 53, RECIPIENTS: 48 },
// //       { BLOOD_GROUP: 'B-', DONORS: 67, RECIPIENTS: 61 }
// //     ],
// //     '/top-3-busiest-managers': [
// //       { m_Name: 'Priya Verma', total_requests: 178 },
// //       { m_Name: 'Amit Shah', total_requests: 156 },
// //       { m_Name: 'Rajesh Kumar', total_requests: 134 }
// //     ]
// //   };
  
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve(mockData[endpoint] || []);
// //     }, 500);
// //   });
// // };

// // // Color constants
// // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#ff7300'];
// // const BLOOD_GROUP_COLORS = {
// //   'A+': '#FF5252',
// //   'A-': '#FF8A80',
// //   'B+': '#536DFE',
// //   'B-': '#8C9EFF',
// //   'AB+': '#7C4DFF',
// //   'AB-': '#B388FF',
// //   'O+': '#00BFA5',
// //   'O-': '#64FFDA'
// // };

// // export default function BloodCampDashboard() {
// //   const [activeTab, setActiveTab] = useState('overview');
// //   const [bloodGroupData, setBloodGroupData] = useState([]);
// //   const [avgBloodQuantity, setAvgBloodQuantity] = useState([]);
// //   const [donorsByCity, setDonorsByCity] = useState([]);
// //   const [staffPerformance, setStaffPerformance] = useState([]);
// //   const [managersData, setManagersData] = useState([]);
// //   const [cityRange, setCityRange] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [selectedCity, setSelectedCity] = useState('');
// //   const [cityDonors, setCityDonors] = useState([]);
// //   const [hospitalRequests, setHospitalRequests] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setIsLoading(true);
      
// //       try {
// //         // In real application, these would be actual API calls
// //         const bloodBalance = await mockApiCall('/blood-group-balance');
// //         const avgQuantity = await mockApiCall('/average-blood-quantity');
// //         const donorsCity = await mockApiCall('/donors-count-by-city');
// //         const staff = await mockApiCall('/recipients-handled-by-staff');
// //         const managers = await mockApiCall('/average-blood-by-manager');
// //         const cityBloodRange = await mockApiCall('/city-blood-quantity-range');
// //         const topManagers = await mockApiCall('/top-3-busiest-managers');
        
// //         setBloodGroupData(bloodBalance);
// //         setAvgBloodQuantity(avgQuantity);
// //         setDonorsByCity(donorsCity);
// //         setStaffPerformance(staff);
// //         setManagersData([...managers, ...topManagers]);
// //         setCityRange(cityBloodRange);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };
    
// //     fetchData();
// //   }, []);

// //   const fetchCityData = (city) => {
// //     // These would be actual API calls in production
// //     setSelectedCity(city);
// //     setCityDonors([
// //       { donor_name: 'Rahul Sharma' },
// //       { donor_name: 'Priya Singh' },
// //       { donor_name: 'Ajay Patel' },
// //       { donor_name: 'Meera Kapoor' }
// //     ]);
// //     setHospitalRequests([
// //       { hosp_name: 'City Hospital', hosp_needed_Bgrp: 'A+', hosp_needed_qnty: 450 },
// //       { hosp_name: 'General Medical Center', hosp_needed_Bgrp: 'O+', hosp_needed_qnty: 320 },
// //       { hosp_name: 'Life Care Hospital', hosp_needed_Bgrp: 'B+', hosp_needed_qnty: 280 }
// //     ]);
// //   };

// //   // Prepare data for the blood group ratio pie chart
// //   const bloodGroupRatioData = bloodGroupData.map(item => ({
// //     name: item.BLOOD_GROUP,
// //     donors: item.DONORS,
// //     recipients: item.RECIPIENTS,
// //     ratio: ((item.DONORS / item.RECIPIENTS) * 100).toFixed(1)
// //   }));

// //   if (isLoading) {
// //     return (
// //       <div className="flex items-center justify-center h-screen">
// //         <div className="text-center">
// //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
// //           <p className="mt-4 text-lg font-medium text-gray-700">Loading blood camp data...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="bg-gray-50 min-h-screen">
// //       {/* Header */}
// //       <header className="bg-white shadow">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
// //           <div className="flex justify-between items-center">
// //             <div className="flex items-center">
// //               <Droplet className="h-8 w-8 text-red-500" />
// //               <h1 className="ml-2 text-xl font-bold text-gray-900">Blood Camp Management System</h1>
// //             </div>
// //             <div className="flex items-center bg-gray-100 p-2 rounded-lg">
// //               <Search className="h-5 w-5 text-gray-500" />
// //               <input 
// //                 type="text" 
// //                 placeholder="Search..." 
// //                 className="bg-transparent border-none focus:outline-none ml-2 text-sm"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Navigation Tabs */}
// //       <div className="bg-white shadow-sm">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <nav className="flex space-x-8">
// //             <button 
// //               onClick={() => setActiveTab('overview')} 
// //               className={`px-3 py-4 text-sm font-medium border-b-2 ${activeTab === 'overview' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
// //             >
// //               Dashboard Overview
// //             </button>
// //             <button 
// //               onClick={() => setActiveTab('bloodGroups')} 
// //               className={`px-3 py-4 text-sm font-medium border-b-2 ${activeTab === 'bloodGroups' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
// //             >
// //               Blood Group Analysis
// //             </button>
// //             <button 
// //               onClick={() => setActiveTab('cityData')} 
// //               className={`px-3 py-4 text-sm font-medium border-b-2 ${activeTab === 'cityData' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
// //             >
// //               City-wise Data
// //             </button>
// //             <button 
// //               onClick={() => setActiveTab('staff')} 
// //               className={`px-3 py-4 text-sm font-medium border-b-2 ${activeTab === 'staff' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
// //             >
// //               Staff Performance
// //             </button>
// //           </nav>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {activeTab === 'overview' && (
// //           <div className="space-y-6">
// //             {/* Summary Cards */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //               <div className="bg-white rounded-lg shadow p-6">
// //                 <div className="flex items-center">
// //                   <div className="p-3 rounded-full bg-red-100 text-red-600">
// //                     <Droplet className="h-6 w-6" />
// //                   </div>
// //                   <div className="ml-4">
// //                     <h2 className="text-sm font-medium text-gray-500">Total Blood Groups</h2>
// //                     <p className="text-2xl font-semibold text-gray-900">{bloodGroupData.length}</p>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               <div className="bg-white rounded-lg shadow p-6">
// //                 <div className="flex items-center">
// //                   <div className="p-3 rounded-full bg-blue-100 text-blue-600">
// //                     <Users className="h-6 w-6" />
// //                   </div>
// //                   <div className="ml-4">
// //                     <h2 className="text-sm font-medium text-gray-500">Total Donors</h2>
// //                     <p className="text-2xl font-semibold text-gray-900">
// //                       {bloodGroupData.reduce((sum, item) => sum + item.DONORS, 0)}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               <div className="bg-white rounded-lg shadow p-6">
// //                 <div className="flex items-center">
// //                   <div className="p-3 rounded-full bg-green-100 text-green-600">
// //                     <UserCheck className="h-6 w-6" />
// //                   </div>
// //                   <div className="ml-4">
// //                     <h2 className="text-sm font-medium text-gray-500">Total Recipients</h2>
// //                     <p className="text-2xl font-semibold text-gray-900">
// //                       {bloodGroupData.reduce((sum, item) => sum + item.RECIPIENTS, 0)}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               <div className="bg-white rounded-lg shadow p-6">
// //                 <div className="flex items-center">
// //                   <div className="p-3 rounded-full bg-purple-100 text-purple-600">
// //                     <Hospital className="h-6 w-6" />
// //                   </div>
// //                   <div className="ml-4">
// //                     <h2 className="text-sm font-medium text-gray-500">Cities Covered</h2>
// //                     <p className="text-2xl font-semibold text-gray-900">{donorsByCity.length}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Blood Group Balance Chart */}
// //             <div className="bg-white rounded-lg shadow p-6">
// //               <h3 className="text-lg font-medium text-gray-900 mb-4">Blood Group Balance Analysis</h3>
// //               <div className="h-80">
// //                 <ResponsiveContainer width="100%" height="100%">
// //                   <BarChart
// //                     data={bloodGroupData}
// //                     margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
// //                   >
// //                     <CartesianGrid strokeDasharray="3 3" />
// //                     <XAxis dataKey="BLOOD_GROUP" />
// //                     <YAxis />
// //                     <Tooltip />
// //                     <Legend />
// //                     <Bar dataKey="DONORS" name="Donors" fill="#0088FE" />
// //                     <Bar dataKey="RECIPIENTS" name="Recipients" fill="#FF8042" />
// //                   </BarChart>
// //                 </ResponsiveContainer>
// //               </div>
// //             </div>
            
// //             {/* Dual Charts */}
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //               {/* Top 3 Busiest Managers */}
// //               <div className="bg-white rounded-lg shadow p-6">
// //                 <h3 className="text-lg font-medium text-gray-900 mb-4">Top 3 Busiest Blood Bank Managers</h3>
// //                 <div className="h-64">
// //                   <ResponsiveContainer width="100%" height="100%">
// //                     <BarChart
// //                       data={managersData.filter(m => m.total_requests).slice(0, 3)}
// //                       margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
// //                     >
// //                       <CartesianGrid strokeDasharray="3 3" />
// //                       <XAxis dataKey="m_Name" />
// //                       <YAxis />
// //                       <Tooltip />
// //                       <Bar dataKey="total_requests" name="Total Requests" fill="#8884d8" />
// //                     </BarChart>
// //                   </ResponsiveContainer>
// //                 </div>
// //               </div>
              
// //               {/* Donors by City */}
// //               <div className="bg-white rounded-lg shadow p-6">
// //                 <h3 className="text-lg font-medium text-gray-900 mb-4">Donors Count by City</h3>
// //                 <div className="h-64">
// //                   <ResponsiveContainer width="100%" height="100%">
// //                     <PieChart>
// //                       <Pie
// //                         data={donorsByCity}
// //                         cx="50%"
// //                         cy="50%"
// //                         labelLine={false}
// //                         outerRadius={80}
// //                         fill="#8884d8"
// //                         dataKey="donor_count"
// //                         nameKey="City_Name"
// //                         label={({ City_Name, donor_count }) => `${City_Name}: ${donor_count}`}
// //                       >
// //                         {donorsByCity.map((entry, index) => (
// //                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //                         ))}
// //                       </Pie>
// //                       <Tooltip />
// //                     </PieChart>
// //                   </ResponsiveContainer>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
        
// //         {activeTab === 'bloodGroups' && (
// //           <div className="space-y-6">
// //             <div className="bg-white rounded-lg shadow p-6">
// //               <h3 className="text-lg font-medium text-gray-900 mb-4">Average Blood Quantity Requested by Blood Group</h3>
// //               <div className="h-80">
// //                 <ResponsiveContainer width="100%" height="100%">
// //                   <BarChart
// //                     data={avgBloodQuantity}
// //                     margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
// //                   >
// //                     <CartesianGrid strokeDasharray="3 3" />
// //                     <XAxis dataKey="reci_Bgrp" />
// //                     <YAxis />
// //                     <Tooltip />
// //                     <Bar dataKey="avg_quantity" name="Average Quantity (ml)" fill="#FF5252">
// //                       {avgBloodQuantity.map((entry, index) => (
// //                         <Cell key={`cell-${index}`} fill={BLOOD_GROUP_COLORS[entry.reci_Bgrp] || COLORS[index % COLORS.length]} />
// //                       ))}
// //                     </Bar>
// //                   </BarChart>
// //                 </ResponsiveContainer>
// //               </div>
// //             </div>
            
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //               <div className="bg-white rounded-lg shadow p-6">
// //                 <h3 className="text-lg font-medium text-gray-900 mb-4">Blood Group Donor-to-Recipient Ratio</h3>
// //                 <div className="h-80">
// //                   <ResponsiveContainer width="100%" height="100%">
// //                     <PieChart>
// //                       <Pie
// //                         data={bloodGroupRatioData}
// //                         cx="50%"
// //                         cy="50%"
// //                         labelLine={true}
// //                         outerRadius={80}
// //                         fill="#8884d8"
// //                         dataKey="donors"
// //                         nameKey="name"
// //                         label={({ name, ratio }) => `${name}: ${ratio}%`}
// //                       >
// //                         {bloodGroupRatioData.map((entry, index) => (
// //                           <Cell key={`cell-${index}`} fill={BLOOD_GROUP_COLORS[entry.name] || COLORS[index % COLORS.length]} />
// //                         ))}
// //                       </Pie>
// //                       <Tooltip />
// //                     </PieChart>
// //                   </ResponsiveContainer>
// //                 </div>
// //               </div>
              
// //               <div className="bg-white rounded-lg shadow p-6">
// //                 <h3 className="text-lg font-medium text-gray-900 mb-4">Blood Group Analysis</h3>
// //                 <div className="space-y-4 mt-6">
// //                   {bloodGroupData.map((group) => (
// //                     <div key={group.BLOOD_GROUP} className="flex items-center">
// //                       <div 
// //                         className="w-4 h-4 rounded-full mr-2" 
// //                         style={{ backgroundColor: BLOOD_GROUP_COLORS[group.BLOOD_GROUP] || COLORS[0] }}
// //                       ></div>
// //                       <span className="w-12 font-medium">{group.BLOOD_GROUP}</span>
// //                       <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2.5">
// //                         <div 
// //                           className="h-2.5 rounded-full" 
// //                           style={{ 
// //                             width: `${Math.min(100, (group.DONORS / group.RECIPIENTS) * 100)}%`,
// //                             backgroundColor: BLOOD_GROUP_COLORS[group.BLOOD_GROUP] || COLORS[0]
// //                           }}
// //                         ></div>
// //                       </div>
// //                       <span className="text-sm text-gray-600">
// //                         {group.DONORS} donors / {group.RECIPIENTS} recipients
// //                       </span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
        
// //         {activeTab === 'cityData' && (
// //           <div className="space-y-6">
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //               <div className="bg-white rounded-lg shadow p-6">
// //                 <h3 className="text-lg font-medium text-gray-900 mb-4">Donors Count by City</h3>
// //                 <div className="h-80">
// //                   <ResponsiveContainer width="100%" height="100%">
// //                     <BarChart
// //                       data={donorsByCity}
// //                       margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
// //                     >
// //                       <CartesianGrid strokeDasharray="3 3" />
// //                       <XAxis dataKey="City_Name" />
// //                       <YAxis />
// //                       <Tooltip />
// //                       <Legend />
// //                       <Bar dataKey="donor_count" name="Donor Count" fill="#00C49F" />
// //                     </BarChart>
// //                   </ResponsiveContainer>
// //                 </div>
// //               </div>
              
// //               <div className="bg-white rounded-lg shadow p-6">
// //                 <h3 className="text-lg font-medium text-gray-900 mb-4">Blood Quantity Range by City</h3>
// //                 <div className="h-80">
// //                   <ResponsiveContainer width="100%" height="100%">
// //                     <BarChart
// //                       data={cityRange}
// //                       margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
// //                     >
// //                       <CartesianGrid strokeDasharray="3 3" />
// //                       <XAxis dataKey="City_Name" />
// //                       <YAxis />
// //                       <Tooltip />
// //                       <Legend />
// //                       <Bar dataKey="min_qty" name="Minimum Quantity" fill="#8884d8" />
// //                       <Bar dataKey="max_qty" name="Maximum Quantity" fill="#82ca9d" />
// //                     </BarChart>
// //                   </ResponsiveContainer>
// //                 </div>
// //               </div>
// //             </div>
            
// //             <div className="bg-white rounded-lg shadow p-6">
// //               <h3 className="text-lg font-medium text-gray-900 mb-4">City Details</h3>
// //               <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Select City:</label>
// //                 <select 
// //                   className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
// //                   value={selectedCity}
// //                   onChange={(e) => fetchCityData(e.target.value)}
// //                 >
// //                   <option value="">-- Select a city --</option>
// //                   {donorsByCity.map((city) => (
// //                     <option key={city.City_Name} value={city.City_Name}>
// //                       {city.City_Name}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>
              
// //               {selectedCity && (
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
// //                   <div className="bg-gray-50 p-4 rounded-lg">
// //                     <h4 className="font-medium text-gray-900 mb-2 flex items-center">
// //                       <Users className="h-5 w-5 mr-2 text-blue-500" />
// //                       Donors in {selectedCity}
// //                     </h4>
// //                     <ul className="divide-y divide-gray-200">
// //                       {cityDonors.map((donor, idx) => (
// //                         <li key={idx} className="py-2">
// //                           <p className="text-sm text-gray-800">{donor.donor_name}</p>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
                  
// //                   <div className="bg-gray-50 p-4 rounded-lg">
// //                     <h4 className="font-medium text-gray-900 mb-2 flex items-center">
// //                       <Hospital className="h-5 w-5 mr-2 text-green-500" />
// //                       Hospital Requests in {selectedCity}
// //                     </h4>
// //                     <ul className="divide-y divide-gray-200">
// //                       {hospitalRequests.map((request, idx) => (
// //                         <li key={idx} className="py-2">
// //                           <p className="text-sm font-medium text-gray-800">{request.hosp_name}</p>
// //                           <p className="text-xs text-gray-600">
// //                             Needs {request.hosp_needed_qnty} ml of {request.hosp_needed_Bgrp} blood
// //                           </p>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         )}
        
// //         {activeTab === 'staff' && (
// //           <div className="space-y-6">
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //               <div className="bg-white rounded-lg shadow p-6">
// //                 <h3 className="text-lg font-medium text-gray-900 mb-4">Recipients Handled by Staff</h3>
// //                 <div className="h-80">
// //                   <ResponsiveContainer width="100%" height="100%">
// //                     <BarChart
// //                       data={staffPerformance}
// //                       margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
// //                     >
// //                       <CartesianGrid strokeDasharray="3 3" />
// //                       <XAxis dataKey="reco_Name" />
// //                       <YAxis />
// //                       <Tooltip />
// //                       <Legend />
// //                       <Bar dataKey="total_recipients" name="Total Recipients" fill="#8884d8" />
// //                     </BarChart>
// //                   </ResponsiveContainer>
// //                 </div>
// //               </div>
              
// //               <div className="bg-white rounded-lg shadow p-6">
// //                 <h3 className="text-lg font-medium text-gray-900 mb-4">Average Blood Quantity by Manager</h3>
// //                 <div className="h-80">
// //                   <ResponsiveContainer width="100%" height="100%">
// //                     <LineChart
// //                       data={managersData.filter(m => m.avg_requested)}
// //                       margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
// //                     >
// //                       <CartesianGrid strokeDasharray="3 3" />
// //                       <XAxis dataKey="m_Name" />
// //                       <YAxis />
// //                       <Tooltip />
// //                       <Legend />
// //                       <Line type="monotone" dataKey="avg_requested" name="Avg. Blood Requested (ml)" stroke="#FF8042" activeDot={{ r: 8 }} />
// //                     </LineChart>
// //                   </ResponsiveContainer>
// //                 </div>
// //               </div>
// //             </div>
            
// //             <div className="bg-white rounded-lg shadow">
// //               <div className="px-6 py-4 border-b border-gray-200">
// //                 <h3 className="text-lg font-medium text-gray-900">Staff Performance Summary</h3>
// //               </div>
// //               <div className="overflow-x-auto">
// //                 <table className="min-w-full divide-y divide-gray-200">
// //                   <thead className="bg-gray-50">
// //                     <tr>
// //                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                         Staff Name
// //                       </th>
// //                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                         Recipients Handled
// //                       </th>
// //                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                         Performance
// //                       </th>
// //                     </tr>
// //                   </thead>
// //                   <tbody className="bg-white divide-y divide-gray-200">
// //                     {staffPerformance.map((staff) => (
// //                       <tr key={staff.reco_Name}>
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <div className="text-sm font-medium text-gray-900">{staff.reco_Name}</div>
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <div className="text-sm text-gray-900">{staff.total_recipients}</div>
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <div className="flex items-center">
// //                             <div className="flex-1 h-2 bg-gray-200 rounded-full">
// //                               <div 
// //                                 className="h-2 bg-green-500 rounded-full" 
// //                                 style={{ width: `${(staff.total_recipients / 100) * 100}%` }}
// //                               ></div>
// //                             </div>
// //                             <span className="ml-2 text-sm text-gray-600">
// //                               {Math.round((staff.total_recipients / 100) * 100)}%
// //                             </span>
// //                           </div>
// //                         </td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-white border-t border-gray-200 mt-10">
// //         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
// //           <div className="flex justify-between items-center">
// //             <p className="text-sm text-gray-500">© 2025 Blood Camp Management System</p>
// //             <div className="flex space-x-6">
// //               <a href="#" className="text-gray-400 hover:text-gray-500">
// //                 <span className="sr-only">About</span>
// //                 <Activity className="h-5 w-5" />
// //               </a>
// //               <a href="#" className="text-gray-400 hover:text-gray-500">
// //                 <span className="sr-only">Help</span>
// //                 <AlertCircle className="h-5 w-5" />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }


// import { useState } from 'react';
// import { PieChart, Pie, LineChart, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // Mock data based on the SQL queries
// const mockData = {
//   bloodGroupAverages: [
//     { bloodGroup: 'A+', avgQuantity: 450 },
//     { bloodGroup: 'B+', avgQuantity: 410 },
//     { bloodGroup: 'O+', avgQuantity: 520 },
//     { bloodGroup: 'AB+', avgQuantity: 380 },
//     { bloodGroup: 'A-', avgQuantity: 320 },
//     { bloodGroup: 'B-', avgQuantity: 300 },
//     { bloodGroup: 'O-', avgQuantity: 350 },
//     { bloodGroup: 'AB-', avgQuantity: 280 },
//   ],
//   cityQuantities: [
//     { cityName: 'Mumbai', minQty: 250, maxQty: 800 },
//     { cityName: 'Delhi', minQty: 200, maxQty: 750 },
//     { cityName: 'Bangalore', minQty: 300, maxQty: 650 },
//     { cityName: 'Chennai', minQty: 270, maxQty: 700 },
//     { cityName: 'Hyderabad', minQty: 230, maxQty: 680 },
//   ],
//   donorsByCity: [
//     { cityName: 'Mumbai', donorCount: 156 },
//     { cityName: 'Delhi', donorCount: 142 },
//     { cityName: 'Bangalore', donorCount: 98 },
//     { cityName: 'Chennai', donorCount: 87 },
//     { cityName: 'Hyderabad', donorCount: 76 },
//   ],
//   recipientsByStaff: [
//     { staffName: 'Dr. Agarwal', totalRecipients: 45 },
//     { staffName: 'Dr. Sharma', totalRecipients: 32 },
//     { staffName: 'Dr. Patel', totalRecipients: 28 },
//     { staffName: 'Dr. Singh', totalRecipients: 36 },
//     { staffName: 'Dr. Kumar', totalRecipients: 41 },
//   ],
//   managerAvgRequests: [
//     { managerName: 'Mr. Verma', avgRequested: 420 },
//     { managerName: 'Mrs. Gupta', avgRequested: 380 },
//     { managerName: 'Mr. Joshi', avgRequested: 460 },
//     { managerName: 'Ms. Shah', avgRequested: 340 },
//   ],
//   donorsByStaff: [
//     { staffName: 'Dr. Agarwal', totalDonorsRegistered: 65 },
//     { staffName: 'Dr. Sharma', totalDonorsRegistered: 43 },
//     { staffName: 'Dr. Patel', totalDonorsRegistered: 58 },
//     { staffName: 'Dr. Singh', totalDonorsRegistered: 49 },
//     { staffName: 'Dr. Kumar', totalDonorsRegistered: 72 },
//   ],
//   donorsInMultiHospitalCities: [
//     { donorName: 'Rajesh Kumar', cityName: 'Mumbai' },
//     { donorName: 'Priya Singh', cityName: 'Delhi' },
//     { donorName: 'Amit Patel', cityName: 'Mumbai' },
//     { donorName: 'Sunita Sharma', cityName: 'Delhi' },
//     { donorName: 'Vikram Joshi', cityName: 'Bangalore' },
//     { donorName: 'Neha Gupta', cityName: 'Mumbai' },
//     { donorName: 'Rahul Verma', cityName: 'Chennai' },
//   ],
//   donorsMostRequestedGroup: [
//     { donorName: 'Kiran Shah', bloodGroup: 'O+' },
//     { donorName: 'Suresh Kumar', bloodGroup: 'O+' },
//     { donorName: 'Anita Patel', bloodGroup: 'O+' },
//     { donorName: 'Ravi Sharma', bloodGroup: 'O+' },
//     { donorName: 'Meena Verma', bloodGroup: 'O+' },
//   ],
//   hospitalsHighestQuantity: [
//     { hospitalName: 'Apollo Hospital', bloodGroup: 'O+', quantity: 850 },
//     { hospitalName: 'Fortis Healthcare', bloodGroup: 'A+', quantity: 850 },
//   ],
//   citiesWithDonorsAndRecipients: [
//     { cityName: 'Mumbai' },
//     { cityName: 'Delhi' },
//     { cityName: 'Bangalore' },
//     { cityName: 'Chennai' },
//   ],
//   busiestManagers: [
//     { managerName: 'Mr. Verma', totalRequests: 156 },
//     { managerName: 'Mrs. Gupta', totalRequests: 132 },
//     { managerName: 'Mr. Joshi', totalRequests: 124 },
//   ],
//   bloodGroupBalance: [
//     { bloodGroup: 'A+', donors: 250, recipients: 210 },
//     { bloodGroup: 'B+', donors: 180, recipients: 195 },
//     { bloodGroup: 'O+', donors: 300, recipients: 320 },
//     { bloodGroup: 'AB+', donors: 120, recipients: 105 },
//     { bloodGroup: 'A-', donors: 80, recipients: 65 },
//     { bloodGroup: 'B-', donors: 75, recipients: 60 },
//     { bloodGroup: 'O-', donors: 120, recipients: 140 },
//     { bloodGroup: 'AB-', donors: 40, recipients: 35 },
//   ],
//   donorsByCity: {
//     'Mumbai': ['Rajesh Kumar', 'Amit Patel', 'Neha Gupta', 'Sarika Jain', 'Deepak Tiwari'],
//     'Delhi': ['Priya Singh', 'Sunita Sharma', 'Vikas Mehra', 'Anjali Gupta'],
//     'Bangalore': ['Vikram Joshi', 'Kavita Rao', 'Suresh Menon'],
//     'Chennai': ['Rahul Verma', 'Divya Krishnan', 'Shankar Nair']
//   },
//   managerRequests: {
//     1: 56,
//     2: 48,
//     3: 63,
//     4: 41
//   },
//   donorCountByGroup: {
//     'A+': 250,
//     'B+': 180,
//     'O+': 300,
//     'AB+': 120,
//     'A-': 80,
//     'B-': 75,
//     'O-': 120,
//     'AB-': 40
//   },
//   hospitalRequestsByCity: {
//     'Mumbai': [
//       { hospitalName: 'Apollo Hospital', bloodGroup: 'O+', quantity: 850 },
//       { hospitalName: 'Lilavati Hospital', bloodGroup: 'B+', quantity: 650 },
//       { hospitalName: 'Breach Candy Hospital', bloodGroup: 'A+', quantity: 730 }
//     ],
//     'Delhi': [
//       { hospitalName: 'AIIMS Delhi', bloodGroup: 'O+', quantity: 820 },
//       { hospitalName: 'Fortis Hospital', bloodGroup: 'AB+', quantity: 580 }
//     ],
//     'Bangalore': [
//       { hospitalName: 'Manipal Hospital', bloodGroup: 'A+', quantity: 690 },
//       { hospitalName: 'Narayana Health', bloodGroup: 'O-', quantity: 480 }
//     ]
//   }
// };

// // Color palette for charts
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#8dd1e1'];

// const BloodBankDashboard = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [selectedCity, setSelectedCity] = useState('Mumbai');
//   const [selectedManager, setSelectedManager] = useState(1);
//   const [selectedBloodGroup, setSelectedBloodGroup] = useState('O+');

//   const cityOptions = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad'];
//   const managerOptions = [1, 2, 3, 4];
//   const bloodGroupOptions = ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'];

//   // Component for blood group balance data
//   const BloodGroupBalance = () => {
//     return (
//       <div className="mb-8">
//         <h3 className="text-xl font-semibold mb-4">Blood Group Balance Analysis</h3>
//         <div className="bg-white rounded-lg shadow-md p-4">
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart
//               data={mockData.bloodGroupBalance}
//               margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="bloodGroup" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="donors" name="Donors" fill="#0088FE" />
//               <Bar dataKey="recipients" name="Recipients" fill="#FF8042" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     );
//   };

//   // Component for city statistics
//   const CityStatistics = () => {
//     return (
//       <div className="mb-8">
//         <h3 className="text-xl font-semibold mb-4">City Statistics</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-lg shadow-md p-4">
//             <h4 className="text-lg font-medium mb-2">Donors by City</h4>
//             <ResponsiveContainer width="100%" height={250}>
//               <PieChart>
//                 <Pie
//                   data={mockData.donorsByCity}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   outerRadius={80}
//                   fill="#8884d8"
//                   dataKey="donorCount"
//                   nameKey="cityName"
//                   label={({ cityName, donorCount }) => `${cityName}: ${donorCount}`}
//                 >
//                   {mockData.donorsByCity.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-4">
//             <h4 className="text-lg font-medium mb-2">Min/Max Quantity by City</h4>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={mockData.cityQuantities}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="cityName" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="minQty" name="Min Quantity" fill="#8884d8" />
//                 <Bar dataKey="maxQty" name="Max Quantity" fill="#82ca9d" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Component for staff performance
//   const StaffPerformance = () => {
//     return (
//       <div className="mb-8">
//         <h3 className="text-xl font-semibold mb-4">Staff Performance</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-lg shadow-md p-4">
//             <h4 className="text-lg font-medium mb-2">Recipients by Staff</h4>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={mockData.recipientsByStaff}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="staffName" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="totalRecipients" fill="#8884d8" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-4">
//             <h4 className="text-lg font-medium mb-2">Donors Registered by Staff</h4>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={mockData.donorsByStaff}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="staffName" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="totalDonorsRegistered" fill="#82ca9d" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Component for Manager statistics 
//   const ManagerStatistics = () => {
//     return (
//       <div className="mb-8">
//         <h3 className="text-xl font-semibold mb-4">Manager Statistics</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-lg shadow-md p-4">
//             <h4 className="text-lg font-medium mb-2">Average Requested by Manager</h4>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={mockData.managerAvgRequests}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="managerName" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="avgRequested" fill="#00C49F" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-4">
//             <h4 className="text-lg font-medium mb-2">Top 3 Busiest Managers</h4>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={mockData.busiestManagers}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="managerName" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="totalRequests" fill="#FF8042" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Procedures/Functions section
//   const ProceduresFunctions = () => {
//     return (
//       <div className="space-y-6">
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-xl font-semibold mb-4">Get Donors By City</h3>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Select City</label>
//             <select 
//               className="border rounded-md px-3 py-2 w-full"
//               value={selectedCity}
//               onChange={(e) => setSelectedCity(e.target.value)}
//             >
//               {cityOptions.map(city => (
//                 <option key={city} value={city}>{city}</option>
//               ))}
//             </select>
//           </div>
//           <div className="mt-4">
//             <h4 className="font-medium mb-2">Donors:</h4>
//             <ul className="list-disc list-inside">
//               {mockData.donorsByCity[selectedCity]?.map((donor, index) => (
//                 <li key={index} className="py-1">{donor}</li>
//               )) || <li>No donors found</li>}
//             </ul>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-xl font-semibold mb-4">Count Requests By Manager</h3>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Select Manager ID</label>
//             <select 
//               className="border rounded-md px-3 py-2 w-full"
//               value={selectedManager}
//               onChange={(e) => setSelectedManager(Number(e.target.value))}
//             >
//               {managerOptions.map(id => (
//                 <option key={id} value={id}>{id}</option>
//               ))}
//             </select>
//           </div>
//           <div className="mt-4 p-3 bg-gray-100 rounded-md">
//             <p>Total requests received by Manager ID {selectedManager} = {mockData.managerRequests[selectedManager]}</p>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-xl font-semibold mb-4">Donor Count By Blood Group</h3>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Select Blood Group</label>
//             <select 
//               className="border rounded-md px-3 py-2 w-full"
//               value={selectedBloodGroup}
//               onChange={(e) => setSelectedBloodGroup(e.target.value)}
//             >
//               {bloodGroupOptions.map(group => (
//                 <option key={group} value={group}>{group}</option>
//               ))}
//             </select>
//           </div>
//           <div className="mt-4 p-3 bg-gray-100 rounded-md">
//             <p>Total donors with blood group {selectedBloodGroup}: {mockData.donorCountByGroup[selectedBloodGroup]}</p>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-xl font-semibold mb-4">Hospital Requests By City</h3>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Select City</label>
//             <select 
//               className="border rounded-md px-3 py-2 w-full"
//               value={selectedCity}
//               onChange={(e) => setSelectedCity(e.target.value)}
//             >
//               {cityOptions.slice(0, 3).map(city => (
//                 <option key={city} value={city}>{city}</option>
//               ))}
//             </select>
//           </div>
//           <div className="mt-4">
//             <h4 className="font-medium mb-2">Hospital Requests:</h4>
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 border-b text-left">Hospital Name</th>
//                   <th className="py-2 px-4 border-b text-left">Blood Group</th>
//                   <th className="py-2 px-4 border-b text-left">Quantity</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {mockData.hospitalRequestsByCity[selectedCity]?.map((request, index) => (
//                   <tr key={index}>
//                     <td className="py-2 px-4 border-b">{request.hospitalName}</td>
//                     <td className="py-2 px-4 border-b">{request.bloodGroup}</td>
//                     <td className="py-2 px-4 border-b">{request.quantity}</td>
//                   </tr>
//                 )) || (
//                   <tr>
//                     <td colSpan="3" className="py-2 px-4 border-b">No data available</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Component for detailed lists
//   // const DetailedLists = () => {
//   //   return (
//   //     <div className="space-y-6">
//   //       <div className="bg-white rounded-lg shadow-md p-6">
//   //         <h3 className="text-xl font-semibold mb-4">Donors in Cities with Multiple Hospitals</h3>
//   //         <table className="min-w-full">
//   //           <thead>
//   //             <tr>
//   //               <th className="py-2 px-4 border-b text-left">Donor Name</th>
//   //               <th className="py-2 px-4 border-b text-left">City</th>
//   //             </tr>
//   //           </thead>
//   //           <tbody>
//   //             {mockData.donorsInMultiHospitalCities.map((donor, index) => (
//   //               <tr key={index}>
//   //                 <td className="py-2 px-4 border-b">{donor.donorName}</td>
//   //                 <td className="py-2 px-4 border-b">{donor.cityName}</td>
//   //               </tr>
//   //             ))}
//   //           </tbody>
//   //         </table>
//   //       </div>

//   //       <div className="bg-white rounded-lg shadow-md p-6">
//   //         <h3 className="text-xl font-semibold mb-4">Donors with Most Requested Blood Group</h3>
//   //         <table className="min-w-full">
//   //           <thead>
//   //             <tr>
//   //               <th className="py-2 px-4 border-b text-left">Donor Name</th>
//   //               <th className="py-2 px-4 border-b text-left">Blood Group</th>
//   //             </tr>
//   //           </thead>
//   //           <tbody>
//   //             {mockData.donorsMostRequestedGroup.map((donor, index) => (
//   //               <tr key={index}>
//   //                 <td className="py-2 px-4 border-b">{donor.donorName}</td>
//   //                 <td className="py-2 px-4 border-b">{donor.bloodGroup}</td>
//   //               </tr>
//   //             ))}
//   //           </tbody>
//   //         </table>
//   //       </div>

//   //       <div className="bg-white rounded-lg shadow-md p-6">
//   //         <h3 className="text-xl font-semibold mb-4">Hospitals Requesting Highest Blood Quantity</h3>
//   //         <table className="min-w-full">
//   //           <thead>
//   //             <tr>
//   //               <th className="py-2 px-4 border-b text-left">Hospital Name</th>
//   //               <th className="py-2 px-4 border-b text-left">Blood Group</th>
//   //               <th className="py-2 px-4 border-b text-left">Quantity</th>
//   //             </tr>
//   //           </thead>
//   //           <tbody>
//   //             {mockData.hospitalsHighestQuantity.map((hospital, index) => (
//   //               <tr key={index}>
//   //                 <td className="py-2 px-4 border-b">{hospital.hospitalName}</td>
//   //                 <td className="py-2 px-4 border-b">{hospital.bloodGroup}</td>
//   //                 <td className="py-2 px-4 border-b">{hospital.quantity}</td>
//   //               </tr>
//   //             ))}
//   //           </tbody>
//   //         </table>
//   //       </div>

//   //       <div className="bg-white rounded-lg shadow-md p-6">
//   //         <h3 className="text-xl font-semibold mb-4">Cities with Both Donors and Recipients</h3>
//   //         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//   //           {mockData.citiesWithDonorsAndRecipients.map((city, index) => (
//   //             <div key={index} className="bg-gray-100 p-3 rounded-md text-center">
//   //               <span className="inline-block text-red-600 text-xl font-bold mb-1">📍</span>
//   //               <p>{city.cityName}</p>
//   //             </div>
//   //           ))}
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );
//   // };

//   // Stats Cards for Dashboard
//   // const StatsCards = () => {
//   //   const totalDonors = mockData.bloodGroupBalance.reduce((sum, item) => sum + item.donors, 0);
//   //   const totalRecipients = mockData.bloodGroupBalance.reduce((sum, item) => sum + item.recipients, 0);
//   //   const totalCities = mockData.donorsByCity.length;
//   //   const totalHospitals = Object.values(mockData.hospitalRequestsByCity).flat().length;

//   //   return (
//   //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//   //       <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
//   //         <div className="rounded-full bg-blue-100 p-3 mr-4 flex items-center justify-center">
//   //           <span className="text-blue-600 text-xl">💧</span>
//   //         </div>
//   //         <div>
//   //           <p className="text-sm text-gray-500">Total Donors</p>
//   //           <p className="text-2xl font-semibold">{totalDonors}</p>
//   //         </div>
//   //       </div>
//   //       <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
//   //         <div className="rounded-full bg-green-100 p-3 mr-4 flex items-center justify-center">
//   //           <span className="text-green-600 text-xl">👥</span>
//   //         </div>
//   //         <div>
//   //           <p className="text-sm text-gray-500">Total Recipients</p>
//   //           <p className="text-2xl font-semibold">{totalRecipients}</p>
//   //         </div>
//   //       </div>
//   //       <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
//   //         <div className="rounded-full bg-orange-100 p-3 mr-4 flex items-center justify-center">
//   //           <span className="text-orange-600 text-xl">📍</span>
//   //         </div>
//   //         <div>
//   //           <p className="text-sm text-gray-500">Total Cities</p>
//   //           <p className="text-2xl font-semibold">{totalCities}</p>
//   //         </div>
//   //       </div>
//   //       <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
//   //         <div className="rounded-full bg-purple-100 p-3 mr-4 flex items-center justify-center">
//   //           <span className="text-purple-600 text-xl">🏥</span>
//   //         </div>
//   //         <div>
//   //           <p className="text-sm text-gray-500">Total Hospitals</p>
//   //           <p className="text-2xl font-semibold">{totalHospitals}</p>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );
//   // };

//   // Fetch functions for API calls (commented out as requested)
//   /*
//   // Function to fetch blood group averages
//   const fetchBloodGroupAverages = async () => {
//     try {
//       const response = await fetch('/api/blood-group-averages');
//       const data = await response.json();
//       // Update state with fetched data
//     } catch (error) {
//       console.error('Error fetching blood group averages:', error);
//     }
//   };

//   // Function to fetch city quantities
//   const fetchCityQuantities = async () => {
//     try {
//       const response = await fetch('/api/city-quantities');
//       const data = await response.json();
//       // Update state with fetched data
//     } catch (error) {
//       console.error('Error fetching city quantities:', error);
//     }
//   };

//   // Function to fetch donors by city
//   const fetchDonorsByCity = async () => {
//     try {
//       const response = await fetch('/api/donors-by-city');
//       const data = await response.json();
//       // Update state with fetched data
//     } catch (error) {
//       console.error('Error fetching donors by city:', error);
//     }
//   };

//   // Function to fetch recipients by staff
//   const fetchRecipientsByStaff = async () => {
//     try {
//       const response = await fetch('/api/recipients-by-staff');
//       const data = await response.json();
//       // Update state with fetched data
//     } catch (error) {
//       console.error('Error fetching recipients by staff:', error);
//     }
//   };
//   */

//   // return (
//   //   <div className="min-h-screen bg-gray-50">
//   //     {/* Header */}
//   //     <header className="bg-red-600 text-white shadow-md">
//   //       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//   //         <div className="flex items-center">
//   //           <span className="text-2xl mr-2">💧</span>
//   //           <h1 className="text-xl font-bold">Blood Bank Management System</h1>
//   //         </div>
//   //       </div>
//   //     </header>

//       {/* Navigation */}
//       {/* <nav className="bg-white shadow-sm">
//         <div className="container mx-auto px-4">
//           <div className="flex space-x-1 overflow-x-auto">
//             <button
//               className={`px-4 py-3 font-medium text-sm ${activeTab === 'dashboard' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500'}`}
//               onClick={() => setActiveTab('dashboard')}
//             >
//               Dashboard
//             </button>
//             <button
//               className={`px-4 py-3 font-medium text-sm ${activeTab === 'analytics' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500'}`}
//               onClick={() => setActiveTab('analytics')}
//             >
//               Analytics
//             </button>
//             <button
//               className={`px-4 py-3 font-medium text-sm ${activeTab === 'procedures' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500'}`}
//               onClick={() => setActiveTab('procedures')}
//             >
//               Procedures & Functions
//             </button>
//             <button
//               className={`px-4 py-3 font-medium text-sm ${activeTab === 'detailedLists' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500'}`}
//               onClick={() => setActiveTab('detailedLists')}
//             >
//               Detailed Lists
//             </button>
//           </div>
//         </div> */}





















// claude final code

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// export default function LandingDashboard() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [activePage, setActivePage] = useState(null);
  
//   // Update the clock
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   // Dashboard pages
//   const pages = [
//     {
//       id: 'donor-insights',
//       title: 'Donor Insights',
//       description: 'Analytics and statistics about blood donors',
//       color: 'indigo',
//       icon: '📊'
//     },
//     {
//       id: 'donor-management',
//       title: 'Donor Management',
//       description: 'Register and manage donor information',
//       color: 'red',
//       icon: '👥'
//     },
//     {
//       id: 'blood-inventory',
//       title: 'Blood Inventory',
//       description: 'Track blood units and manage stock levels',
//       color: 'teal',
//       icon: '🧪'
//     },
//     {
//       id: 'camp-scheduler',
//       title: 'Camp Scheduler',
//       description: 'Organize and manage donation camps',
//       color: 'amber',
//       icon: '📅'
//     },
//     {
//       id: 'reports',
//       title: 'Reports & Analytics',
//       description: 'Generate detailed reports and statistics',
//       color: 'blue',
//       icon: '📈'
//     }
//   ];

//   // Blood group statistics - sample data
//   const bloodStats = [
//     { group: 'A+', level: 70, donors: 128 },
//     { group: 'B+', level: 45, donors: 89 },
//     { group: 'O+', level: 30, donors: 64 },
//     { group: 'AB+', level: 85, donors: 36 },
//     { group: 'A-', level: 60, donors: 27 },
//     { group: 'B-', level: 50, donors: 18 },
//     { group: 'O-', level: 20, donors: 42 },
//     { group: 'AB-', level: 75, donors: 15 }
//   ];
  
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
      
//       {/* Visual elements representing blood donation */}
//       <div className="fixed bottom-4 right-4 z-0 w-32 h-32 rounded-full border-4 border-red-500 border-opacity-30 animate-pulse"></div>
//       <div className="fixed top-16 left-8 z-0 w-24 h-24 rounded-full border-4 border-red-600 border-opacity-20"></div>
//       <div className="fixed bottom-24 left-12 z-0 w-16 h-16 rounded-full bg-red-500 bg-opacity-10"></div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header with date and time */}
//         <div className="bg-white shadow-lg rounded-lg mb-6 overflow-hidden">
//           <div className="flex flex-col md:flex-row">
//             <div className="bg-red-600 text-white p-6 md:w-1/3">
//               <h1 className="text-3xl font-bold">Blood Camp Management</h1>
//               <p className="mt-2 opacity-80">Central Dashboard</p>
//             </div>
//             <div className="p-6 flex flex-col md:flex-row justify-between items-center md:w-2/3">
//               <div>
//                 <p className="text-gray-500 font-medium">Welcome back, Admin</p>
//                 <p className="text-sm text-gray-400">Last login: Today at 9:45 AM</p>
//               </div>
//               <div className="mt-4 md:mt-0 text-right">
//                 <p className="text-2xl font-bold text-gray-700">
//                   {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </p>
//                 <p className="text-gray-500">
//                   {currentTime.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Main content area */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Left sidebar - Navigation */}
//           <div className="lg:col-span-1">
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <div className="bg-indigo-600 p-4">
//                 <h2 className="text-xl font-bold text-white">Navigation</h2>
//               </div>
              
//               <div className="divide-y divide-gray-100">
//                 {pages.map((page) => (
//                   <div 
//                     key={page.id}
//                     className={`p-4 cursor-pointer transition-all duration-300 ${
//                       activePage === page.id ? `bg-${page.color}-50 border-l-4 border-${page.color}-600` : 'hover:bg-gray-50'
//                     }`}
//                     onClick={() => setActivePage(page.id)}
//                   >
//                     <div className="flex items-center">
//                       <div className={`w-10 h-10 rounded-full bg-${page.color}-100 text-${page.color}-600 flex items-center justify-center mr-3 text-xl`}>
//                         {page.icon}
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-gray-800">{page.title}</h3>
//                         <p className="text-sm text-gray-500">{page.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Quick Actions Card */}
//             <div className="bg-white shadow-lg rounded-lg mt-6 overflow-hidden">
//               <div className="bg-teal-600 p-4">
//                 <h2 className="text-xl font-bold text-white">Quick Actions</h2>
//               </div>
//               <div className="p-4 space-y-2">
//                 <button className="w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg flex items-center justify-center font-medium transition-colors">
//                   <span className="mr-2">+</span> New Donation Entry
//                 </button>
//                 <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-lg flex items-center justify-center font-medium transition-colors">
//                   <span className="mr-2">📋</span> Schedule Camp
//                 </button>
//                 <button className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-lg flex items-center justify-center font-medium transition-colors">
//                   <span className="mr-2">🔍</span> Find Donor
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           {/* Right content area */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Blood Level Overview */}
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <div className="bg-red-600 p-4">
//                 <h2 className="text-xl font-bold text-white">Blood Inventory Overview</h2>
//               </div>
//               <div className="p-4">
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                   {bloodStats.map((item) => (
//                     <div key={item.group} className="bg-gray-50 rounded-lg p-3 text-center">
//                       <div className="text-2xl font-bold text-red-600">{item.group}</div>
//                       <div className="mt-2">
//                         <div className="w-full bg-gray-200 rounded-full h-2.5">
//                           <div 
//                             className={`h-2.5 rounded-full ${item.level < 30 ? 'bg-red-500' : item.level < 60 ? 'bg-amber-500' : 'bg-green-500'}`} 
//                             style={{ width: `${item.level}%` }}
//                           ></div>
//                         </div>
//                         <div className="flex justify-between text-xs mt-1">
//                           <span className="text-gray-500">{item.donors} donors</span>
//                           <span className="text-gray-600">{item.level}%</span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
            
//             {/* Recent Activities & Upcoming Events */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Recent Activities */}
//               <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//                 <div className="bg-blue-600 p-4">
//                   <h2 className="text-xl font-bold text-white">Recent Activities</h2>
//                 </div>
//                 <div className="p-4">
//                   <div className="space-y-4">
//                     {[
//                       { time: '10:30 AM', text: 'New donor registered', user: 'Rahul S.' },
//                       { time: '09:15 AM', text: 'Blood units transferred', user: 'Priya M.' },
//                       { time: 'Yesterday', text: 'Inventory updated', user: 'Amit K.' },
//                       { time: 'Yesterday', text: 'Camp scheduled', user: 'Neha D.' }
//                     ].map((item, idx) => (
//                       <div key={idx} className="flex items-start">
//                         <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 mr-2"></div>
//                         <div className="flex-1">
//                           <div className="text-sm text-gray-500">{item.time}</div>
//                           <div className="text-gray-800">{item.text}</div>
//                           <div className="text-xs text-blue-600">by {item.user}</div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
              
//               {/* Upcoming Events */}
//               <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//                 <div className="bg-amber-600 p-4">
//                   <h2 className="text-xl font-bold text-white">Upcoming Camps</h2>
//                 </div>
//                 <div className="p-4">
//                   <div className="space-y-4">
//                     {[
//                       { date: 'May 5', location: 'Shanti Hospital', count: 45 },
//                       { date: 'May 12', location: 'City College', count: 120 },
//                       { date: 'May 18', location: 'Tech Park', count: 80 }
//                     ].map((item, idx) => (
//                       <div key={idx} className="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-500">
//                         <div className="flex justify-between">
//                           <div className="font-medium text-gray-800">{item.location}</div>
//                           <div className="text-amber-600 font-bold">{item.date}</div>
//                         </div>
//                         <div className="text-sm text-gray-500">Expected donors: {item.count}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* System Status */}
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <div className="bg-emerald-600 p-4">
//                 <h2 className="text-xl font-bold text-white">System Status</h2>
//               </div>
//               <div className="p-4">
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                   {[
//                     { label: 'Donors', value: '2,456', change: '+12', color: 'text-green-500' },
//                     { label: 'Units Collected', value: '1,789', change: '+28', color: 'text-green-500' },
//                     { label: 'Hospitals', value: '42', change: '+0', color: 'text-gray-500' },
//                     { label: 'Active Camps', value: '3', change: '+1', color: 'text-green-500' },
//                     { label: 'Critical Groups', value: '2', change: '-1', color: 'text-amber-500' },
//                     { label: 'Staff', value: '24', change: '+2', color: 'text-green-500' }
//                   ].map((stat, idx) => (
//                     <div key={idx} className="bg-gray-50 rounded-lg p-4">
//                       <div className="text-gray-500 text-sm">{stat.label}</div>
//                       <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
//                       <div className={`text-xs ${stat.color} mt-1`}>{stat.change} this week</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// Final code without routes 







// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// export default function LandingDashboard() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [activePage, setActivePage] = useState(null);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const pages = [
//     {
//       id: 'donor-insights',
//       title: 'Donor Insights',
//       description: 'Analytics and statistics about blood donors',
//       color: 'indigo',
//       icon: '📊'
//     },
//     {
//       id: 'donor-management',
//       title: 'Donor Management',
//       description: 'Register and manage donor information',
//       color: 'red',
//       icon: '👥'
//     },
//     {
//       id: 'blood-inventory',
//       title: 'Blood Inventory',
//       description: 'Track blood units and manage stock levels',
//       color: 'teal',
//       icon: '🧪'
//     },
//     {
//       id: 'reports',
//       title: 'Reports & Analytics',
//       description: 'Generate detailed reports and statistics',
//       color: 'blue',
//       icon: '📈'
//     }
//   ];

//   const bloodStats = [
//     { group: 'A+', level: 70, donors: 128 },
//     { group: 'B+', level: 45, donors: 89 },
//     { group: 'O+', level: 30, donors: 64 },
//     { group: 'AB+', level: 85, donors: 36 },
//     { group: 'A-', level: 60, donors: 27 },
//     { group: 'B-', level: 50, donors: 18 },
//     { group: 'O-', level: 20, donors: 42 },
//     { group: 'AB-', level: 75, donors: 15 }
//   ];

//   return (
//     <div className="min-h-screen p-6 relative">
//       {/* Decorative background */}
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
//         backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 100px, 30px 40px'
//       }}></div>

//       {/* Decorative Pulses */}
//       <div className="fixed bottom-4 right-4 z-0 w-32 h-32 rounded-full border-4 border-red-500 border-opacity-30 animate-pulse"></div>
//       <div className="fixed top-16 left-8 z-0 w-24 h-24 rounded-full border-4 border-red-600 border-opacity-20"></div>
//       <div className="fixed bottom-24 left-12 z-0 w-16 h-16 rounded-full bg-red-500 bg-opacity-10"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="bg-white shadow-lg rounded-lg mb-6 overflow-hidden">
//           <div className="flex flex-col md:flex-row">
//             <div className="bg-red-600 text-white p-6 md:w-1/3">
//               <h1 className="text-3xl font-bold">Blood Camp Management</h1>
//               <p className="mt-2 opacity-80">Central Dashboard</p>
//             </div>
//             <div className="p-6 flex flex-col md:flex-row justify-between items-center md:w-2/3">
//               <div>
//                 <p className="text-gray-500 font-medium">Welcome back, Admin</p>
//                 <p className="text-sm text-gray-400">Last login: Today at 9:45 AM</p>
//               </div>
//               <div className="mt-4 md:mt-0 text-right">
//                 <p className="text-2xl font-bold text-gray-700">
//                   {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </p>
//                 <p className="text-gray-500">
//                   {currentTime.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Navigation */}
//           <div className="lg:col-span-1">
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <div className="bg-indigo-600 p-4">
//                 <h2 className="text-xl font-bold text-white">Navigation</h2>
//               </div>
//               <div className="divide-y divide-gray-100">
//                 {pages.map((page) => (
//                   <div
//                     key={page.id}
//                     className={`p-4 cursor-pointer transition-all duration-300 ${
//                       activePage === page.id ? `bg-${page.color}-50 border-l-4 border-${page.color}-600` : 'hover:bg-gray-50'
//                     }`}
//                     onClick={() => setActivePage(page.id)}
//                   >
//                     <div className="flex items-center">
//                       <div className={`w-10 h-10 rounded-full bg-${page.color}-100 text-${page.color}-600 flex items-center justify-center mr-3 text-xl`}>
//                         {page.icon}
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-gray-800">{page.title}</h3>
//                         <p className="text-sm text-gray-500">{page.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Blood Inventory Overview */}
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <div className="bg-red-600 p-4">
//                 <h2 className="text-xl font-bold text-white">Blood Inventory Overview</h2>
//               </div>
//               <div className="p-4">
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                   {bloodStats.map((item) => (
//                     <div key={item.group} className="bg-gray-50 rounded-lg p-3 text-center">
//                       <div className="text-2xl font-bold text-red-600">{item.group}</div>
//                       <div className="mt-2">
//                         <div className="w-full bg-gray-200 rounded-full h-2.5">
//                           <div
//                             className={`h-2.5 rounded-full ${item.level < 30 ? 'bg-red-500' : item.level < 60 ? 'bg-amber-500' : 'bg-green-500'}`}
//                             style={{ width: `${item.level}%` }}
//                           ></div>
//                         </div>
//                         <div className="flex justify-between text-xs mt-1">
//                           <span className="text-gray-500">{item.donors} donors</span>
//                           <span className="text-gray-600">{item.level}%</span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* System Status */}
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <div className="bg-emerald-600 p-4">
//                 <h2 className="text-xl font-bold text-white">System Status</h2>
//               </div>
//               <div className="p-4">
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                   {[
//                     { label: 'Donors', value: '2,456', change: '+12', color: 'text-green-500' },
//                     { label: 'Units Collected', value: '1,789', change: '+28', color: 'text-green-500' },
//                     { label: 'Hospitals', value: '42', change: '+0', color: 'text-gray-500' },
//                     { label: 'Active Camps', value: '3', change: '+1', color: 'text-green-500' },
//                     { label: 'Critical Groups', value: '2', change: '-1', color: 'text-amber-500' },
//                     { label: 'Staff', value: '24', change: '+2', color: 'text-green-500' }
//                   ].map((stat, idx) => (
//                     <div key={idx} className="bg-gray-50 rounded-lg p-4">
//                       <div className="text-gray-500 text-sm">{stat.label}</div>
//                       <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
//                       <div className={`text-xs ${stat.color} mt-1`}>{stat.change} this week</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>  
//     </div>
//   );
// }






//  final gpt code with routes but without section dynamics





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DonorPage from './donorpage';
// import BloodBankOverview from './BloodBankOverview';
// import CityWiseStatisticsPage from './City-Wise-Statistics-Page';
// import BloodGroup from './BloodGroup';

// export default function LandingDashboard() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [activePage, setActivePage] = useState(null);
//   const [bloodStats, setBloodStats] = useState([]);

//   // Live Clock
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   // Fetch blood group balance data from API
//   useEffect(() => {
//     axios.get('/blood-group-balance')
//       .then(res => {
//         const data = res.data.map(item => {
//           const level = Math.max(0, 100 - (item.RECIPIENTS * 10)); // Simulate level
//           return {
//             group: item.BLOOD_GROUP,
//             level,
//             donors: item.DONORS
//           };
//         });
//         setBloodStats(data);
//       })
//       .catch(err => {
//         console.error("Error fetching blood group data:", err);
//       });
//   }, []);

//   const pages = [
//     { id: 'donor-insights', title: 'Donor Insights', description: 'Analytics and statistics about blood donors', color: 'indigo', icon: '📊' },
//     { id: 'blood-bank-overview', title: 'Blood Bank Overview', description: 'Detailed blood balance data', color: 'red', icon: '🩸' },
//     { id: 'city-wise-stats', title: 'City Wise Statistics', description: 'Breakdown by cities', color: 'teal', icon: '🏙️' },
//     { id: 'blood-group', title: 'Blood Group', description: 'Group-wise donors and usage', color: 'blue', icon: '🧬' }
//   ];

//   const renderActivePage = () => {
//     switch (activePage) {
//       case 'donor-insights':
//         return <DonorPage />;
//       case 'blood-bank-overview':
//         return <BloodBankOverview />;
//       case 'city-wise-stats':
//         return <CityWiseStatisticsPage />;
//       case 'blood-group':
//         return <BloodGroup />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen p-6 relative">
//       {/* Background and Pulse Effects (Same as before) */}
//       <div className="absolute inset-0 z-0" style={{ backgroundColor: '#f8f0f0' }}></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="bg-white shadow-lg rounded-lg mb-6 overflow-hidden">
//           <div className="flex flex-col md:flex-row">
//             <div className="bg-red-600 text-white p-6 md:w-1/3">
//               <h1 className="text-3xl font-bold">Blood Camp Management</h1>
//               <p className="mt-2 opacity-80">Central Dashboard</p>
//             </div>
//             <div className="p-6 flex flex-col md:flex-row justify-between items-center md:w-2/3">
//               <div>
//                 <p className="text-gray-500 font-medium">Welcome back, Admin</p>
//               </div>
//               <div className="mt-4 md:mt-0 text-right">
//                 <p className="text-2xl font-bold text-gray-700">
//                   {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </p>
//                 <p className="text-gray-500">
//                   {currentTime.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Sidebar Navigation */}
//           <div className="lg:col-span-1">
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <div className="bg-indigo-600 p-4">
//                 <h2 className="text-xl font-bold text-white">Navigation</h2>
//               </div>
//               <div className="divide-y divide-gray-100">
//                 {pages.map((page) => (
//                   <div
//                     key={page.id}
//                     className={`p-4 cursor-pointer transition-all duration-300 ${activePage === page.id
//                       ? `bg-${page.color}-50 border-l-4 border-${page.color}-600`
//                       : 'hover:bg-gray-50'
//                       }`}
//                     onClick={() => setActivePage(page.id)}
//                   >
//                     <div className="flex items-center">
//                       <div className={`w-10 h-10 rounded-full bg-${page.color}-100 text-${page.color}-600 flex items-center justify-center mr-3 text-xl`}>
//                         {page.icon}
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-gray-800">{page.title}</h3>
//                         <p className="text-sm text-gray-500">{page.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-6">
//             {!activePage && (
//               <>
//                 {/* Default Blood Inventory Overview */}
//                 <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//                   <div className="bg-red-600 p-4">
//                     <h2 className="text-xl font-bold text-white">Blood Inventory Overview</h2>
//                   </div>
//                   <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
//                     {bloodStats.map((item) => (
//                       <div key={item.group} className="bg-gray-50 rounded-lg p-3 text-center">
//                         <div className="text-2xl font-bold text-red-600">{item.group}</div>
//                         <div className="mt-2">
//                           <div className="w-full bg-gray-200 rounded-full h-2.5">
//                             <div
//                               className={`h-2.5 rounded-full ${item.level < 30 ? 'bg-red-500' : item.level < 60 ? 'bg-amber-500' : 'bg-green-500'}`}
//                               style={{ width: `${item.level}%` }}
//                             ></div>
//                           </div>
//                           <div className="flex justify-between text-xs mt-1">
//                             <span className="text-gray-500">{item.donors} donors</span>
//                             <span className="text-gray-600">{item.level}%</span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* System Status */}
//                 <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//                   <div className="bg-emerald-600 p-4">
//                     <h2 className="text-xl font-bold text-white">System Status</h2>
//                   </div>
//                   <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
//                     {/* Dummy Static Stats */}
//                     {[
//                       { label: 'Donors', value: '2,456', change: '+12', color: 'text-green-500' },
//                       { label: 'Units Collected', value: '1,789', change: '+28', color: 'text-green-500' },
//                       { label: 'Hospitals', value: '42', change: '+0', color: 'text-gray-500' },
//                       { label: 'Active Camps', value: '3', change: '+1', color: 'text-green-500' },
//                       { label: 'Critical Groups', value: '2', change: '-1', color: 'text-amber-500' },
//                       { label: 'Staff', value: '24', change: '+2', color: 'text-green-500' }
//                     ].map((stat, idx) => (
//                       <div key={idx} className="bg-gray-50 rounded-lg p-4">
//                         <div className="text-gray-500 text-sm">{stat.label}</div>
//                         <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
//                         <div className={`text-xs ${stat.color} mt-1`}>{stat.change} this week</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </>
//             )}

//             {/* Render Active Page */}
//             {activePage && (
//               <div className="bg-white shadow-lg rounded-lg p-6">
//                 {renderActivePage()}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DonorPage from './donorpage';
import BloodBankOverview from './BloodBankOverview';
import CityWiseStatisticsPage from './City-Wise-Statistics-Page';
import BloodGroup from './BloodGroup';

export default function LandingDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activePage, setActivePage] = useState(null);
  const [bloodStats, setBloodStats] = useState([]);
  const [systemStats, setSystemStats] = useState({
    donors: 0,
    units: 0,
    hospitals: 0,
    staff: 0,
  });

  // Live Clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch blood group balance data from API
  useEffect(() => {
    axios.get('http://localhost:8000/blood-group-balance')
      .then(res => {
        const data = res.data.map(item => {
          const level = Math.max(0, 100 - (item.RECIPIENTS * 10));
          return {
            group: item.BLOOD_GROUP,
            level,
            donors: item.DONORS
          };
        });
        setBloodStats(data);
      })
      .catch(err => {
        console.error("Error fetching blood group data:", err);
      });
  }, []);

  // Fetch system stats from multiple APIs
  useEffect(() => {
    const fetchSystemStats = async () => {
      try {
        const [donorsRes, unitsRes, hospitalsRes, staffRes] = await Promise.all([
          axios.get('http://localhost:8000/count-donors'),
          axios.get('http://localhost:8000/count-blood'),
          axios.get('http://localhost:8000/count-hospital'),
          axios.get('http://localhost:8000/count-staff')
        ]);

        setSystemStats({
          donors: donorsRes.data[0]?.DONORCOUNT || 0,
          units: unitsRes.data[0]?.TOTAL_AVG_SUM || 0,
          hospitals: hospitalsRes.data[0]?.HOSPITALCOUNT || 0,
          staff: staffRes.data[0]?.STAFFCOUNT || 0
        });
      } catch (err) {
        console.error("Error fetching system stats:", err);
      }
    };

    fetchSystemStats();
  }, []);

  const pages = [
    { id: 'donor-insights', title: 'Donor Insights', description: 'Analytics and statistics about blood donors', color: 'indigo', icon: '📊' },
    { id: 'blood-bank-overview', title: 'Blood Bank Overview', description: 'Detailed blood balance data', color: 'red', icon: '🩸' },
    { id: 'city-wise-stats', title: 'City Wise Statistics', description: 'Breakdown by cities', color: 'teal', icon: '🏙️' },
    { id: 'blood-group', title: 'Blood Group', description: 'Group-wise donors and usage', color: 'blue', icon: '🧬' }
  ];

  const renderActivePage = () => {
    switch (activePage) {
      case 'donor-insights':
        return <DonorPage />;
      case 'blood-bank-overview':
        return <BloodBankOverview />;
      case 'city-wise-stats':
        return <CityWiseStatisticsPage />;
      case 'blood-group':
        return <BloodGroup />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-6 relative">
      {/* Background */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#f8f0f0' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="bg-white shadow-lg rounded-lg mb-6 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="bg-red-600 text-white p-6 md:w-1/3">
              <h1 className="text-3xl font-bold">Blood Camp Management</h1>
              <p className="mt-2 opacity-80">Central Dashboard</p>
            </div>
            <div className="p-6 flex flex-col md:flex-row justify-between items-center md:w-2/3">
              <div>
                <p className="text-gray-500 font-medium">Welcome back, Admin</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-2xl font-bold text-gray-700">
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
                <p className="text-gray-500">
                  {currentTime.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-indigo-600 p-4">
                <h2 className="text-xl font-bold text-white">Navigation</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {pages.map((page) => (
                  <div
                    key={page.id}
                    className={`p-4 cursor-pointer transition-all duration-300 ${activePage === page.id
                      ? `bg-${page.color}-50 border-l-4 border-${page.color}-600`
                      : 'hover:bg-gray-50'
                      }`}
                    onClick={() => setActivePage(page.id)}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full bg-${page.color}-100 text-${page.color}-600 flex items-center justify-center mr-3 text-xl`}>
                        {page.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{page.title}</h3>
                        <p className="text-sm text-gray-500">{page.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Section */}
          <div className="lg:col-span-2 space-y-6">
            {!activePage && (
              <>
                {/* Blood Inventory Overview */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-red-600 p-4">
                    <h2 className="text-xl font-bold text-white">Blood Inventory Overview</h2>
                  </div>
                  <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {bloodStats.map((item) => (
                      <div key={item.group} className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-red-600">{item.group}</div>
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${item.level < 30 ? 'bg-red-500' : item.level < 60 ? 'bg-amber-500' : 'bg-green-500'}`}
                              style={{ width: `${item.level}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs mt-1">
                            <span className="text-gray-500">{item.donors} donors</span>
                            <span className="text-gray-600">{item.level}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Status */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-emerald-600 p-4">
                    <h2 className="text-xl font-bold text-white">System Status</h2>
                  </div>
                  <div className="p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Donors', value: systemStats.donors },
                      { label: 'Units Collected', value: systemStats.units },
                      { label: 'Hospitals', value: systemStats.hospitals },
                      { label: 'Staff', value: systemStats.staff }
                    ].map((stat, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4">
                        <div className="text-gray-500 text-sm">{stat.label}</div>
                        <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Active Page Render */}
            {activePage && (
              <div className="bg-white shadow-lg rounded-lg p-6">
                {renderActivePage()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}






