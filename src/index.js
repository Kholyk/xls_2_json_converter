// import readlineSync from 'readline-sync';
// import xlsToJson from 'xls-to-json';
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

// const catchError = (err, result) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(result);
//   }
// };

// const exec = (inputFile, outputFile, datasheet) => {
//   const args = {
//     input: inputFile,
//     output: outputFile,
//     sheet: datasheet,
//   };

//   return xlsToJson(args, catchError);
// };

// test
const valid = ['null', 'save'];
const { cmd, arg } = getArgFromCLI(valid);

console.log('command: %s', cmd);
console.log('argv:    %s', JSON.stringify(arg));
// test

export default () => {
  const validCommands = ['null', 'save'];
  const { command, argv } = getArgFromCLI(validCommands);

  console.log('command: %s', command);
  console.log('argv:    %s', JSON.stringify(argv));
};
