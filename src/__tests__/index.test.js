import { buildArgs, defaultConfigArgs } from "../index";

it("should create params", () => {
  const args = buildArgs(defaultConfigArgs);
  expect(args).toMatchInlineSnapshot(
    `"src  --ignore **/__tests__,test.js,stories,story.jsx,story.js --out-dir dist --verbose"`
  );
});
