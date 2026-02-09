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

client.on('pairing_code', (code) => {
    console.log('\n\n=========================================');
    console.log('ඔබේ Pairing Code එක මෙන්න: ' + code);
    console.log('=========================================\n\n');
});

client.on('ready', () => {
    console.log('බොට් සාර්ථකව සම්බන්ධ වුණා!');
});

// සර්වර් එකට ලෑස්ති වෙන්න තත්පර 10ක පොඩි විරාමයක් ලබා දීම
console.log("බොට් පණගන්වමින්... කරුණාකර රැඳී සිටින්න.");
setTimeout(() => {
    // ඔයාගේ අංකය 94 සමඟ මෙතනට ඇතුළත් කර ඇත
    client.initialize("94705160079").catch(err => console.log("Error: ", err.message));
}, 10000);
