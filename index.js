const { Client, LocalAuth } = require('whatsapp-web.js');

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

// Pairing code එක ලොග්ස් වල පෙන්වීමට
client.on('pairing_code', (code) => {
    console.log('--- පියවර 2: වට්සැප් එකට දාන්න ඕන කේතය ---');
    console.log('ඔබේ Pairing Code එක මෙන්න: ' + code);
    console.log('-----------------------------------------');
});

client.on('ready', () => {
    console.log('බොට් සාර්ථකව සම්බන්ධ වුණා!');
});

client.initialize();
