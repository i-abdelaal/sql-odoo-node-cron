const Odoo = require("odoo-await");

const baseUrl = process.env.ODOO_URL || 'http://localhost';
const port = process.env.ODOO_PORT || 8070;
const db = process.env.ODOO_DB || 'test';
const username = process.env.ODOO_USERNAME || 'admin';
const password = process.env.ODOO_PASSWORD || 'admin';

const odoo = new Odoo({ baseUrl, port, db, username, password });

module.exports = Object.freeze({ odoo });