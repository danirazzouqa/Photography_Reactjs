const multer = require('multer');
const express = require('express');
const cors = require('cors');
// Configure Multer
const app = express();
app.use(cors());

app.use('/uploads', express.static('uploads'));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});




const upload = multer({ storage: storage });

module.exports = upload;
