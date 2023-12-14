import * as readline from 'node:readline/promises'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function askName() {
  const name = await rl.question('Please enter your name: ')
  rl.write(`Hello, ${name}!\n`)
}

async function start() {
  while (true) {
    await askName()
  }
}

start()
