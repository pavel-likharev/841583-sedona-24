var button = document.querySelector(".button-call-form");

var form = document.querySelector(".container-form");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("container-form-show");
});
