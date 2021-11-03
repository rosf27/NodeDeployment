'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require ('./routes')

app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.engine('.hbs',hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use('/api', api)

app.get("/login", (req, res) => {
    res.render('./login', {
        title: "Login VentaSoft",
        style: './css/login.css',
        description: 'Pagina de Login de VentaSoft'
    })
})

app.get("/ventas", (req, res) => {
    res.render('./ventas', {
        title: "Ventas VentaSoft",
        style: './css/ventas.css',
        description: 'Pagina de Ventas de VentaSoft'
    })
})

app.get("/productos", (req, res) => {
    res.render('./productos', {
        title: "Productos VentaSoft",
        style: './css/productos.css',
        description: 'Pagina de Productos de VentaSoft'
    })
})

app.get("/usuarios", (req, res) => {
    res.render('./usuarios', {
        title: "Usuarios VentaSoft",
        style: './css/usuarios.css',
        description: 'Pagina de Usuarios de VentaSoft'
    })
})

app.get("/", (req, res) => {
    //res.render('producto')
    res.render('./Home', {
        title: 'HomeVentaSoft',
        style: './css/home.css',
        description: 'Pagina Home de VentaSoft'
    })
})

app.get("/producto", (req, res) => {
    res.render('producto')
})

app.get("/loginor", (req, res) => {
    res.render('loginor')
})

module.exports = app
