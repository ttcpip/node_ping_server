const moment = require('moment')
const util = require('util')

const log = (arg) => {
  const stringRepresentation = typeof arg === 'string'
    ? arg
    : util.inspect(arg, {
      depth: Infinity,
      compact: true,
      colors: true
    })
  const lines = stringRepresentation.split('\n')
  const timestampStr = moment().format()
  for (let i = 0; i < lines.length; i++)
    lines[i] = `[${timestampStr}] ${lines[i]}`

  console.log(lines.join('\n'))
}

module.exports = log