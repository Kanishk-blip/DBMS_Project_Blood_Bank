const getConnection = require('../db.js');
const oracledb = require('oracledb');
const getTop3BusiestManagers = async (req, res) => {
    try {
      const connection = await getConnection();
  
      const result = await connection.execute(
        `SELECT bm.m_Name, COUNT(*) AS total_requests
        FROM SYSTEM.requests_to rt
        JOIN SYSTEM.BB_Manager bm ON rt.M_id = bm.M_id
        GROUP BY bm.m_Name
        ORDER BY total_requests DESC
        FETCH FIRST 3 ROWS ONLY`,
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
  module.exports = { getTop3BusiestManagers };