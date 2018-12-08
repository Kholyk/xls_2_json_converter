// import readlineSync from 'readline-sync';
import xlsToJson from 'xls-to-json';
import getArgFromCLI from 'command-line-commands';

/**
const commandLineCommands = require('command-line-commands')

const validCommands = [ null, 'clean', 'update', 'install' ]
const { command, argv } = commandLineCommands(validCommands)

print the command and remaining command-line args
console.log('command: %s', command)
console.log('argv:    %s', JSON.stringify(argv))
*/

// Interactive mode (test mode)
// const inputFileName = readlineSync.question('\r\nInput filename of XLS(X) file: ');
// const outputFileName = readlineSync.question('\r\nInput filename of JSON file: ');
// console.log(`\r\n Your file has hame: ${fileName}`);

const catchError = (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
};

const exec = (inputFile, outputFile, datasheet) => {
  const args = {
    input: inputFile,
    output: outputFile,
    sheet: datasheet,
  };

  return xlsToJson(args, catchError);
};

export default () => {
  const validCommands = ['null', 'save'];
  const { command, argv } = getArgFromCLI(validCommands);

  return (command === 'save' && argv.length !== 0) ?
    exec(argv[0], argv[1] || `${argv[0]}.json`, argv[2] || null)
    : -1;
};
