class ConverterFahrenheit {
  convert(celsius) {
    
    if (celsius === null || celsius === undefined) {
      throw new Error('Invalid input');
    }
    return (celsius * 9) / 5 + 32;
  }
}

module.exports = { ConverterFahrenheit };
