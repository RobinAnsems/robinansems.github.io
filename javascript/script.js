/*FED JS Robin Ansems studentnummer:500780651 RET Website*/

var slider = document.getElementById("slider1");
var output = document.getElementById("nummer");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value + " minuten";
};