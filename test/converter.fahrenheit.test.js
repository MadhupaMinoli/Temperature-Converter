const { ConverterFahrenheit } = require('../src/converterFahrenheit');

describe('Converter - Celsius to Fahrenheit', () => {
  let converter;

  beforeEach(() => {
    converter = new ConverterFahrenheit();
  });

  test('should convert Celsius to Fahrenheit', () => {
    expect(converter.convert(0)).toBe(32);
    expect(converter.convert(100)).toBe(212);
  });
});
