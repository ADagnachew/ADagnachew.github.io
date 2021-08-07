const express = require('express');
const app = express();
app.use(express.urlencoded({extended:false}));
app.get('/', (req, res) => {
   res.send( "<form action='/result' method='POST'>"+
   "<label>Name <input type='text' name='name'></label>"+
   "<label>Age <input type='text' name='age'></label>"+
   "<input type='submit' value='submit query'></label>"+
"</form>")
});
app.post('/result', (req, res) => {
   let name = req.query.name;
   let age = req.query.age;

   age = (!age) ? "not mentioned" : age;
   name = (!name) ? "person" : name;
   res.send(`Welcome ${name} and your age is: ${age}`);
});
app.listen(3000);