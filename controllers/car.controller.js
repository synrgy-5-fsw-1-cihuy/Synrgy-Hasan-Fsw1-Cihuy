const formidable = require('formidable');
const cloudinary = require('../config/cloudinary.js');
const model = require('../models/index');
const Car = model.car;

const getAllCars = async (req, res) => {
  try {
    const result = await Car.findAll();
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: 'failed to get all cars' });
  }
};

const getCar = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Car.findByPk(id);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: 'failed to get car' });
  }
};

const createCar = (req, res) => {
  const form = formidable({});

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);

      return;
    }

    cloudinary.uploader.upload(files.foto.filepath, function (err, result) {
      if (err) {
        next(err);
        return;
      }

      Car.create({
        id: fields.id,
        name: fields.name,
        price: fields.price,
        size: fields.size,
        foto: result.secure_url,
      }).then((result) => {
        res
          .status(200)
          .json({ message: 'Car successfully created', body: fields });
      });
    });
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
    await Car.destroy({ where: { id: id } });

    res.status(200).json({
      message: 'Car successfully updated',
    });
  } catch (error) {
    res.status(500).json({ message: 'failed to delete car' });
  }
};

module.exports = { getAllCars, getCar, createCar, updateCar, deleteCar };
