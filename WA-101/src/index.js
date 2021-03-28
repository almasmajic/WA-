import express from 'express';
import moment from 'moment';
import cors from 'cors';

const app = express()
const port = 3000

app.use(cors())

//Vraca trenutni datum i vrijeme u zadanom formatu
app.get('/date', (req,res) => {
    let date = moment().format("DD.MM.YYYY. HH:mm")
    res.send(`Danas je: ${date}`)
})

//Vraca nasumicnu recenicu o danasnjoj predikciji prognoze
app.get('/weather', (req,res) => {
    let weather = [
        'Danas će biti sunčano', 
        'Danas će biti kišovito',
        'Danas će biti oblačno'
    ];

    let todaysForecast = weather [Math.floor (Math.random() * weather.length)];
    res.send(todaysForecast);
})

//Vraca opis na kojim se adresama nalaze prve dvije rute

app.get('/', (req,res) => {
    res.send(
        "http://localhost:3000/date - trenutni datum i vrijeme  http://localhost:3000/weather - trenutna prognoza (nasumicno)"
        )
 })
 
app.listen(port, () => console.log(`Slusam na portu ${port}!`))