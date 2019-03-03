var button = document.querySelector(".button-call-form");
var search = document.querySelector(".container-form");
var arrival = search.querySelector("[name=date-arrival]");
var form = search.querySelector("form");
var out = search.querySelector("[name=date-out]");
var adults = search.querySelector("[name=adults]");
var children = search.querySelector("[name=children]");

window.onload = function() {
     search.classList.add("container-form-close");
};

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  search.classList.remove("form-error");
  search.classList.toggle("container-form-show");
  arrival.focus();
});

form.addEventListener("submit", function (evt) {
    if (!arrival.value || !out.value || !adults.value || !children.value) {
      evt.preventDefault();
      search.classList.remove("form-error");
      search.offsetWidth = search.offsetWidth;
      search.classList.add("form-error");
}
});
