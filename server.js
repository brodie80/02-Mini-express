//Dependencies
const express = require('express');
const path = require('path');
const reservationData = require("../data/reservationData.js");

// Sets up the Express App
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, 'reservations.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));



function checkReservation(){
    if (reservationData.length  <= 5) {
        return true;
        
      } 
      else {
        return false;
      }

}
    
  




//Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
