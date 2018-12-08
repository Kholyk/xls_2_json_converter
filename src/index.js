// import readlineSync from 'readline-sync';
import xlsToJson from 'xls-to-json';
import getArgFromCLI from 'command-line-commands';


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
