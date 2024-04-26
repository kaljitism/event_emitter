import EventEmitter from "events";

export class ZenDevelopmentProcess extends EventEmitter{}
const zenDevProcess = new ZenDevelopmentProcess()

zenDevProcess.on("module-written", (module: String) => {
  console.log(`>> Running tests on ${module}`)
  console.log('>> All tests passed!\n')
})

zenDevProcess.on("compile-time-bugs", (linter_fix: String) => {
  console.log(">> Running Language Server..")
  console.log(`>> Running ${linter_fix}..`)
  console.log(">> All compile time errors solved")
})

zenDevProcess.on("runtime-bugs", () => {
  console.log(">> Applying Static Analysis..\n>> Refactoring..\n>> All runtime errors solved\n")
})

zenDevProcess.on( "pull-request", ( pr: string ) => {
  console.log( `>> Reviewing..
        >> Running Tests..
        >> All checks passed
        >> Pull Request: ${ pr } Merged` )
} )

zenDevProcess.on("server-overload", () => {
  console.log(`>> Deploying on Serverless..
        >> Generating Load Balancer..
        >> Deploying Load Balancer as a proxy between client and server..
        >> Requests resolving smoothly, No Server-Overload`)
})

zenDevProcess.emit('module-written', 'engine')
zenDevProcess.emit('compile-time-bugs', 'linter-fix')
zenDevProcess.emit("runtime-bugs")
zenDevProcess.emit("pull-request", "pr#")
zenDevProcess.emit("server-overload")
