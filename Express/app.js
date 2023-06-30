// const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')


// app.use((req, res, next) => {
//   console.log('1 middleware')
//   next(); //continue to the nexte middleware
// });

// app.use('/', (req, res, next) => {
//   console.log('2 middleware')
//   res.send('<h1>Hello</h1>'); //send the header auto to html
// });
 

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})


app.listen(3000);
