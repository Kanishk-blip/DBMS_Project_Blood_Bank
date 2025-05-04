const getConnection = require('../db.js');
const oracledb = require('oracledb');

const totalblood = async (req, res) => {
  try {
    const connection = await getConnection();

    // Corrected SQL query without the semicolon at the end
    const result = await connection.execute(
      `
      SELECT SUM(avg_quantity) AS total_avg_sum
      FROM (
          SELECT AVG(reci_Bqnty) AS avg_quantity
          FROM SYSTEM.Recipient
          GROUP BY reci_Bgrp
      ) subquery
      `,
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

module.exports = { totalblood };
