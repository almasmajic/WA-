import express from 'express';
import dodaj from './routes/dodaj.js'
import dohvati from './routes/dohvati.js'

const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati

app.get('/', (req, res) => res.send('Hello World, ovaj puta preko browsera!'))

app.get('/dodaj', dodaj)

app.get('/dohvati', dohvati)


app.listen(port, () => console.log(`Slušam na portu ${port}!`))