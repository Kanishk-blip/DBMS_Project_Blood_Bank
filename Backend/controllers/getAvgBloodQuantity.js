const getConnection = require('../db.js');
const oracledb = require('oracledb');
const getAvgBloodQuantity = async (req, res) => {
    try {
      const connection = await getConnection();
  
      const result = await connection.execute(
        `SELECT reci_Bgrp, AVG(reci_Bqnty) AS avg_quantity FROM SYSTEM.Recipient GROUP BY reci_Bgrp
`,
        [],
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );
  
      console.log("Raw result:", result);      // <-- Check structure
      console.log("Rows:", result.rows);       // <-- Should NOT be empty
  
      await connection.close();
      res.json(result.rows);
    } catch (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
module.exports = { getAvgBloodQuantity };
