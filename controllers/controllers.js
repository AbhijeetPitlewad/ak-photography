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

module.exports = {
    weddingController
}

