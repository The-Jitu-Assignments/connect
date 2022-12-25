const sql = require('mssql');
const bcrypt = require('bcrypt');
const { v4 } = require('uuid');
const sqlConfig = require('../../config');

exports.signUp = async (req, res) => {
  try {
    const pool = await sql.connect(sqlConfig);
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        msg: 'Input all fields'
      })
    };

    const hashedPassword = await bcrypt.hash(password, 8);


    await pool.request()
      .input('accountID', v4())
      .input('name', name)
      .input('email', email)
      input('password', hashedPassword)
    .execute('usp_accountRegister')

    console.log('working')

    return res.status(200).json({
      msg: 'account created successfully'
    })
  } catch (e) {
    return res.status(500).json({
      msg: e
    })
  }
};

exports.login = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
};