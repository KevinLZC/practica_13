let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/person/:id', (req, res) => {
    res.render('person', {ID: req.params.id});
});

let data = [
    {id: 1, nombre: "Kevin", apellido: "Lazaro Cernas", edad: 19},
    {id: 2, nombre: "Estela", apellido: "Perez Suarez", edad: 20},
    {id: 3, nombre: "Hugo", apellido: "Estrada Ramirez", edad: 18},
    {id: 4, nombre: "Sabrina", apellido: "Contreras Morales", edad: 17},
    {id: 5, nombre: "Pablo", apellido: "Gomez Herrera", edad: 19},
]
app.get('/personas', (req, res) => {
    res.render('personas', {data});
});

app.listen(port);