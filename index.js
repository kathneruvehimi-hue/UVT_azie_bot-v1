const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--no-first-run',
            '--no-zygote',
            '--single-process',
            '--disable-gpu'
        ],
    }
});

client.on('pairing_code', (code) => {
    console.log('ඔබේ Pairing Code එක මෙන්න: ' + code);
});

client.on('ready', () => {
    console.log('බොට් සාර්ථකව සම්බන්ධ වුණා!');
});

client.initialize();
