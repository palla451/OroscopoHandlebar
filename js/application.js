var OroscopoData = new Object();


// --- Inner Properties
OroscopoData._segno;
OroscopoData._tipo;

/*
    *   imposta il segno da richiamare
*/
OroscopoData.setSegno = function (parSegno)
{
    if (window.appConfig.arSegni.indexOf(parSegno)== -1)
    {
        return false
    }

    this._segno = parSegno;
};

/*
    *   imposta ila tiplogia da richiamare
*/
OroscopoData.setTipologia = function (parTipologia) {

    var arTipologia = ['giorno','mese'];

    if (arTipologia.indexOf(parTipologia)== -1)
    {
        return false
    }

    this._tipo = parTipologia;
};

/*
    *   Richiamo il WS per ottenere i dati
    *   @param parTagContainer
*/
OroscopoData.fetchData = function (parTagContainer) {
        if(typeof this._segno === 'undefined' && typeof this._tipo === 'undefined')
        {
            return false;
        }

        var endPoint = window.appConfig.endPoint
            .replace('[type]',this._tipo)
            .replace('[sign]',this._segno);
        console.log(endPoint);

    // --- 1. interrogo il WS (aggiungo '&callback=?' per abilitare JSONP
    $.getJSON(endPoint.concat('&callback=?'), function (response) {

        OroscopoData.risposta = response;
        console.log(response.oroscopo[0]);

        // --- 1.1 in base alla tipolgia, scelgo il template piu adeguanto
        var templateName = OroscopoData._tipo === 'giorno' ? '#riepiloGiorno' : '#riepiloMese';
        console.log(templateName);

        var source   = $(templateName).html();
        var template = Handlebars.compile(source);

        // --- 1.2 applico i dati al template
        var renderedHtml    = template({dettaglioOroscopo: response.oroscopo[0]});

        // --- 2. inserisco il renderedHTML dentro parTagContanier
        $(parTagContainer).html(renderedHtml);

        if(OroscopoData._tipo === 'mese')
        {
            $('#tabOroscopoMese').tab('show');
        }


    });





};