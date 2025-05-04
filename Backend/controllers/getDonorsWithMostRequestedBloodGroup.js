const getConnection = require('../db.js');
const oracledb = require('oracledb');
const getDonorsWithMostRequestedBloodGroup = async (req, res) => {
    try {
      const connection = await getConnection();
  
      const result = await connection.execute(
        `SELECT bd.bd_name, bd.bd_Bgroup
       FROM SYSTEM.Blood_Donor bd
       WHERE bd.bd_Bgroup = (
         SELECT reci_Bgrp
         FROM SYSTEM.Recipient
         GROUP BY reci_Bgrp
         ORDER BY COUNT(*) DESC
         FETCH FIRST 1 ROWS ONLY
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
  module.exports = { getDonorsWithMostRequestedBloodGroup };