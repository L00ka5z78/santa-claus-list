// const mysql = require('mysql2/promise')
const {createPool} = require("mysql2/promise");

const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'megak_santa_gifts',
    port: 3305,                     //bez tego nie dziala
    namedPlaceholders: true,
    decimalNumbers: true
});

module.exports = {
    pool,
};