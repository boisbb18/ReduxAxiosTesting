const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const os = require('os');


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./'));

app.listen(3000, () => 
console.log('Listening on Port ---> 3000')
)

app.get('/users', (req,res) => {
  let app = [
    { name: 'Bois', developer: true},
    { name: 'Aaron', developer: false},
    { name: 'Mike', developer: true}
  ]
  console.log('App ----> ', app)
  res.status(200).send(app)
})

app.get('*', (req, res) => {
  res.sendfile(path.resolve('index.html'))
})