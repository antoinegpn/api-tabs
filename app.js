const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('MyDB.db')
const app = express();

//GET all songs
app.use('/api/songs',(req, res) => {
     db.all('SELECT ID, TITLE FROM songs', function (err, rows) {
        console.log(rows)
        res.json(rows)
    })
});

//GET one song (id)
app.use('/api/song_by_id/:id',(req, res) => {
    let id = req.params.id;
    db.all(`SELECT ID, TITLE FROM songs WHERE ID = ${id}`, function (err, rows) {
       res.json(rows)
   })
});

//POST new song
app.use('/api/add_song/:title',(req, res) => {
    let title = req.params.title;
    db.run(`INSERT INTO songs (TITLE) VALUES (?)`, [title], function (err) {
        console.log(title)
       res.json({message: 'success'})
   })
});

//GET all artists
app.use('/api/artists',(req, res) => {
    db.all('SELECT ID, TITLE FROM artists', function (err, rows) {
        console.log(rows);
       res.json(rows)
   })
});

//GET one artist (id)
app.use('/api/artist_by_id/:id',(req, res) => {
    let id = req.params.id;
    db.all(`SELECT ID, TITLE FROM artists WHERE ID = ${id}`, function (err, rows) {
       res.json(rows)
   })
});

//POST new artist
app.use('/api/add_artist/:title',(req, res) => {
    let title = req.params.title;
    db.run(`INSERT INTO artists (TITLE) VALUES (?)`, [title], function (err) {
        console.log(title)
       res.json({message: 'success'})
   })
});

//GET all tunings
app.use('/api/tunings',(req, res) => {
    db.all('SELECT ID, LIBELLE FROM tunings', function (err, rows) {
        console.log(rows);
       res.json(rows)
   })
});

//GET one tuning (id)
app.use('/api/tuning_by_id/:id',(req, res) => {
    let id = req.params.id;
    db.all(`SELECT ID, LIBELLE FROM tunings WHERE ID = ${id}`, function (err, rows) {
       res.json(rows)
   })
});

//POST new tuning
app.use('/api/add_tuning/:libelle',(req, res) => {
    let libelle = req.params.libelle;
    db.run(`INSERT INTO tunings (LIBELLE) VALUES (?)`, [libelle], function (err) {
        console.log(libelle)
       res.json({message: 'success'})
   })
});

//Generate tables
app.use('/api/create_tables',(req, res) => {
    db.run("CREATE TABLE 'artists' ('id' INTEGER, 'title' TEXT, PRIMARY KEY('id' AUTOINCREMENT));CREATE TABLE 'songs' ('id' INTEGER, 'title' TEXT, PRIMARY KEY('id' AUTOINCREMENT));CREATE TABLE 'tunings' ('id' INTEGER, 'libelle' TEXT, PRIMARY KEY('id' AUTOINCREMENT))", function (err, rows) {
        console.log('success');
   })
});

module.exports = app;