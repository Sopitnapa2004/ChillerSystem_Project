const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const dbConfig = {
    user: 'user',
    password: 'Seagate@1234',
    server: '141.98.17.49\\SQLSERVER',
    port: 50122,
    database: 'user', // เปลี่ยนเป็นชื่อฐานข้อมูลจริง
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

// รายชื่อ table ที่อนุญาตให้ดึงข้อมูล
const allowedTables = [
    'tblActualValue', 'tblPoint', 'centralSV', 'ObjectInstance', 'ObjectInstanceBuilding6',
    'PartitionTableByMonth', 'tblDailyValue', 'tblEnviRecord', 'tblLimitType',
    'tblTrendAnalog', 'tblTrendAnalogBackup', 'tblTrendDigital', 'tblWaterTarget',
    'tblYellowTrigger', 'ups_dictionnary', 'ups_logs', 'ups_measures', 'ups_nodes', 'ups_status'
];

// Generic API สำหรับดึงข้อมูลจาก table ที่ระบุ
app.get('/api/:table', async (req, res) => {
    const table = req.params.table;
    if (!allowedTables.includes(table)) {
        return res.status(400).send('Invalid table name');
    }
    try {
        await sql.connect(dbConfig);
        const result = await sql.query(`SELECT TOP 100 * FROM ${table}`); // จำกัด 100 แถว
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// เริ่มต้นเซิร์ฟเวอร์ที่พอร์ต 5000
app.listen(5000, () => {
    console.log('Server running on port 5000');
});