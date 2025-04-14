import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/controllers/**/*.ts',
    'src/services/**/*.ts',
    'src/routes/**/*.ts',
    'src/middlewares/**/*.ts',
    'src/utils/**/*.ts',
  ],
  moduleFileExtensions: ['ts', 'js', 'json'],
};

export default config;
