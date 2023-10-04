const sequelize = require("sequelize");

const directorModel = require('./models/director');

/*
Para conectar con la base de datos se necesita:
1- Nombre de la base de datos
2- Usuario
3- Contraseña
4- Objeto de configuracion ORM
*/

const sequelize = new Sequelize('video-club','root','abcd1234',{
    host: 'localhost',
    dialect: 'mysql'
});

const Director = directorModel(sequelize, Sequelize);

sequelize.SyncOptions({
    force:true
}).then(()=>{
    console.log('base de datos actualizada');
});

module.exports = {Director};