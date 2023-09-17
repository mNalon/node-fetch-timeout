import fetch from 'node-fetch'
import yargs from 'yargs'

const argv = yargs.argv

const total = argv.total || 10
const timeout = argv.timeout || 0
const interval = argv.interval || 1000

const url = `http://localhost:3000/constant/${total}/${interval}`

console.log(`Requesting ${url} - timeout = ${timeout}`)

const signal = AbortSignal.timeout(timeout) 

fetch(url, { ...timeout && { signal } })
  .then(res => { 
    console.log('Request stablished...')
    return res.text() 
  }).then(console.log)
  .catch(console.error)