const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const diners = [
//     {
//         id:
//         name:
//         email:
//         phone number:
//     }
// ]

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'reservations.html')));
app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));