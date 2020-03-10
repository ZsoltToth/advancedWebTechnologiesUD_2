const converter = require('./TemperatureConverter');

//First try with return
//console.log(converter.farenheti2celsius(32));

converter.farenheit2celsius(32, (celsius)=>{console.log(celsius)});
converter.farenheit2celsius(20, (celsius)=>{
    if(celsius < 0.0){
        console.log("It is too cold!");
    }
    else{
        console.log("It is OK!");
    }
})
