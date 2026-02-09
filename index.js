const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        handleSIGINT: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
});

client.on('qr', async (qr) => {
    // ඔයාගේ අංකය මෙහි ඇතුළත් කර ඇත
    const pairingCode = await client.getPairingCode('94705160079'); 
    console.log('--- පියවර 1 ---');
    console.log('ඔබේ Pairing Code එක මෙන්න: ', pairingCode);
    console.log('--------------');
});

client.on('ready', () => {
    console.log('බොට් සාර්ථකව සම්බන්ධ වුණා! දැන් වැඩ.');
});

client.on('message', msg => {
    if (msg.body.toLowerCase() === 'hello') {
        msg.reply('UVT Azie Bot v1 සක්‍රීයයි! 🚀');
    }
});

client.initialize();

