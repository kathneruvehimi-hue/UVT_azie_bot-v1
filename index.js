const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    authTimeoutMs: 0, 
    puppeteer: {
        headless: true,
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

// සර්වර් එකට හුස්මක් ගන්න තත්පර 10ක ප්‍රමාදයක් ලබා දීම
setTimeout(() => {
    console.log("බොට් පණගන්වමින්... කරුණාකර රැඳී සිටින්න.");
    client.initialize();
}, 10000);
