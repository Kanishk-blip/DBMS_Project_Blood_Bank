const express = require('express');
const cors = require('cors');
const { getAvgBloodQuantity } = require('./controllers/getAvgBloodQuantity');
const { getCityBloodQuantityRange } = require('./controllers/getCityBloodQuantityRange');
const { getDonorsCountByCity } = require('./controllers/getDonorsCountByCity');
const { getRecipientsHandledByStaff } = require('./controllers/getRecipientsHandledByStaff');
const { getAvgBloodQuantityByManager } = require('./controllers/getAvgBloodQuantityByManager');
const { getDonorsRegisteredByStaff } = require('./controllers/getDonorsRegisteredByStaff');
const { getDonorsInCitiesWithMultipleHospitals } = require('./controllers/getDonorsInCitiesWithMultipleHospitals');
const { getDonorsWithMostRequestedBloodGroup } = require('./controllers/getDonorsWithMostRequestedBloodGroup');
const { getHospitalsWithHighestBloodRequest } = require('./controllers/getHospitalsWithHighestBloodRequest');
const { getCitiesWithDonorsAndRecipients } = require('./controllers/getCitiesWithDonorsAndRecipients');
const { getTop3BusiestManagers } = require('./controllers/getTop3BusiestManagers');
const { getBloodGroupBalance } = require('./controllers/getBloodGroupBalance');

const { getDonorsByCity } = require('./controllers/getDonorsByCity');

const {countRequests}=require('./controllers/managerController');
const { getDonorCountByGroup } = require('./controllers/plSqlGetDonorCountByGroup');
const { totaldonor } = require('./controllers/TotalDonor');
const { totalblood } = require('./controllers/TotalBlood');
const { totalhospital } = require('./controllers/TotalHospital');
const { totalstaff } = require('./controllers/TotalStaff');
const app = express();
const port = process.env.PORT || 8000;


app.use(cors()); // Allow all origins by default

// or more securely:
// app.use(cors({
//   origin: * // Only allow your frontend
// }));
//app.use(express);
// API endpoint to get average blood quantity by blood group
 //api for dashboard section 
 app.get('/count-donors',totaldonor);
 app.get('/count-blood',totalblood);
 app.get('/count-hospital',totalhospital);
 app.get('/count-staff',totalstaff);
app.get('/average-blood-quantity', getAvgBloodQuantity);

app.get('/city-blood-quantity-range', getCityBloodQuantityRange);//done

app.get('/donors-count-by-city', getDonorsCountByCity);//done

app.get('/recipients-handled-by-staff', getRecipientsHandledByStaff);

app.get('/average-blood-by-manager', getAvgBloodQuantityByManager);//done

app.get('/donors-registered-by-staff', getDonorsRegisteredByStaff);

app.get('/donors-in-cities-multiple-hospitals', getDonorsInCitiesWithMultipleHospitals);//done doubt

app.get('/donors-with-most-requested-blood-group', getDonorsWithMostRequestedBloodGroup);

app.get('/hospitals-with-highest-blood-request', getHospitalsWithHighestBloodRequest);//

app.get('/cities-with-donors-and-recipients', getCitiesWithDonorsAndRecipients);//done

app.get('/top-3-busiest-managers', getTop3BusiestManagers);//done

app.get('/blood-group-balance', getBloodGroupBalance);//
// pl sql
app.get('/get-donors-by-city/:city_name', getDonorsByCity);
app.get('/manager/requests/:id', countRequests);  //done
app.get('/donor-count/:group', getDonorCountByGroup);


//app.get('/manager/requests/:id', countRequests);  


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
