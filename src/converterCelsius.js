class ConverterCelsius {
  convert(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9; //adding a comment
  }
}

module.exports = { ConverterCelsius };