var input = document.getElementById("input");

var button = document.getElementById("button");
var list = document.getElementById("list");
button.addEventListener("click", event => {
  var li = document.createElement("li");
  var texto = document.createTextNode(input.value);
  li.appendChild(texto);
  list.appendChild(li);
  input.value = "";
});

list.addEventListener("click", evento => {
  list.removeChild(evento.target);
});
