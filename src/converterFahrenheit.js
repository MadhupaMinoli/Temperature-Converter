class ConverterFahrenheit {
  convert(celsius) {
    
     // Stryker disable all
    if (celsius === null || celsius === undefined) {
      throw new Error('Invalid input');
    }
    // Stryker restore all
    return (celsius * 9) / 5 + 32;
  }
}

module.exports = { ConverterFahrenheit };
