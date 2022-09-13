const express = require('express');
const app = express();
require('dotenv').config()
const db = require('./db/connect');
const routes = require('./routes/hotelRouter')

app.use(express.json())
app.use('/api/', routes)


const port = process.env.port || 3000;
const start = async() => {
    try {
        await db(process.env.url);
        app.listen(port, () => {
            console.log(`app is listening ${port}`);
        })

    } catch (error) {
        console.log(error)
    }
}
start()