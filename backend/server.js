// code เชื่อมต่อ backend mongoDB
// import express ใช้สำหรับสร้าง routes ต่างๆ
const express = require('express');

// import cors ใช้แก้ปัญหา cross-platform browser
const cors = require('cors');

// import mongoose ไลบารี่ที่ใช้สำหรับ เชื่อมต่อ mongoDB และ สร้าง Object document mapping
const mongoose = require('mongoose');

// import dotenv ใช้อ่านไฟล์ .env
require('dotenv').config();

// เก็บ ฟังก์ชั่น express ไว้ใน app เพื่อให้ใช้งานง่าย
const app = express();

// สร้างตัวแปรไว้เก็บ port ถ้าในไฟล์ .env มีตัวแปรชื่อ PORT จะใช้ port ใน .env port ที่สร้าง จะซ้ำกับ port frontend ไม่ได้
const PORT = process.env.PORT || 8000;

// import body-parser ไลบราลี่ จัดการ ให้ backend ใช้อ่าน json จากการส่งค่าผ่าน body ได้
const bodyParser = require('body-parser');

// เรียกใช้ body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// เรียกใช้ cors
app.use(cors());
// เรียกใช้ express.json
app.use(express.json());


// Connect database mongo
// process.env คือ การบอกว่าจะให้อ่านไฟล์ที่ชื่อ .env และ ชื่อตัวแปร connection_url (จะเป็นชื่ออื่นก็ได้แต่ต้องตั้งให้เหมือนกัน)

// เชื่อมต่อ mongo ด้วย mongoose.connect ที่ uri
const uri = process.env.uri;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

// เก็บการเชื่อมต่อลงตัวแปร และเช็ค once ทุกครั้งที่ hot-reload และ log ข้อความ ถ้า เชื่อมต่อสำเร็จ
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Router --- under this line


// Router --- above this line

// ส่วนล่างสุดของไฟล์ server.js
// สร้างการเชื่อมต่อของ server
// PORT จาก ตัวแปรที่กำหนดข้างบน
app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});