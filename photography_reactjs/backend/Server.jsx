require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const imagesRoutes = require('./routes/images.jsx')
const multer = require('multer');
const categoriesRouter = require('./routes/categories.jsx');
const uploadRouter = require('./routes/Upload.jsx');





const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('uploads'));
app.use('/categories', categoriesRouter);
app.use('/Images/', imagesRoutes)
app.use('/upload/', uploadRouter)




// connect to DB
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`DB Connected & Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));


