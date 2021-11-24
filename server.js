const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./database/sequelize');

require('./database/associations');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8010;

app.use(cors());
app.use(express.json());

const reporteRouter = require('./routes/Reporte/endpoints');
const userRouter = require('./routes/User/endpoints');

app.use('/api/v1/reporte', reporteRouter);
app.use('/api/v1/user', userRouter);

module.exports = app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);

  sequelize.sync({ force: false })
    .then(() => {
      console.log('Connected to the DB');
    }).catch((error) => {
      console.log('Database error:', error);
    });
});
