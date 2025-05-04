const oracledb = require('oracledb');

const getConnection = async () => {
  return await oracledb.getConnection({
    user: 'container',
    password: '12345',
    connectString: 'localhost/XEPDB1' // Make sure this matches your DB setup
  });
};

module.exports = getConnection;
