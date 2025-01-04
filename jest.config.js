const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js app directory
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Optional setup file
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Map @ to the src directory
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use Babel for transformation
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // Recognize file extensions
};

module.exports = createJestConfig(customJestConfig);