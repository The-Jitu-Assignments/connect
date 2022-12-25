const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const { SECRET } = process.env;


exports.verifyToken = async (req, res) => {
  try {
    const tokenHeader = req.headers.authorization;
    if (tokenHeader) {
      const token = tokenHeader.split(' ')[1];
      const decodedData = jwt.verify(token, SECRET);
      req.user = decodedData;
    } else {
      return res.status(401).json({
        msg: 'Not authorized'
      })
    }
  } catch (error) {
    return res.status(500).json({
      msg: error
    })
  }
}