const { ConverterCelsius } = require('../src/converterCelsius');

describe('Converter - Fahrenheit to Celsius', () => {
  let converter;

  beforeEach(() => {
    converter = new ConverterCelsius();
  });

  test('should convert Fahrenheit to Celsius', () => {
    expect(converter.convert(32)).toBe(0);
    expect(converter.convert(212)).toBe(100);
  });
});
