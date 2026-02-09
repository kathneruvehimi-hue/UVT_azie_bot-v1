const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    authTimeoutMs: 0, // සර්වර් එකේ ප්‍රමාදය නොසලකා හැරීමට
    puppeteer: {
        headless: true,
        handleSIGINT: false,
        handleSIGTERM: false,
        handleSIGHUP: false,
        executablePath: '/usr/bin/google-chrome-stable',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--no-zygote',
            '--single-process',
            '--disable-gpu'
        ],
    }
});

// Pairing code එක ලැබෙන තැන
client.on('pairing_code', (code) => {
    console.log('\n\n=========================================');
    console.log('ඔබේ Pairing Code එක මෙන්න: ' + code);
    console.log('=========================================\n\n');
});

client.on('ready', () => {
    console.log('බොට් සාර්ථකව සම්බන්ධ වුණා!');
});

client.initialize();
