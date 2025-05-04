const getConnection = require('../db.js');
const oracledb = require('oracledb');
const getAvgBloodQuantityByManager = async (req, res) => {
    try {
      const connection = await getConnection();
  
      const result = await connection.execute(
        `SELECT bm.m_Name, AVG(r.reci_Bqnty) AS avg_requested
       FROM SYSTEM.requests_to rt
       JOIN SYSTEM.BB_Manager bm ON rt.M_id = bm.M_id
       JOIN SYSTEM.Recipient r ON r.reci_ID = rt.reci_ID
       GROUP BY bm.m_Name`,
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
  module.exports = { getAvgBloodQuantityByManager };