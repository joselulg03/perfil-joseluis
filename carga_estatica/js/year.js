document.getElementById("year").textContent = new Intl.DateTimeFormat("es-ES", {
  year: "numeric",
}).format(new Date());
