import * as fs from 'fs';
import * as readline from 'readline';
//const readline = require('readline');

function runFile(filePath: string): void {
  try {
    const script = fs.readFileSync(filePath, 'utf8');
    // You can process the script here
    console.log(`Running file: ${filePath}`);
    console.log(script);
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    process.exit(1);
  }
}

const main = (args: string[]): void => {
  if (args.length > 1) {
    console.log("Usage: jlox [script]");
    process.exit(64);
  } else if (args.length === 1) {
    runFile(args[0]);
  } else {
     runPrompt();
  }
}

const runPrompt = ():void  => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', (line) => {
    if (line.trim() === '') {
      rl.close();
    } else {
      run(line);
    }
  });

  rl.on('close', () => {
    // Optionally handle clean up after the prompt is closed
    console.log('Exiting prompt...');
  });
};

function run(line:string) : void { 
  // Here you can process the input line{
  // Define what to do with the input line, for example:
  console.log(`Received: ${line}`);
}

main(process.argv.slice(2));

console.log('lox')
