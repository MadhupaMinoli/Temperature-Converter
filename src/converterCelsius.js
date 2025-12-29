class ConverterCelsius {
  convert(fahrenheit) {
    if (fahrenheit === null || fahrenheit === undefined) {
      throw new Error('Invalid input');
    }
    return ((fahrenheit - 32) * 5) / 9; //adding a comment
  }
}

module.exports = { ConverterCelsius };