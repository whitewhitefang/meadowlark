const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const port = process.env.port || 3000;
const fortune = require('./lib/fortune');

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render('home'));

app.get('/about', (req, res) => {
    res.render('about', {fortune: fortune.getFortune()});
});

app.use((req, res) => {
    res.status(404);
    res.render('404');
});

app.use((err, req, res, next) => {
    console.error(err.message);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server error');
});

app.listen(port, () => console.log(`Server is running on ${port}`));
