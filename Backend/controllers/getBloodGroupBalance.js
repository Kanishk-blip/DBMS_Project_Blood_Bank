const getConnection = require('../db.js');
const oracledb = require('oracledb');
const getBloodGroupBalance = async (req, res) => {
    try {
      const connection = await getConnection();
  
      const result = await connection.execute(
        `SELECT bd.bd_Bgroup AS Blood_Group, 
              COUNT(bd.bd_ID) AS Donors,
              (SELECT COUNT(*) 
               FROM SYSTEM.Recipient r 
               WHERE r.reci_Bgrp = bd.bd_Bgroup) AS Recipients
       FROM SYSTEM.Blood_Donor bd
       GROUP BY bd.bd_Bgroup`,
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
  module.exports = { getBloodGroupBalance };