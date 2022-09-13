const User = require("../models/User");

const Hotels = User;

//create
const addHotel = async(req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Please Insert Hotel name",
        });
        return;
    }
    const hotelInfo = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        rating: req.body.rating,
        address: req.body.address,
        contact: req.body.contact
    };
    try {
        const product = await Hotels.create(hotelInfo);
        res.status(200).send(product);
        console.log(product);
    } catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
};
// get all products

const getAllHotels = async(req, res) => {
    const hotels = await Hotels.find({});
    if (hotels.length === 0) {
        return res.json({
            message: "No Hotels found",
        });
    }
    res.status(200).send(hotels);
};

//get single hotel
const singleHotel = async(req, res) => {
    let id = req.params.id;
    const hotel = await Hotels.findOne({ where: { id: id } });

    res.status(200).send(hotel);
};

module.exports = {
    singleHotel,
    getAllHotels,
    addHotel
};