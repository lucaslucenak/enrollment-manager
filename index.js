const express = require('express');
const app = express();


// Settings
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('main/home');
});

app.get('/register', (req, res) => {
    res.send('register');
});

app.get('/search', (req, res) => {
    res.send('search');
});

app.get('/edit', (req, res) => {
    res.send('edit');
});

app.get('/delete/:id', (req, res) => {
    var id = req.params.id;
    res.send('delete' + id);
});

app.listen(3012, function(err) {
    if(err) {
        console.error(err);
    }
    else {
        console.log('listening on http://localhost:3012');
    }
})