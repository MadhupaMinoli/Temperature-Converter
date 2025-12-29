class ConverterCelsius {
  convert(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9 + 0.1; // small logic change
  }
}

module.exports = { ConverterCelsius };