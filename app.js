const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use( express.static( "public" ) );
app.use(express.static(__dirname + '../public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static('public'));

app.use(session({
    secret: 'seCReT',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 360000 }
  }));
  
  app.use('/', require('./routes/index.js'));
  app.use('/users', require('./routes/users.js'));
  
  



app.get('*', (req, res) => {
    res.status(404).redirect("/404_page_not_found");
  });

  const PORT = process.env.PORT || 3000;
app.listen(PORT,function(){
    console.log("SERVER STARTED....!!");
});