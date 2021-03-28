import lista from "./lista.js"

let dohvati = (req, res) => {
    res.send(lista.join(' ')) //svi brojevi moraju biti odvojeni razmakom
}

export default dohvati