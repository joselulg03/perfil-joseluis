window.onscroll = function () {
  let button = document.getElementById("boton-arriba");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
