const express = require('express');
const mongoose = require('mongoose');
const uniguiasRoutes = require('./routes/uniguiasRoutes');

const app = express();
const port = 3200;

mongoose.connect('mongodb://localhost:27017/uniguias', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//db.once('open', () => {
//  console.log('Connected to the database');
//});

app.use(express.json());
app.use('/uni', uniguiasRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
