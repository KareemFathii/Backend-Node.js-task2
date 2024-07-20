
const request = require("request")

const geocode = (countryname , callback) => {

    const geocodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + countryname + ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
    
    request( {url : geocodeurl , json : true}, (error , response) => {
        if(error){
            callback("error occureed",undefined)
        }
    else if(response.body.features.length == 0 ){
        callback("country can't be reached ",undefined)
    }
    else{
        callback(undefined , {
            latituide : response.body.features[0].center[0],
            longituide :  response.body.features[0].center[1]
        })
    }
    
})
}
module.exports = {
    geocode
}