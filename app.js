const express = require("express");
app = express();

const path = require("path");

app.use(express.static('public'))
//app.use('/static', express.static(path.join(__dirname, 'public')))

const filepath = path.resolve(__dirname, 'index.html');
console.log(filepath);

app.get('/', function (req, res) {
    //to send text file
        //res.type('text/plain');
        //res.status(200);
        //res.send('GeeksforGeeks');

    // to send HTMP file
    res.sendFile(filepath);
});
 
app.listen(4000, function () {
    console.log('Listening.....');
});