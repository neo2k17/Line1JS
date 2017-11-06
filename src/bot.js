const LineConnect = require('./connect');
let LINE = require('./main.js');
console.info("\n\
=========================================\n\
BotName: LINE Etot JS\n\
Version: 0.2.1\n\
Terima Kasih Kepada @Alfathdirk @TCR_TEAM\n\
=========================================\n\
\nNOTE : Ini Adalah AlphatJS Lama Buatan @Alfathdirk @TCR_TEAM Dan Ini Telah Dikembangin Oleh @TAB_TEAM\nTolong Untuk Tidak Perjual-Belikan Script Ini!\n\
****Nekopoi.host Running****");

const auth = {
	authToken: 'EmGhTGXlUNOYBQJMJeRb.5QT9zEniAkpIZc1LxU3YwW.Di0GM6LbN8QR9OlXFqODiRQBajadfxYwJHZCDK5Aj2g=',
	certificate: '79791d449aeb202d15a0a0cb130bbaa2283feb43bfbd1a5fc93138a3fd6dcdb8',
}
let client =  new LineConnect(auth);
// let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});
