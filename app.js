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

//SEARCH song by title
app.use('/api/song_by_title/:title',(req, res) => {
    let title = req.params.title;
    db.all(`SELECT ID, TITLE FROM songs WHERE TITLE LIKE '%${title}%'`, function (err, rows) {
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

//UPDATE one song 
app.use('/api/update_song/:id/:title',(req, res) => {
    let id = req.params.id;
    let title = req.params.title;
    db.run(`UPDATE songs SET title = ? WHERE id = ?`, [title, id], function (err) {
        console.log(title)
       res.json({message: 'success'})
   })
});

//DELETE a song (id)
app.use('/api/delete_song/:id',(req, res) => {
    let id = req.params.id;
    db.run(`DELETE FROM songs WHERE ID = ${id}`, function (err) {
        console.log(id)
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

//SEARCH artist by title
app.use('/api/artist_by_title/:title',(req, res) => {
    let title = req.params.title;
    db.all(`SELECT ID, TITLE FROM artists WHERE TITLE LIKE '%${title}%'`, function (err, rows) {
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

//UPDATE one artist 
app.use('/api/update_artist/:id/:title',(req, res) => {
    let id = req.params.id;
    let title = req.params.title;
    db.run(`UPDATE artists SET title = ? WHERE id = ?`, [title, id], function (err) {
        console.log(title)
       res.json({message: 'success'})
   })
});

//DELETE an artist (id)
app.use('/api/delete_artist/:id',(req, res) => {
    let id = req.params.id;
    db.run(`DELETE FROM artists WHERE ID = ${id}`, function (err) {
        console.log(id)
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

//SEARCH tuning by libelle
app.use('/api/tuning_by_libelle/:libelle',(req, res) => {
    let libelle = req.params.libelle;
    db.all(`SELECT ID, LIBELLE FROM tunings WHERE LIBELLE LIKE '%${libelle}%'`, function (err, rows) {
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

//UPDATE one tuning 
app.use('/api/update_tuning/:id/:libelle',(req, res) => {
    let id = req.params.id;
    let libelle = req.params.libelle;
    db.run(`UPDATE tunings SET libelle = ? WHERE id = ?`, [libelle, id], function (err) {
        console.log(libelle)
       res.json({message: 'success'})
   })
});

//DELETE a tuning (id)
app.use('/api/delete_tuning/:id',(req, res) => {
    let id = req.params.id;
    db.run(`DELETE FROM tunings WHERE ID = ${id}`, function (err) {
        console.log(id)
       res.json({message: 'success'})
   })
});

module.exports = app;