const oracledb = require('oracledb');
const getConnection = require('../db.js');  // Assuming db.js manages DB connections

async function getDonorCountByGroup(req, res) {
  const bloodGroup = req.params.group;  // Get the blood group from URL params
  let connection;

  try {
    connection = await getConnection();

    const result = await connection.execute(
      `BEGIN :result := SYSTEM.Donor_Count_By_Group(:group); END;`,
      {
        group: bloodGroup,  // Input parameter for the blood group
        result: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }  // Output parameter for the result
      }
    );

    res.json({ message: `Total donors with blood group ${bloodGroup} = ${result.outBinds.result}` });

  } catch (err) {
    console.error(err);
    res.status(500).send('Error executing function');
  } finally {
    if (connection) await connection.close();
  }
}

module.exports = { getDonorCountByGroup };
