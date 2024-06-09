const os =require('os')
//info about current user
const user=os.userInfo()
console.log(user)
//method return the system uptime in second
console.log(`the uptime is ${os.uptime()}`)

const features = {
 name: os.type(),
 release : os.release(),
totalmem : os.totalmem(),
freemem: os.freemem()
}
console.log(features)