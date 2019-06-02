module.exports = {
	cookiePassword: "0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
	demoSite: false,
	coin: "TNET",

	listen:{
		port:3002
	},

	rpcBlacklist:[
	        "getblockchaininfo",
		"stop",
		"stop",
		"savemempool",
		"addnode",
		"disconnectnode",
		"setban",
		"setnetworkactive",
		"lockunspent",
		"move",
		"removeprunedfunds",
		"rescanblockchain",
		"encryptwallet",
		"backupwallet",
		"importwallet",
		"walletlock",
		"walletpassphrase",
		"walletpassphrasechange"
	],

	// Edit "rpc" below to target your node.
	// You may delete this section if you wish to connect manually via the UI.

	rpc: {
		host:"127.0.0.1",
		port:10332,
		username:"rpc-username",
		password:"rpc-password"
	},

	// Edit "ipWhitelistForRpcCommands" regex to limit access to RPC Browser / Terminal to matching IPs
	ipWhitelistForRpcCommands:/^(127\.0\.0\.1)?(\:\:1)?$/,

	donationAddresses:{
		coins:["TNET"],
		
		"TNET":{address:"15SghANf14BiH6MDV7ZikD8jmjBkWwYq7e", urlPrefix:"tnet:"}
	},
};
