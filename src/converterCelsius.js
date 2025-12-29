class ConverterCelsius {
  convert(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }
}

module.exports = { ConverterCelsius };