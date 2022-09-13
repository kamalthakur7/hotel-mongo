const productController = require('../controllers/hotelController');
const express = require('express')
const Router = express.Router();

Router.get('/', productController.getAllHotels);
Router.post('/', productController.addHotel);
Router.get('/:id', productController.singleHotel);

module.exports = Router;