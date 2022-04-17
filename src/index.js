const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('testeee');
})

app.listen(3012, function(err) {
    if(err) {
        console.error(err);
    }
    else {
        console.log('listening on http://localhost:3012');
    }
})