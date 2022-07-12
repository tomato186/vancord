module.exports = (ws)=>{
  const fetch =require("node-fetch")

ws.on("message",async data =>{
  let payload = JSON.parse(data)

		let {t, event, op, d, s} = payload;
  
  switch (t){
		case"READY":
	
      let {user} = d
      
 fetch(`https://discord.com/api/v9/users/${id}`, {
			headers: {
				authorization: `Bot ${process.env[`Token`]}`,
			},
		}).then(async (res)=>{
         return [await res.json(), res.status]
                             }).then(async ([userData, status])=>{
   let {discriminator}= userData; 
     if(userData.avatar){                            
              let size =4096;
       let Size = Number(size/16)

  
if(`${Size}`.includes('.')&&!`${Number(Size/2)}`.includes(".")) throw SyntaxError("The current size is incorrect and does not equal");
       
                let format=".png";         
       if(userData.avatar.includes("a_")) format = ".gif"
       Object.defineProperty(user,"DisplayAvatar",{
         value:`https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}${format}?size=${size}`
       })
        }else{
                Object.defineProperty(user,"DisplayAvatar",{
         value:`https://cdn.discordapp.com/embed/avatars/${discriminator%5}.png`
       })
     }
         })
} 
})
}