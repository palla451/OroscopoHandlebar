/*
* Disegna in pagina il box con l'elenco dei segni
*
* @returns {boolean}
 */

function drawElencoSegni() {

    var source   = $('#selectorSegni').html();
    var template = Handlebars.compile(source);

    var elencoSegni = [];
    $(arSegni).each(function (id,item) {
        elencoSegni[id] = {
            nomeSegno: item.toUpperCase(),
            immagineSegno: window.appConfig.folderImage.concat(item).concat('.png'),
            segno: item
        };
    });

    console.log(elencoSegni);

    var renderedHtml    = template({elencoSegni : elencoSegni});

    $('#segniContainer').html(renderedHtml);

    return true;
}


