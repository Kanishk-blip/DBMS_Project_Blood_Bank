const getConnection = require('../db.js');
const oracledb = require('oracledb');
const getDonorsRegisteredByStaff = async (req, res) => {
    try {
      const connection = await getConnection();
  
      const result = await connection.execute(
        `SELECT rs.reco_Name, COUNT(*) AS total_donors_registered
       FROM SYSTEM.registers r
       JOIN SYSTEM.Recording_Staff rs ON r.reco_ID = rs.reco_ID
       GROUP BY rs.reco_Name`,
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
  module.exports = { getDonorsRegisteredByStaff };