async function dohvatiVrijemeIPrognozu(){
    const datum = await fetch ("http://localhost:3000/date")
    const datumPodaci = await datum.text()

    const prognoza = await fetch ("http://localhost:3000/weather")
    const prognozaPodaci = await prognoza.text()

    return datumPodaci + '<br>' + prognozaPodaci
}

document.addEventListener("DOMContentLoaded", async() => {
    let noviPodaci = ''
    try {
        noviPodaci = await dohvatiVrijemeIPrognozu()

        const data = document.getElementById('app');

        data.innerHTML = noviPodaci;
    } catch(e) {
        console.log("Error: ", e);
    }
    console.log(noviPodaci);
});

/* const response_prognoza = await fetch('http://localhost:8080/prognoza')
    const data_prognoza = await response_prognoza.text();


    return data_datum + " -> " + data_prognoza; */