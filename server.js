const express = require('express');
const app = express();
const carRoutes = require('./router/car.router');
const userRoutes = require('./router/user.router');

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(carRoutes);

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});
