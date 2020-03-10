class TemperatureConverter{
    //Farenheit to Celsius
    static farenheti2celsius(farenheit){
        return (farenheit - 32) * 5 / 9;
    }
    //Celsius to Farenheit
    static celsius2farenheit(celsius){
        return celsius * 9/5 + 32;
    }
}

module.exports = new TemperatureConverter();
