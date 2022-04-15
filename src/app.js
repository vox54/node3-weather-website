const path = require ('path')
const request = require('request') 
const forecast = require('./utils/forecast' )
const express = require('express')
const hbs = require('hbs')
const { clear } = require('console')


// const { allowedNodeEnvironmentFlags } = require('process')
// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()

// define paths for express
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join( __dirname, '../template/views')
const partialsPath = path.join( __dirname, '../template/partials')

// setp handle bars and view path
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
console.log('viewsPath:', viewsPath) 

// weather fetch
// const appst = '37.8' + ',' + '-122' + '&units=f' 
// const url = 'http://api.weatherstack.com/current?access_key=9507b77f090ac8a1bb26d2b2f1b792d3&query=' + appst // 37.806,-122.411&units=f'
// const url = 'https://tools.learningcontainer.com/sample-json-file.json'
//  fetch(url).then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

// forecast((-75, 44, undefined), (error,data => {} ))

// test for forecast
// forecast(40, 40, ( error, forcastData) => {
 //   if(error) {return res.send({error}
// })
// console.log(forcastData)



app.use(express.static(publicDirectoryPath))

// ------------------------------------------
app.get('',(req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Jim Yorgan'
    })
})

// ------------------------------------------
app.get('/weather', (req,res) => {
    if (!req.query.search) {
        return res.send({err: 'You must provide a weather location, ie long/lat'
    })
    }
    
    console.log( req.query ) 
     res.render('weather',{ 
        query: req.query,
        lat: 45,
        long: 40,
        name: 'Jim Yorgan',
        title: 'Weather'
     })

    })
// ------------------------------------------
app.get('/about',(req,res) => {
    res.render('about', {
        name: 'Jim Yorgan',
        title: 'About'
    })
})

// ------------------------------------------
app.get('/products', (req,res) => {
    if (!req.query.search) {
        return res.send({err: 'You must provide a search term'
    })
    }
    console.log( req.query ) 
    res.send( { products:[] } )
})

// ------------------------------------------
app.get('/help',(req,res) => {
    res.render('help', {
        name: 'Jim Yorgan',
        helpText: 'Reside in Victoria B.C',
        title: 'Help'
    })
})

/*
// ------------------------------------------
app.get('/help/*',(req,res) => {
    res.render('error', {
        msg: 'Document not found',   
        title: 'Help Document not found',     
        name: 'Jim Yorgan'
    })
})

// ------------------------------------------
app.get('*',(req,res) => {
    res.render('error', {
        name: 'Jim Yorgan',
        msg: 'Page not found',
        title: '404 error'
    })
})
*/

/*
app.get('/help/*', (req,res) => {
    res.send('Article not found')
})

app.get('*', (req, res) => {
    res.send('My 404 page')
})
*/


// ------------------------------------------------------
app.listen(3000, () => {
    console.log('Server listening on port 3000')
})