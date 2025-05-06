const getConnection = require('../db.js');
const oracledb = require('oracledb');
const Hospital_Info = async (req, res) => {
    try {
      const connection = await getConnection();
  
      const result = await connection.execute(
       'SELECT * FROM SYSTEM.Hospital_Info'
,
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
  module.exports = { Hospital_Info };