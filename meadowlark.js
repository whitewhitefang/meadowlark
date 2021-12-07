const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const port = process.env.port || 3000;
const fortunes = [
    'Strike your fears, otherwise your fears will strike you',
    'Every river need its creeks',
    'Don`t be afraid of unknown',
    'Pleasant surprise is waiting you',
    'Be simple anywhere and anytime'
];

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render('home'));

app.get('/about', (req, res) => {
    const random = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', {fortune: random});
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
