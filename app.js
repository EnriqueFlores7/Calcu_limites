const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine','hbs');
hbs.registerPartial(__dirname + '/views/partials', ()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
//Paginas en uso
app.get('/calcu', (req,res)=>{
    res.render('UI_limites');
});

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('*',(req,res)=>{
    res.render('index');
});

app.listen(port,()=>{
    console.log('Serviodor corriendo en el puerto: ',port);
});