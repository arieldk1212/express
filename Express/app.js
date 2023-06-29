// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use((req, res, next) => {
//   console.log('1 middleware')
//   next(); //continue to the nexte middleware
// });

// app.use('/', (req, res, next) => {
//   console.log('2 middleware')
//   res.send('<h1>Hello</h1>'); //send the header auto to html
// });
 


app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
  console.log('this always runs');
  next();
});


app.use('/add-products', (req, res, next) => {
  console.log('in another middleware');
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit>Add Product</button></form>');
});

app.use('/product', (req, res, next) =>{

  res.redirect('/')
})

app.use('/', (req, res, next) =>{
  console.log('another another middleware');
  res.send('<h1>Hi!</h1>');
});
app.listen(3000);
