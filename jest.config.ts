export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest", // ts-jest transform tsx and ts files
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // jest.setup.ts will be executed after jest is set up
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // mock styling files
    "^.+\\.svg$": "jest-transformer-svg", // mock svg files
  },
};
