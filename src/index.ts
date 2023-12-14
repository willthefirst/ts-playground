import * as readline from 'node:readline/promises'
import _ from 'lodash'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function start() {
  const name = await rl.question('Please enter your name: ')
  rl.write(`Hello, ${name}!\n`)
  rl.write('Goodbye!\n')
  rl.close()
}

start()
