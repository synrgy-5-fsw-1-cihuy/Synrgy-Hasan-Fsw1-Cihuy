const models = require('../models');
const Car = models.car;

const findAllCar = async () => {
  return await Car.findAll();
};

const findCarById = async (id) => {
  return await Car.findByPk(id);
};

const createCar = async (car) => {
  return await Car.create(car);
};

const deleteCar = async (carId) => {
  await Car.destroy({
    where: { id: carId },
  });
};

module.exports = { findAllCar, findCarById, createCar, deleteCar };
