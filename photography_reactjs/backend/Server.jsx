const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const categoriesRouter = require('./routes/categories.jsx');
const uploadRouter = require('./routes/Upload.jsx');
const imagesRouter = require('./routes/images.jsx')
const BlogsRouter = require('./routes/blog.jsx')
const PrintsRouter = require('./routes/Prints.jsx')
const UserRoutes = require('./routes/userRoutes.jsx')






const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());


app.use('/uploads', express.static('uploads'));
app.use('/images' ,imagesRouter)
app.use('/categories', categoriesRouter);
app.use('/upload/', uploadRouter)
app.use("/blogs/", BlogsRouter) 
app.use('/prints', PrintsRouter);
app.use('/users', UserRoutes);




// connect to DB
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`DB Connected & Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));


