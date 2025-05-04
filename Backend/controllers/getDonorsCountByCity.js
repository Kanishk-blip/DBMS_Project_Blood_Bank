const getConnection = require('../db.js');
const oracledb = require('oracledb');
const getDonorsCountByCity = async (req, res) => {
    try {
      const connection = await getConnection();
  
      const result = await connection.execute(
        `SELECT c.City_Name, COUNT(*) AS donor_count
        FROM SYSTEM.Blood_Donor bd
        JOIN SYSTEM.City c ON bd.City_Pin = c.City_Pin
        GROUP BY c.City_Name`,
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
  module.exports = { getDonorsCountByCity };