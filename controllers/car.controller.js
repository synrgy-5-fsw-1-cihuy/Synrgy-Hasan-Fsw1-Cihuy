const formidable = require('formidable');
const cloudinary = require('../config/cloudinary.js');
const jsonwebtokenUtil = require('../utils/jsonwebtoken.util');
const carService = require('../services/car.service');
const { response } = require('express');

const getAllCars = async (req, res) => {
  const cars = await carService.doGetAllCars();
  console.log(cars);
  res.status(200).json({ data: cars });
};

const getCar = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await carService.doGetCarById(id);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: 'failed to get car' });
  }
};

const createCar = (req, res) => {
  const form = formidable({});

  form.parse(req, async (err, fields, files) => {
    if (err) {
      next(err);

      return;
    }

    const uploadedFile = await cloudinary.uploader.upload(files.foto.filepath);

    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const decodedToken = await jwtTokenUtil.checkTokenJwt(token);

    const carPayload = Car.create({
      name: fields.name,
      price: fields.price,
      size: fields.size,
      foto: uploadedFile.secure_url,
      createdBy: decodedToken.email,
    });

    const createCar = await carService.doCreateCar(carPayload);

    return res
      .status(201)
      .json({ message: 'Successfully created car', data: createCar });
  });
};

const updateCar = async (req, res) => {
  const form = formidable({});

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }

    Car.findByPk(req.params.id)
      .then((result) => {
        if (result == null) {
          res.status(404).json({
            message: 'Car not found',
          });
          return;
        }

        cloudinary.uploader.upload(files.foto.filepath, function (err, result) {
          if (err) {
            next(err);
            return;
          }

          Car.update(fields, { where: { id: req.params.id } })
            .then((result) => {
              res.status(200).json({
                message: 'Car successfully updated',
              });
            })
            .catch((err) => {
              res.status(404).json({ message: err.message });
            });
        });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  });
};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    await carService.doDeleteCar(id);

    res.status(200).json({
      message: 'Car successfully delete',
    });
  } catch (error) {
    res.status(500).json({ message: 'failed to delete car' });
  }
};

module.exports = { getAllCars, getCar, createCar, updateCar, deleteCar };
