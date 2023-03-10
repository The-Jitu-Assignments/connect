const sql = require('mssql');
const bcrypt = require('bcrypt');
const { v4 } = require('uuid');
const jwt = require('jsonwebtoken');
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
      .input('password', hashedPassword)
    .execute('usp_accountRegister')

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
    const pool = await sql.connect(sqlConfig);
    const { email, password } = req.body;;

    if (!email || !password) {
      return res.status(400).json({
        msg: 'input all fields'
      })
    };

    const user = await (await pool.request().input('email', email).execute('usp_findUser')).recordset[0];

    if (user) {
      const checkPwd = await bcrypt.compare(password, user.password);
      if (checkPwd) {
        const { password, ...payload } = user;
        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '24h' })
        return res.status(200).json({
          msg: 'Logged in successfully',
          token
        })
      } else {
        return res.status(400).json({
          msg: 'Invalid credentials'
        })
      }
    } else {
      return res.status(404).json({
        msg: 'user with that email does not exist'
      })
    }
  } catch (error) {
    return res.status(500).json({
      msg: error
    })
  }
};

exports.sendAConnectionRequest = async (req, res) => {
  try {
    const { toUser } = req.body;
    const { accountID } = req.user;
    const pool = await sql.connect(sqlConfig);

    await pool.request()
      .input('connectionId', v4())
      .input('fromUser', accountID)
      .input('toUser', toUser)
      .input('status', 0)
    .execute('usp_createOrUpdateConnection');

    return res.status(200).json({
      msg: 'request sent successfully'
    })
  } catch (error) {
    return res.status(500).json({
      msg: error
    })
  }
}

exports.acceptOrDeclineConnectionRequest = async (req, res) => {
  try {
    const { connectionId } = req.params;
    const { status, toUser } = req.body;
    const { accountID } = req.user;
    const pool = await sql.connect(sqlConfig);

    if (connectionId) {
      await pool.request()
        .input('connectionId', connectionId)
        .input('fromUser', accountID)
        .input('toUser', toUser)
        .input('status', status)
      .execute('usp_createOrUpdateConnection')

      return res.status(200).json({
        msg: 'Update was successful'
      })
    } else {
      return res.status(404).json({
        msg: `Notification with an id of ${connectionId} is not found`
      })
    }
  } catch (error) {
    return res.status(500).json({
      msg: error
    })
  }
}