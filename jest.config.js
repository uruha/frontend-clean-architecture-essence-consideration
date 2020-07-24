const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/.next/',
    '<rootDir>/out/'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^~pages/(.*)$': '<rootDir>/pages/$1'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  }
};
