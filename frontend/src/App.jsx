import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import BloodCampDashboard from './dashboard'
import DonorInsights from './donorpage'
import BloodGroupStatistics from './BloodGroup'
import LandingDashboard from './dashboard'
import CityWiseStatistics from './City-Wise-Statistics-Page'
import ManagerInsights from './ManagerInsights'
import BloodBankOverview from './BloodBankOverview'
//import CityBloodStatistics from './City'
import BloodDonorPage from "./BloodDonorPage";

import StaffMember from './Staff_Member'
import HospitalInfoPage from './HospitalInfoPage'
import BloodSpecimenPage from './BloodSpecimentPage'
import DiseaseFinderPage from './DiseaseFinderPage'
import RecordingStaffPage from './RecordingStaffPage'
import BBManagerPage from './BBManagerPage'
import RecipientPhonePage from './RecipientPhonesPage'
import RecipientPage from './RecipientPage'
import DonorPhonePage from './DonorPhonesPage'
import CityPage from './CityPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <LandingDashboard/>
    </>
  )
}

export default App

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { Card, CardContent } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// const queryPages = [
//   { path: '/avg-blood-quantity', title: 'Average Blood Quantity by Group', columns: ['reci_Bgrp', 'avg_quantity'], data: [ { reci_Bgrp: 'A+', avg_quantity: 2.5 }, { reci_Bgrp: 'O-', avg_quantity: 3.1 }, ] },
//   { path: '/min-max-by-city', title: 'Min and Max Quantity by City', columns: ['City_Name', 'min_qty', 'max_qty'], data: [ { City_Name: 'CityA', min_qty: 1, max_qty: 5 }, { City_Name: 'CityB', min_qty: 2, max_qty: 6 }, ] },
//   { path: '/donors-by-city', title: 'Donors Count by City', columns: ['City_Name', 'donor_count'], data: [ { City_Name: 'CityA', donor_count: 15 }, { City_Name: 'CityB', donor_count: 20 }, ] },
//   { path: '/recipients-by-staff', title: 'Recipients by Staff Member', columns: ['reco_Name', 'total_recipients'], data: [ { reco_Name: 'Staff1', total_recipients: 10 }, { reco_Name: 'Staff2', total_recipients: 8 }, ] },
//   { path: '/avg-requested-by-manager', title: 'Average Requested by Manager', columns: ['m_Name', 'avg_requested'], data: [ { m_Name: 'Manager1', avg_requested: 2.8 }, { m_Name: 'Manager2', avg_requested: 3.4 }, ] },
//   { path: '/donors-registered-by-staff', title: 'Donors Registered by Staff', columns: ['reco_Name', 'total_donors_registered'], data: [ { reco_Name: 'Staff1', total_donors_registered: 12 }, { reco_Name: 'Staff2', total_donors_registered: 15 }, ] },
//   { path: '/donors-multiple-hospitals', title: 'Donors in Cities with >1 Hospital', columns: ['bd_name', 'City_Name'], data: [ { bd_name: 'John Doe', City_Name: 'CityX' }, { bd_name: 'Jane Roe', City_Name: 'CityY' }, ] },
//   { path: '/same-blood-group-most-requested', title: 'Donors with Most Requested Blood Group', columns: ['bd_name', 'bd_Bgroup'], data: [ { bd_name: 'Alice', bd_Bgroup: 'A+' }, { bd_name: 'Bob', bd_Bgroup: 'A+' }, ] },
//   { path: '/highest-quantity-hospitals', title: 'Hospitals with Highest Blood Quantity Request', columns: ['hosp_name', 'hosp_needed_Bgrp', 'hosp_needed_qnty'], data: [ { hosp_name: 'Hospital A', hosp_needed_Bgrp: 'O+', hosp_needed_qnty: 10 }, ] },
//   { path: '/cities-with-donors-recipients', title: 'Cities with Both Donors and Recipients', columns: ['City_Name'], data: [ { City_Name: 'CityA' }, { City_Name: 'CityB' }, ] },
//   { path: '/top-3-busiest-managers', title: 'Top 3 Busiest Managers', columns: ['m_Name', 'total_requests'], data: [ { m_Name: 'Manager1', total_requests: 25 }, { m_Name: 'Manager2', total_requests: 20 }, { m_Name: 'Manager3', total_requests: 18 }, ] },
//   { path: '/blood-balance', title: 'Blood Group Balance', columns: ['Blood_Group', 'Donors', 'Recipients'], data: [ { Blood_Group: 'A+', Donors: 30, Recipients: 25 }, { Blood_Group: 'O-', Donors: 15, Recipients: 20 }, ] },
// ];

// const QueryResult = ({ title, columns, data }) => (
//   <div className="max-w-4xl mx-auto p-4">
//     <h2 className="text-2xl font-bold mb-4">{title}</h2>
//     <Card>
//       <CardContent>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               {columns.map((col) => (
//                 <TableHead key={col}>{col}</TableHead>
//               ))}
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {data.map((row, idx) => (
//               <TableRow key={idx}>
//                 {columns.map((col) => (
//                   <TableCell key={col}>{row[col]}</TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </CardContent>
//     </Card>
//     {/* Fetch code placeholder */}
//     {/**
//     useEffect(() => {
//       fetch('/api-endpoint')
//         .then(res => res.json())
//         .then(setData);
//     }, []);
//     */}
//   </div>
// );

// export default function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50">
//         <nav className="p-4 bg-white shadow mb-6 flex flex-wrap justify-center space-x-4">
//           {queryPages.map((qp) => (
//             <Link key={qp.path} to={qp.path} className="text-blue-500 hover:underline">
//               {qp.title}
//             </Link>
//           ))}
//         </nav>
//         <Routes>
//           {queryPages.map((qp) => (
//             <Route
//               key={qp.path}
//               path={qp.path}
//               element={<QueryResult title={qp.title} columns={qp.columns} data={qp.data} />}
//             />
//           ))}
//           <Route
//             path="*"
//             element={
//               <div className="text-center mt-20 text-gray-500 text-lg">
//                 <p>Select a query from the navigation above.</p>
//               </div>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
