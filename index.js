const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        executablePath: '/usr/bin/google-chrome-stable', // පද්ධතියේ Chrome එක කෙලින්ම පාවිච්චි කිරීමට
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
    console.log('-----------------------------------------');
    console.log('ඔබේ Pairing Code එක මෙන්න: ' + code);
    console.log('-----------------------------------------');
});

client.on('ready', () => {
    console.log('බොට් සාර්ථකව සම්බන්ධ වුණා!');
});

client.initialize();
;
