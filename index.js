import fs from 'fs'
import YAML from 'yaml'

const inputFilename = process.argv[2]
const input = fs.readFileSync(inputFilename, 'utf-8')
const yml = YAML.parse(input)

const json = JSON.stringify(yml, null, 2)
const outputFilename = process.argv[3]
fs.writeFileSync(outputFilename, json)
