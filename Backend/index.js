const express = require('express');
const oracledb = require('oracledb');

const app = express();
const PORT = 3000;

// Oracle DB credentials
const dbConfig = {
  user: 'container',
  password: '12345',
  connectString: 'localhost/XEPDB1' // Make sure this matches your DB setup
};

app.get('/average-blood-quantity', async (req, res) => {
  let connection;

  try {
    // Connect to the database
    connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(
      `SELECT reci_Bgrp, AVG(reci_Bqnty) AS avg_quantity FROM SYSTEM.Recipient GROUP BY reci_Bgrp
`
    );

    // Format result rows as JSON
    const data = result.rows.map(row => ({
      reci_Bgrp: row[0],
      avg_quantity: row[1]
    }));

    res.json(data);

  } catch (err) {
    console.error('Error fetching average quantities:', err);
    res.status(500).send('Database query failed');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
