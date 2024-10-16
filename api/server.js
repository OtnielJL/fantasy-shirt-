/**==========================================================
 |
 |              Imports
 |
 *==========================================================*/

const express = require('express');
const app = express();
const port = 3000;
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('fantasydb', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

/**==========================================================
 |
 |              DB Models
 |
 *==========================================================*/
const User = sequelize.define(
    'User',
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
       
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
    
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false,
    
      },
    },
    {
       // Other model options go here
    },
  );



// sequelize.authenticate().then(()=> console.log('success connection')).catch(()=> console.log('connection failed'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server listening on port ${port}`));