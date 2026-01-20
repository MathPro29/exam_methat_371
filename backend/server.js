const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());  // อนุญาต cross-origin จาก frontend
app.use(express.json());

// สร้างโฟลเดอร์ logs ถ้ายังไม่มี (สำหรับ volume demo)
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}
