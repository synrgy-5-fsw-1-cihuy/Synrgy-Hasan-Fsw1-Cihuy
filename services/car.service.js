const carRepository = require('../repositories/car.repository');

const doGetAllCars = async () => {
  return await carRepository.findAllCar();
};

const doGetCarById = async (id) => {
  return await carRepository.findCarById(id);
};

const doCreateCar = async (car) => {
  return await carRepository.createCar(car);
};

const doDeleteCar = async (carId) => {
  await carRepository.deleteCar(carId);
};

module.exports = { doGetAllCars, doGetCarById, doCreateCar, doDeleteCar };
