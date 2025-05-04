const getConnection = require('../db.js');
const oracledb = require('oracledb');
const getCitiesWithDonorsAndRecipients = async (req, res) => {
    try {
      const connection = await getConnection();
  
      const result = await connection.execute(
        `SELECT DISTINCT c.City_Name
       FROM SYSTEM.City c
       WHERE c.City_Pin IN (
         SELECT City_Pin FROM SYSTEM.Blood_Donor
       ) AND c.City_Pin IN (
         SELECT City_Pin FROM SYSTEM.Recipient
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
  module.exports = { getCitiesWithDonorsAndRecipients };