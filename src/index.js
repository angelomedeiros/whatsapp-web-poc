import { Client } from 'whatsapp-web.js';

const client = new Client({
  puppeteer: {
    headless: false,
  },
});

client.on('ready', () => console.log('Client is ready'));

client.on('message', (message) => console.log(message));

client.initialize();
