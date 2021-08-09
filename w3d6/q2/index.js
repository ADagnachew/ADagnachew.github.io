const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {
   res.render("form")
});
app.post('/result', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;

   
    res.render('result',{
        name: (!name) ? "person" : name,
        age: (!age) ? "not mentioned" : age,
    });
});
app.listen(3000);