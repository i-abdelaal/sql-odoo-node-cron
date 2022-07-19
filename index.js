require('dotenv').config();
const { odoo, serverInit } = require('./src/startup');

odoo.connect().then(() => {
    console.log(`Odoo connected on port ${odoo.port}`);
    serverInit();
}).catch(error => {
    console.table({error});
});