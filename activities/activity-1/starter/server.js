// server.js — Activity 1 (STARTER)
// See ../instructions.md for the full brief.
// Run: npm start

import { createServer } from 'node:http';
import { createInterface } from 'node:readline';

const PORT = 3000;

let message = 'Hello, World!';
let count = 0;

// --- HTTP server ---
const server = createServer((req, res) => {
  // TODO 1: increment count for every request.
  // TODO 2: respond with `${message} (served ${count} requests)\n`
});

// --- Readline console ---
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
});

rl.on('line', (line) => {
  const [cmd, ...args] = line.trim().split(/\s+/);

  // TODO 3: switch on cmd and implement the commands from instructions.md:
  //   add | sub | mul | div  — parse args with Number(), print the result
  //                            (div: handle b === 0)
  //   upper                  — print args.join(' ').toUpperCase()
  //   reverse                — reverse the joined string and print it
  //   count                  — print the request count
  //   set                    — set message = args.join(' ')
  //   help                   — print the list of commands
  //   stop                   — server.close(); rl.close(); process.exit(0)
  //   default                — print "Unknown command: <cmd>"

  rl.prompt();
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  rl.prompt();
});
