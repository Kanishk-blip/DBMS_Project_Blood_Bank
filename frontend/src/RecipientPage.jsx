import { useState, useEffect } from 'react';

export default function RecipientPage() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    fetchRecipientData();
  }, []);

  const fetchRecipientData = () => {
    fetch('http://localhost:8000/Recipient')
      .then(response => response.json())
      .then(data => setRecipients(data))
      .catch(error => console.error('Error fetching recipient data:', error));
  };

  // Function to format dates nicely
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-green-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-green-800 mb-8 pb-2 border-b-4 border-green-700">
          Recipient Information Page
        </h1>

        <div className="rounded-lg shadow-md overflow-hidden">
          <div className="bg-green-600 text-white p-4">
            <h2 className="font-semibold text-xl">
              List of Blood Recipients
            </h2>
          </div>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-green-100 text-left text-sm font-semibold text-gray-800">
                    ID
                  </th>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-green-100 text-left text-sm font-semibold text-gray-800">
                    Name
                  </th>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-green-100 text-left text-sm font-semibold text-gray-800">
                    Sex
                  </th>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-green-100 text-left text-sm font-semibold text-gray-800">
                    Blood Group
                  </th>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-green-100 text-left text-sm font-semibold text-gray-800">
                    Quantity
                  </th>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-green-100 text-left text-sm font-semibold text-gray-800">
                    Request Date
                  </th>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-green-100 text-left text-sm font-semibold text-gray-800">
                    Birth Date
                  </th>
                  <th className="py-3 px-5 border-b-2 border-gray-200 bg-green-100 text-left text-sm font-semibold text-gray-800">
                    City PIN
                  </th>
                </tr>
              </thead>
              <tbody>
                {recipients.map((recipient, index) => (
                  <tr key={recipient.RECI_ID} className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{recipient.RECI_ID}</td>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{recipient.RECI_NAME}</td>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{recipient.RECI_SEX}</td>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{recipient.RECI_BGRP}</td>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{recipient.RECI_BQNTY}</td>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{formatDate(recipient.RECI_DATE)}</td>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{formatDate(recipient.RECI_BDATE)}</td>
                    <td className="py-3 px-5 border-b border-gray-200 text-sm">{recipient.CITY_PIN}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {recipients.length === 0 && (
              <p className="text-center text-gray-500 mt-4">No recipient data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
