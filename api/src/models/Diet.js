const { DataTypes } = require('sequelize');
require('uuid')


// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {
   id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, 
  },
  name: {
      type: DataTypes.STRING,
      unique: true, 
      primaryKey: true 
    }
  });
};