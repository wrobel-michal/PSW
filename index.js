const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path')

const users = [
    {
        'id': 1,
        'name': 'Raynald',
        'surname': 'St-Pierre'
    },
    {
        'id': 2,
        'name': 'Kris',
        'surname': 'Costa'
    }
]

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home', {users})
});

app.get('/new', (req,res) => {
    res.render('new')
})


app.post('/', (req, res) => {
    const {name, surname} = req.body;
    users.push({'id': users.length + 1,name, surname})
    res.redirect("/")
})

app.get('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(c => c.id === parseInt(id));
    res.render('show', { user });
})

app.listen(PORT, () => {
    console.log(`App listening on port:  ${PORT}`)
});

