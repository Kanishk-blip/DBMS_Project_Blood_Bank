const oracledb = require('oracledb');
const getConnection = require('../db.js');
const getDonorsByCity = async (req, res) => {
  const cityName = req.params.city_name.trim();


  console.log('City Name:', cityName); // Check if city name is correct

  try {
    const connection = await getConnection();
    
    const result = await connection.execute(
      `BEGIN SYSTEM.Get_Donors_By_City(:city_name, :donor_cursor); END;`,
      {
        city_name: cityName,
        donor_cursor: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
      }
    );

    const resultSet = result.outBinds.donor_cursor;
    const rows = await resultSet.getRows();
    console.log('Fetched Rows:', rows); // Log the rows fetched

    await resultSet.close();
    await connection.close();

    res.json(rows);
  } catch (err) {
    console.error('Error fetching donors:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = { getDonorsByCity };
