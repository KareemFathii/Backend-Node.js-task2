const request = require("request")

const forecast = (longituide , latituide , callback) => {


    const url =  "https://api.weatherapi.com/v1/current.json?key=fa6f15a0d4cb472f920213103241607&q=" + longituide +"," +latituide +"&aqi=no"
    
    request({url  , json : true} ,(error , response) => {
        
        if(error){
            // console.log("there is an error in reaching the website !!") // msh 3arf awslo esm el mawk3 ghalat asaln aw haga msh 3arfa tkhlyny a communicate with the website 
            callback("there is an error in reaching the website !!" , undefined)
        }
        else if(response.body.error){
            // console.log(response.body.error.message)
            callback( response.body.error.message , undefined)
        }
        else{
            callback(undefined , response.body.location.name + " is " + response.body.current.condition.text) 
        }        
        
    })   
}

module.exports={
forecast
}
