const intents =new Map()
	intents.set("GUILDS",1 << 0) 
intents.set("GUILD_MEMBERS",1 << 1) 
intents.set("GUILD_BANS",1 << 2) 
intents.set("GUILD_EMOJIS_AND_STICKERS",1 << 3) 
intents.set("GUILD_INTEGRATIONS",1 << 4) 
intents.set("GUILD_WEBHOOKS",1 << 5) 
intents.set("GUILD_INVITES",1 << 6) 
intents.set("GUILD_VOICE_STATES",1 << 7) 
intents.set("GUILD_PRESENCES",1 << 8) 
intents.set("GUILD_MESSAGES",1 << 9) 
intents.set("GUILD_MESSAGE_REACTIONS",1 << 10) 
intents.set("GUILD_MESSAGE_TYPING",1 << 11) 
intents.set("DIRECT_MESSAGES",1 << 12) 
intents.set("DIRECT_MESSAGE_REACTIONS",1 << 13) 
intents.set("DIRECT_MESSAGE_TYPING",1 << 14) 
module.exports =intents

