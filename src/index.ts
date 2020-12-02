import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv)).argv;

const args = yargs.options({
  subject: { type: 'string', demandOption: true, alias: 's' },
}).argv;

console.log(argv);
