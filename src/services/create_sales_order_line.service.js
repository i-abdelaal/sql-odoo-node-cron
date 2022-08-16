const {odoo, sqlConfig} = require('../startup/db');
const sql = require("mssql");

async () => {
    try {
        // await sql.connect(sqlConfig)
        // const result = await sql.query`select * from mytable where id = ${value}`
        // console.dir(result)
    } catch (err) {
        // ... error checks
    }
}