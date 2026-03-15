const e = require('express');
const app = e();

app.get('/search', (req, res) => {
    res.send('<html><body>INSIDE SEARCH API...</html></body>');
})

app.get('/view', (req, res) => {
    res.send('<html><body>INSIDE VIEW API...</html></body>');
})

app.listen(5000, () => 
    console.log('Express Server Started at Port No: 5000')
);