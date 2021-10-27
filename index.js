'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

//variables para puerto local y para heroku
//Leer localhost de variables y puerto
const host = process.env.HOST || '0.0.0.0'
const port = config.port

//Importar las variables de entorno locales
//const variablesenv = require('./variables.env')
require('dotenv').config({path: './variables.env'})

console.log(process.env.DB_URL)

//mongoose.connect(config.db, (err, res) => {
mongoose.connect(process.env.DB_URL, (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${error}`)
    }
    console.log('Conexión a la base de datos establecida...')

    //app.listen(config.port, () => {
    app.listen(port, host, () => {
        //console.log(`API REST corriendo en http://localhost:${config.port}`)
        console.log('El servidor esta funcionando')
    })
})

//index con solo conexiones a base de datos via mongoose
