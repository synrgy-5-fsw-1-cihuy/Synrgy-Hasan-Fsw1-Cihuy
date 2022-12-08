const { Router } = require('express');
const router = Router();
const authMiddleware = require('../middlewares/auth.middleware');
const carController = require('../controllers/car.controller');

router.get('/cars', authMiddleware, carController.getAllCars);
router.get('/cars/:id', authMiddleware, carController.getCar);
router.post('/cars', authMiddleware, carController.createCar);
router.put('/cars/:id', authMiddleware, carController.updateCar);
router.delete('/cars/:id', authMiddleware, carController.deleteCar);

module.exports = router;
