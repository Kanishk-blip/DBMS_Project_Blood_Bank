const getConnection = require('../db.js');
const oracledb = require('oracledb');
const getDonorsInCitiesWithMultipleHospitals = async (req, res) => {
    try {
      const connection = await getConnection();
  
      const result = await connection.execute(
        `SELECT bd.bd_name, c.City_Name
        FROM SYSTEM.Blood_Donor bd
        JOIN SYSTEM.City c ON bd.City_Pin = c.City_Pin
        WHERE bd.City_Pin IN (
          SELECT City_Pin FROM SYSTEM.Hospital_Info
          GROUP BY City_Pin
          HAVING COUNT(*) > 1
        )`,
        [],
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );
  
      console.log("Rows:", result.rows);
  
      await connection.close();
      res.json(result.rows);
    } catch (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  module.exports = { getDonorsInCitiesWithMultipleHospitals };