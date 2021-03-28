import express from 'express';
import routes from './routes';

const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati

app.get('/studenti', routes.studenti)
app.get('/studenti/first', routes.first)
app.get('/studenti/last', routes.last)

app.listen(port, () => console.log(`Slušam na portu ${port}!`))