let {isArray} =require("util")
let Intents = require("./Intents.js")



const Websocket =require("ws")
const ws = new Websocket("wss://gateway.discord.gg/?v=10&encoding=json")
let EventEmitter =require("events")
let events =new EventEmitter()


class Client{
constructor(options){
  
	let intents = options.intents
  /**
* @parma {Object} Options
* @parma {Array} Intents
* @return {Object} Client
*/
if(isArray(intents)){
	let ints =0;
for (let index = 0; index < intents.length; index++) {
	ints += parseInt(Intents.get(intents[index]))
}
	this.options ={
intents:ints, 
		shards:"undefined"
} 
}else{
	throw new SyntaxError("You have to write intentions inside a array")
	}


}
	
on(eventName,callback){
  /**
* @parma {String} EventName 
* @parma {Function} Callback
* @return {Function Callback} 
*/
events.on(`${eventName}`, callback)

}
  emit(eventName,callback){
    /**
* @parma {String} EventName 
* @parma {Function} Callback
* @return {} 
*/
    events.emit(`${eventName}`, callback)
  }
	login(token){
		let options = this.options
if(this.options.intents <= 0 ||!this.options.intents) throw new SyntaxError("You must use the intents before login")
  

	if(!typeof token =="string") throw new SyntaxError("You can't put the token in a array or object.")

    /**
* @parma {String} Token
* @parma {Object} Options
* @parma {Number} Intents
*/
var payload={
	op:2,
	d:{
		token:token, 
		intents:this.options.intents,
		properties: {
      $os: "linux",
      $browser: "chrome",
      $device: "chrome"
		}
	}
} 
    this.payload = payload;
    if(this.payload !== payload) payload = this.payload;
/**
* @parma {Object} Payload
* @parma {Library} Ws
*/

ws.on("open", function open(){	ws.send(JSON.stringify(payload))
                              require("fs").readdirSync(require("path").join(__dirname, "events")).forEach(async function(file) {

/**
* @parma {String} File
* @parma {Library} Fs
* @parma {Process Path} Path
* @return {Function} require("./Path/Files")
*/
    require("./events/" + file)(ws)

})


})
	
	ws.on("message",async function incoming(data){
	let payload = JSON.parse(data)

		let {t, event, op, d, s} = payload;
 /**
* @parma {Object} Data
* @parma {Object} Payload
* @return {Objects} Payload
*/
		 switch (op) {
		case 10:
		const {heartbeat_interval} =d;
		setInterval(()=>{
ws.send(JSON.stringify({op:1,d:null}))
	}, heartbeat_interval)
     }
		
	})
	
    ws.on("close",async (code, reason)=>{
      /**
* @parma {Status Number} Code
* @parma {String} Reason
* @return Error  
*/
      if(code) throw new SyntaxError(`Error:${reason.toString()}`)
      
    })
	
		
	

		
		Client.prototype.token = token;
		
	}
  

	}				

Client.prototype.ws = ws;


module.exports ={Client:Client};
