const oracledb = require('oracledb');
const getConnection = require('../db.js');

async function countRequests(req, res) {
  const managerId = parseInt(req.params.id);
  let connection;

  try {
    connection = await getConnection();

    const result = await connection.execute(
      `BEGIN SYSTEM.Count_Requests_By_Manager(:id, :result); END;`,
      {
        id: managerId,
        result: { dir: oracledb.BIND_OUT, type: oracledb.STRING }
      }
    );
    

    res.json({ message: result.outBinds.result });

  } catch (err) {
    console.error(err);
    res.status(500).send('Error executing procedure');
  } finally {
    if (connection) await connection.close();
  }
}

module.exports = { countRequests };
