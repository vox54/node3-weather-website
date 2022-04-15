
const forecast = (lat, long, callback ) => {

    const appst = lat + ',' + long + '&units=f' 
    const url = 'http://api.weatherstack.com/current?access_key=9507b77f090ac8a1bb26d2b2f1b792d3&query=' + appst // 37.806,-122.411&units=f'
 
request({url:url,json:true}, (error,response) => {
    if (error) { callback('Unable to connect to weather service', undefined ) } else if (response.body.error) {callback('Unable to find location', undefined)} 
    // happy path below
    else { 

        const tmp = response.body.current.temperature
        const flt = response.body.current.feelslike
        const fct = response.body.current.weather_descriptions[0]
        const tf = 'Forcast is '+ fct +'. It is currently ' + tmp + ' degrees. It feels like ' + flt + ' degrees.'
        // console.log( tf )
    
        callback(undefined, tf  )
     }

})

}

module.exports = { forecast }