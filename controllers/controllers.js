const path = require('path');
const fs = require('fs');


function weddingController(req, res) {

    fs.readdir('./public/wedding/', function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        // files.forEach(function (file) {
        //     console.log(file);
        // });

        res.render("wedding-photos", {
            path: "/wedding/",
            files
        });

    });
}


function preWeddingController(req, res) {

    fs.readdir('./public/prewedding/', function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        // files.forEach(function (file) {
        //     console.log(file);
        // });

        res.render("pre-wedding-photos", {
            path: "/prewedding/",
            files
        });

    });
}


function babyShowerController(req, res) {

    fs.readdir('./public/baby-shower/', function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        // files.forEach(function (file) {
        //     console.log(file);
        // });

        res.render("baby-shower", {
            path: "/baby-shower/",
            files
        });

    });
}

function albumController(req, res) {

    fs.readdir('./public/album/', function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        // files.forEach(function (file) {
        //     console.log(file);
        // });

        res.render("album", {
            path: "/album/",
            files
        });

    });
}

module.exports = {
    weddingController,
    preWeddingController,
    babyShowerController,
    albumController
}

