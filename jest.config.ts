// jest.config.json or jest property in package.json
// module.exports = {
//   testEnvironment: 'jsdom',
// }
// module.exports = {
//   testEnvironment: "jest-environment-jsdom-sixteen",
//   testURL: "http://localhost",
// };
// module.exports = {
//   testEnvironment: "jest-environment-jsdom-sixteen",
//   testEnvironmentOptions: {
//     url: "http://192.168.241.2",
//   },
// };
module.exports = {
  // Other config
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["./setupTests.ts", "./setupJest.ts"],
};
