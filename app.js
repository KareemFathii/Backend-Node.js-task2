const weatherapi = require("./Stored_data/Weatherapi")

const geo = require("./Stored_data/Mapbox")
geo.geocode(process.argv[2] , (error , response) => {
      console.log("error of geo:" + error)
      console.log("data of geo:" + response)

    weatherapi.forecast(response.latitude, response.longtitude, (error , response ) =>{
        console.log(`error of forecast:  ${error}`)
        console.log(`response of forecast: ${response}`)
    })
})
