/*FED JS Robin Ansems studentnummer:500780651 RET Website*/


/*filter- en sorteeropties in- en uitklapbaar bron: https://www.youtube.com/watch?v=sxZhsBLg2Ls*/
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


/*Slider bron: https://www.w3schools.com/howto/howto_js_rangeslider.asp*/
var slider = document.getElementById("slider1");
var output = document.getElementById("nummer");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value + " minuten";
};


/*Veranderen van hartje bron: https://stackoverflow.com/questions/34102091/changing-images-src-with-event-onclick*/
var foto1 =  document.getElementById("favorieten");

            function veranderHartje() {
                if (foto1.getAttribute('src') == "images/favoriet.svg") {
                    foto1.src = "images/gefavoriet.svg";
                }
                else {
                    foto1.src = "images/favoriet.svg";
                }
            };

var foto2 =  document.getElementById("notificatie");

            function deNotificatie() {
                if (foto2.getAttribute('src') == "images/favoriet-nav.svg") {
                    foto2.src = "images/notificatie-2.svg";
                }
                else {
                    foto2.src = "images/favoriet-nav.svg";
                }
            };


/*niet scrolbare website na klikken van link bron: https://stackoverflow.com/questions/1601933/how-do-i-stop-a-web-page-from-scrolling-to-the-top-when-a-link-is-clicked-that-t*/
$('#favorieten').click(function ($e) {
    $e.preventDefault();
    doSomething();
});

document.getElementById('#favorieten').addEventListener('click', function (e) {
    e.preventDefault();
    doSomething();
});