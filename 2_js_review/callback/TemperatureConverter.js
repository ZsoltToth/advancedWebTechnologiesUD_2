class TemperatureConverter{
    //Farenheit to Celsius
    farenheit2celsius(farenheit, callback){
        var celsius =  (farenheit - 32) * 5 / 9;
        callback(celsius);
    }
    //Celsius to Farenheit
    celsius2farenheit(celsius, callback){
        var farenheit =  celsius * 9/5 + 32;
        callback(farenheit);
    }
}

module.exports = new TemperatureConverter();
