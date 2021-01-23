import { buildArgs, defaultConfigArgs } from "../index";

var packageJson = require("../../package.json");

it("should create params", () => {
  const args = buildArgs(defaultConfigArgs);
  expect(args).toMatchInlineSnapshot(
    `"src --ignore **/__tests__,**/*.test.js,**/stories,**/*.story.jsx,**/*.story.js --out-dir dist --verbose"`
  );
});

it("should extend params", () => {
  const additionalConfig = packageJson["package-prepare"];
  const args = buildArgs({ ...defaultConfigArgs, ...additionalConfig });
  expect(args).toMatchInlineSnapshot(
    `"addon --ignore **/__tests__,**/*.test.js,**/stories,**/*.story.jsx,**/*.story.js --out-dir dist --verbose"`
  );
});
