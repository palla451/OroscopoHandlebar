$(document).ready(function () {
    // -- in base a quali segni ho a disposizione
    // -- vado a disegnare il contenuto

    drawElencoSegni();

    // --- Voglio individuare il click su un segno per capire di che oroscopo si tratta
    $('.lnkSegno').on('click', function (evHandler) {

        // con questi 2 comandi stoppo il naturale funzionamento del link
        // cioè eseguire "href"
        // e propagazione del click su un determinato link e relativo return false
        evHandler.stopPropagation();
        evHandler.preventDefault();

        // con l metodo .data e se ho un tag data- posso recuperare l'attributo
        // come di seguito
        var segnoCliccato = $(this).data('sign');
        console.log(segnoCliccato);

        var immagineSegno = $(this).data('immagine');
        console.log(immagineSegno);

        // vado a valorizzare la variabile globale
        window.segnoSelezionato = segnoCliccato;
        $('#recapSegno').html(segnoCliccato);

        // --- in base al segno selezionato
        // 1. Verifico che ho una tipologia di oroscopo selezionato
        if(typeof window.oroscopoType === 'undefined'){
            alert ('devi selezionare una tipologia di oroscopo');
        }


        // 2. richiamo l'API e visualizzo il relativo risultato
        // --- (questo avverrà su application.js)

        OroscopoData.setSegno(window.segnoSelezionato);
        OroscopoData.setTipologia(window.oroscopoType);
        OroscopoData.fetchData('#esitoOroscopo');

        return false;
    })

    // --- Voglio individuare il click sulla tipologia di Oroscopo
    $('#lnkDelGiorno,#lnkDelMese').on('click', function (evHandler) {
        // con questi 2 comandi stoppo il naturale funzionamento del link
        // cioè eseguire "href"
        // e propagazione del click su un determinato link e relativo return false
        evHandler.stopPropagation();
        evHandler.preventDefault();

        // valorizzo la tipologia di Oroscopo se del giorno o del mese
        var tipoOroscopo = $(this).data('oroscopo-type');

        console.log(tipoOroscopo);

        $('#recapTipoOroscopo').html(tipoOroscopo)

        // valorizzo la variabile globale inizializzata undefined in config.js
        // assegno alla varibile di stato la tipologia di oroscopo
        window.oroscopoType = tipoOroscopo;

        return false;

    })
});