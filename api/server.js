const express = require('express');
const app = express();
const port = 3000;
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('fantasydb', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});


// sequelize.authenticate().then(()=> console.log('success connection')).catch(()=> console.log('connection failed'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server listening on port ${port}`));