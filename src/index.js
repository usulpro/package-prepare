#!/usr/bin/env node

var path = require("path");
var shell = require("shelljs");
var chalk = require("chalk");
var babel = ["node_modules", ".bin", "babel"].join(path.sep);
const readPkgUp = require("read-pkg-up");

require("./ver");

const [_, __, ...otherArgs] = process.argv;

if (otherArgs[0] === "--help" || otherArgs[0] === "-h") {
  shell.echo(
    chalk.gray(
      "\nPackage Prepare. Opinionately compiles ./src -> ./dist. Zero config"
    )
  );
  shell.echo(chalk.gray("Usage: package-prepare [additional options]\n"));
  process.exit(0);
}
if (otherArgs.length) shell.echo(chalk.cyan(`[${otherArgs}]`));

export const defaultConfigArgs = {
  src: ["src"],
  "--ignore": [
    "**/__tests__",
    "**/*.test.js",
    "**/stories",
    "**/*.story.jsx",
    "**/*.story.js",
  ],
  "--out-dir": ["dist"],
  "--verbose": [""],
};

const packageJson = readPkgUp.sync();
const additionalConfig = packageJson.packageJson.packagePrepare;

const composeParams = params => params.join(",");

export const buildArgs = config =>
  Object.entries(config)
    .filter(([key, val]) => key !== "src")
    .map(([key, val]) => `${key} ${composeParams(val)}`)
    .reduce((acc, str) => `${acc} ${str}`, `${config.src}`)
    .trim();

const config = { ...defaultConfigArgs, ...additionalConfig };
const args = buildArgs(config);

const cmd = `${babel} ${args}`;
shell.echo(chalk.gray(cmd));
shell.rm("-rf", "dist");

shell.echo("");
shell.echo(chalk.gray(`Transpiling ${config.src} into ES5 ...`));
shell.exec(cmd);
shell.echo(chalk.gray("Transpiling completed."));
shell.echo("");
