module.exports = {
    preset: 'ts-jest',
    moduleDirectories: ["node_modules", "app"],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
    }
};