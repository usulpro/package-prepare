var path = require('path');
var shell = require('shelljs');
var chalk = require('chalk');
var babel = ['node_modules', '.bin', 'babel'].join(path.sep);

require('./ver');

const [_, __, ...otherArgs] = process.argv;

if (otherArgs[0] === '--help' || otherArgs[0] === '-h') {
  shell.echo(
    chalk.gray(
      '\nPackage Prepare. Opinionately compiles ./src -> ./dist. Zero config'
    )
  );
  shell.echo(chalk.gray('Usage: package-prepare [additional options]\n'));
  process.exit(0);
}
if (otherArgs.length) shell.echo(chalk.cyan(`[${otherArgs}]`));

const args = `--ignore tests,stories,story.jsx,story.js src --out-dir dist --verbose ${otherArgs.join(
  ' '
)}`;
const cmd = `${babel} ${args}`;
shell.echo(chalk.gray(cmd));
shell.rm('-rf', 'dist');

shell.echo('');
shell.echo(chalk.gray("Transpiling 'src' into ES5 ..."));
shell.exec(cmd);
shell.echo(chalk.gray('Transpiling completed.'));
shell.echo('');
