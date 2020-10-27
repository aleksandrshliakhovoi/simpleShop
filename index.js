const express = require('express');
const path = require('path')
const exphtbs = require('express-handlebars')
const app = express();



const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')
const cardRoutes = require('./routes/card') 


const hbs = exphtbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine) 
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


app.use('/', homeRoutes) 
app.use('/add',addRoutes)
app.use('/courses', coursesRoutes)
app.use('/card', cardRoutes)

const PORT = 5000;

app.listen(PORT, () => {
    console.log('Server started', new Date())
})