import lista from "./lista.js"

function nasumicniBr (max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let dodaj = (req,res) => {
    let noviBr = nasumicniBr(100)
    lista.push(noviBr)
    let int = parseInt (noviBr)

    res.send(`Broj ${int} je dodan u listu`)
}

export default dodaj