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






var image =  document.getElementById("favorieten");

            function veranderHartje()
            {
                if (image.getAttribute('src') == "images/favoriet.svg")
                {
                    image.src = "images/gefavoriet.svg";
                }
                else
                {
                    image.src = "images/favoriet.svg";
                }
            }