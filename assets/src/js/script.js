
; (function () {
    'use strict'

    let button = document.getElementById('button-addon2');

    button.addEventListener('click', () => {
        let input = document.getElementById('pais').value;
        let finalURL = `https://restcountries.com/v3.1/name/${input}?fullText=true`;
        console.log(finalURL)

        fetch(finalURL)
            .then((response) => {
                return response.json()
            })
            .then((data) => {

                let flags = document.getElementById('flags');
                let name = document.getElementById('name');
                let capital = document.getElementById('capital');
                let pop = document.getElementById('pop');
                let cont = document.getElementById('cont');

                name.innerHTML = input;
                capital.innerHTML = data[0].capital[0];
                cont.innerHTML = data[0].continents[0]
                pop.innerHTML = data[0].population
                flags.src = data[0].flags.svg
            })

    });






})();