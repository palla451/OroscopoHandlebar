
// === Definire l'endPoint della API

var endPoint = 'http://www.oroscopi.com/ws/getoroscopo.php?type=[type]&sign=[sign]';


// === Definire l'elenco dei segni

var arSegni = [
                'acquario',
                'ariete',
                'bilancia',
                'cancro',
                'capricorno',
                'gemelli',
                'leone',
                'pesci',
                'sagittario',
                'scorpione',
                'toro',
                'vergine'
];


// === Definisco una variabile interna che mi dice quale prodotto voglio
// visualizzare

var oroscopoType; // variabile di tipo undefined

var segnoSelezionato; // anche questa così scritta è undefined ossia indefinita


// === Definisco appConfig GLOBALE
window.appConfig = {
    endPoint : endPoint, // chiave del mio json valorizzata con una variabile
    arSegni: arSegni,
    folderImage: '/segni/'
};