var selector = document.querySelector('#selector');

var imac = document.querySelectorAll('.imac');
var macmini = document.querySelectorAll('.macmini');
var macbookair = document.querySelectorAll('.macbookair');
var macbookpro = document.querySelectorAll('.macbookpro');
var imacpro2017 = document.querySelectorAll('.imacpro2017');
var macpro = document.querySelectorAll('.macpro');



selector.addEventListener('change', ocultar_mostrar);

function ocultar_mostrar(){
    switch (selector.value) {
        case 'imac': mostrar(imac);
            ocultar(macmini);
            ocultar(macbookair);
            ocultar(macbookpro);
            ocultar(imacpro2017);
            ocultar(macpro);
        break;

        case 'macmini': mostrar(macmini);
            ocultar(imac);
            ocultar(macbookair);
            ocultar(macbookpro);
            ocultar(imacpro2017);
            ocultar(macpro);
        break;

        case 'macbookair': mostrar(macbookair);
            ocultar(imac);
            ocultar(macmini);
            ocultar(macbookpro);
            ocultar(imacpro2017);
            ocultar(macpro);
        break;

        case 'macbookpro': mostrar(macbookpro);
            ocultar(imac);
            ocultar(macmini);
            ocultar(macbookair);
            ocultar(imacpro2017);
            ocultar(macpro);
        break;

        case 'imacpro2017': mostrar(imacpro2017);
            ocultar(imac);
            ocultar(macmini);
            ocultar(macbookair);
            ocultar(macbookpro);
            ocultar(macpro);
        break;

        case 'macpro': mostrar(macpro);
            ocultar(imac);
            ocultar(macmini);
            ocultar(macbookair);
            ocultar(macbookpro);
            ocultar(imacpro2017);
        break;

        default:
            mostrar(imac);
            mostrar(macmini);
            mostrar(macbookair);
            mostrar(macbookpro);
            mostrar(imacpro2017);
            mostrar(macpro);
    }
}



function ocultar(modelo){
    modelo.forEach(function(e){ e.style.display = "none"});
}
function mostrar(modelo){
    modelo.forEach(function(e){ e.style.display = "block"});
}