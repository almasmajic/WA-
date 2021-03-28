import info from './lista_studenti.json'

function data(student) {
    return (
        "JMBAG: " +
        student.JMBAG +
        ", " +
        student.ime +
        " " + student.prezime +
        ", " +
        student.godina_studija +
        ". godina.<br>"
      );
}

let studenti = (req,res) => {
    let popis = " "
    info.studenti.forEach((student) => {
        popis += data(student)
    })
    res.send(popis)
}

let first = (req, res) => {
    res.send(data(info.studenti[0]))
  };

let last = (req, res) => {
    res.send(data(info.studenti[info.studenti.length - 1]))
    };

 export default { studenti, first, last}