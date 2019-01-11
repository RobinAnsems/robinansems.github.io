"use strict";
/*FED JS Robin Ansems studentnummer:500780651 RET Website*/

/*Reactie achter laten popup, bron: https://www.w3schools.com/howto/howto_css_modals.asp*/
var popup = document.getElementById('mijnPopup');
var btn = document.getElementById("reageerknop");
var span = document.getElementsByClassName("sluiten")[0];
var knop = document.getElementsByClassName("versturen")[0];

btn.onclick = function () {
    popup.style.display = "block";
};

span.onclick = function () {
    popup.style.display = "none";
};

knop.onclick = function () {
    popup.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
};


/*Filter- en sorteeropties in- en uitklapbaar, bron: https://www.youtube.com/watch?v=sxZhsBLg2Ls*/
$('#showformulier').click(function () {
    $('#showformulier').css('display', 'none');
    $('#formulier').show();
    $('#hideformulier').show();
});

$('#hideformulier').click(function () {
    $('#hideformulier').css('display', 'none');
    $('#formulier').hide();
    $('#showformulier').show();
});


/*Slider, bron: https://www.w3schools.com/howto/howto_js_rangeslider.asp*/
var slider = document.getElementById("slider1");
var output = document.getElementById("nummer");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value + " minuten";
};


/*Veranderen van afbeelding, bron: https://stackoverflow.com/questions/34102091/changing-images-src-with-event-onclick*/
var foto1 = document.getElementById("favorieten");

function veranderHartje() {
    if (foto1.getAttribute('src') === "images/favoriet.svg") {
        foto1.src = "images/gefavoriet.svg";
    } else {
        foto1.src = "images/favoriet.svg";
    }
}

var foto2 = document.getElementById("notificatie");

function deNotificatie() {
    if (foto2.getAttribute('src') === "images/favoriet-nav.svg") {
        foto2.src = "images/notificatie-1.svg";
    } else {
        foto2.src = "images/favoriet-nav.svg";
    }
}

var foto3 = document.getElementById("reageerknop");

function veranderReageer() {
    if (foto3.getAttribute('src') === "images/reactie.svg") {
        foto3.src = "images/gereageerd.svg";
    } else {
        foto3.src = "images/reactie.svg";
    }
}

var foto4 = document.getElementById("rating1");

function veranderSter1() {
    if (foto4.getAttribute('src') === "images/ster1.svg") {
        foto4.src = "images/ster-aangeklikt1.svg";
    } else {
        foto4.src = "images/ster1.svg";
    }
}

var foto5 = document.getElementById("rating2");

function veranderSter2() {
    if (foto5.getAttribute('src') === "images/ster2.svg") {
        foto5.src = "images/ster-aangeklikt2.svg";
    } else {
        foto5.src = "images/ster2.svg";
    }
}

var foto6 = document.getElementById("rating3");

function veranderSter3() {
    if (foto6.getAttribute('src') === "images/ster3.svg") {
        foto6.src = "images/ster-aangeklikt3.svg";
    } else {
        foto6.src = "images/ster3.svg";
    }
}

var foto7 = document.getElementById("rating4");

function veranderSter4() {
    if (foto7.getAttribute('src') === "images/ster4.svg") {
        foto7.src = "images/ster-aangeklikt4.svg";
    } else {
        foto7.src = "images/ster4.svg";
    }
}

var foto8 = document.getElementById("rating5");

function veranderSter5() {
    if (foto8.getAttribute('src') === "images/ster5.svg") {
        foto8.src = "images/ster-aangeklikt5.svg";
    } else {
        foto8.src = "images/ster5.svg";
    }
}

var foto9 = document.getElementById("verwijderen");

function veranderHartje2() {
    if (foto9.getAttribute('src') === "images/gefavoriet-lijst.svg") {
        foto9.src = "mages/favoriet-lijst.svg";
    } else {
        foto9.src = "images/gefavoriet-lijst.svg";
    }
}


/*Niet scrolbare website na klikken van link, bron: https://stackoverflow.com/questions/1601933/how-do-i-stop-a-web-page-from-scrolling-to-the-top-when-a-link-is-clicked-that-t*/
$('#favorieten, #reageren, #reactieveranderen').click(function ($e) {
    $e.preventDefault();
    doSomething();
});

document.getElementById('#favorieten, #reageren, #reactieveranderen').addEventListener('click', function (e) {
    e.preventDefault();
    doSomething();
});
