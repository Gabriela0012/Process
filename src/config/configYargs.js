import yargs from 'yargs';



const yargsInstance = yargs(process.argv.slice(2)).default({
  p:8080
}).alias({
  p:"PORT"
})

const {PORT} = yargsInstance.argv;

const config = {
  port: PORT
}

export default config