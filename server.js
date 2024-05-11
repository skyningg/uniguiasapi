const express = require('express');
const mongoose = require('mongoose');
const uniguiasRoutes = require('./routes/uniguiasRoutes');
//const licenciaturaRoutes = require('./routes/licenciaturaRoutes');

const app = express();
const port = 3200;

mongoose.connect('mongodb://localhost:27017/uniguias', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/*mongoose.connect('mongodb://localhost:27017/licenciaturas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});*/

app.use(express.json());
app.use('/uni', uniguiasRoutes); // Asigna /uniguias al router de uniguias
//app.use('/lic', licenciaturaRoutes); // Asigna /licenciaturas al router de licenciaturas

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
