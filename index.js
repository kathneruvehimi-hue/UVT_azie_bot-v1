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

// සර්වර් එකට හුස්මක් ගන්න තත්පර 50ක ප්‍රමාදයක් ලබා දීම
console.log("සර්වර් එක සූදානම් වන තෙක් තත්පර 50ක් රැඳී සිටින්න...");
setTimeout(async () => {
    console.log("දැන් බොට් පණගන්වමින්... Pairing Code එක ටිකකින් වැටෙයි.");
    try {
        // ඔයාගේ අංකය මෙතනට ඇතුළත් කර ඇත
        await client.initialize("94705160079"); 
    } catch (err) {
        console.log("Error: ", err.message);
    }
}, 50000);
