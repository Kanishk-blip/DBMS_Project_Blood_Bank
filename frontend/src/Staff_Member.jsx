import { useState, useEffect } from 'react';

export default function StaffMember() {
  const [donorData, setDonorData] = useState([]);
  const [recipientData, setRecipientData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDonorStats();
    fetchRecipientStats();
  }, []);

  const fetchDonorStats = () => {
    fetch('http://localhost:8000/donors-registered-by-staff')
      .then((res) => res.json())
      .then((data) => setDonorData(data))
      .catch(() => setError('Failed to fetch donor data'))
      .finally(() => setLoading(false));
  };

  const fetchRecipientStats = () => {
    fetch('http://localhost:8000/recipients-handled-by-staff')
      .then((res) => res.json())
      .then((data) => setRecipientData(data))
      .catch(() => setError('Failed to fetch recipient data'))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white shadow-xl p-0">
        <div className="bg-rose-600 p-6">
          <h1 className="text-3xl font-bold text-white">Staff Member Overview</h1>
        </div>

        {error && <p className="text-red-600 p-4">{error}</p>}

        {loading ? (
          <p className="text-center text-gray-600 p-4">Loading data...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Donors Registered Panel */}
            <div className="border-l-4 border-rose-600 bg-white shadow-lg">
              <div className="bg-rose-50 p-4 border-b border-rose-100 flex items-center">
                <div className="w-2 h-6 bg-rose-600 mr-3"></div>
                <h2 className="text-xl font-bold text-rose-800">Donors Registered by Staff</h2>
              </div>
              <div className="p-4">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 text-left font-bold text-rose-800 border-b-2 border-rose-100">Staff Name</th>
                      <th className="py-3 px-4 text-left font-bold text-rose-800 border-b-2 border-rose-100">Total Donors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donorData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-rose-50'}>
                        <td className="py-3 px-4 border-b border-rose-100 text-gray-800">{item.RECO_NAME}</td>
                        <td className="py-3 px-4 border-b border-rose-100 text-gray-800">{item.TOTAL_DONORS_REGISTERED}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recipients Handled Panel */}
            <div className="border-l-4 border-indigo-600 bg-white shadow-lg">
              <div className="bg-indigo-50 p-4 border-b border-indigo-100 flex items-center">
                <div className="w-2 h-6 bg-indigo-600 mr-3"></div>
                <h2 className="text-xl font-bold text-indigo-800">Recipients Handled by Staff</h2>
              </div>
              <div className="p-4">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 text-left font-bold text-indigo-800 border-b-2 border-indigo-100">Staff Name</th>
                      <th className="py-3 px-4 text-left font-bold text-indigo-800 border-b-2 border-indigo-100">Total Recipients</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recipientData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-indigo-50'}>
                        <td className="py-3 px-4 border-b border-indigo-100 text-gray-800">{item.RECO_NAME}</td>
                        <td className="py-3 px-4 border-b border-indigo-100 text-gray-800">{item.TOTAL_RECIPIENTS}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
