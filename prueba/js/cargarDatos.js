document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((datos) => {
      cargarHabilidades(datos.habilidades);
      cargarFormacion(datos.formacion);
    })
    .catch((error) => console.error("Error cargando data.json:", error));
});

// Habilidades
function cargarHabilidades(habilidades) {
  const habilidadesContainer = document.getElementById("habilidades-container");
  habilidadesContainer.innerHTML = "";

  habilidades.forEach((habilidad) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");

    card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body d-flex align-items-center">
            <i class="${habilidad.icono} me-3 fs-3"></i>
            <div>
              <h5 class="card-title">${habilidad.titulo}</h5>
              <p class="card-text">${habilidad.descripcion}</p>
            </div>
          </div>
        </div>
      `;
    habilidadesContainer.appendChild(card);
  });
}

// Formación
function cargarFormacion(formacion) {
  const formacionContainer = document.getElementById("formacion-container");
  formacionContainer.innerHTML = "";

  formacion.forEach((f) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${f.numero}</td>
            <td>${f.asignatura}</td>
            <td>${f.descripcion}</td>
        `;
    formacionContainer.appendChild(row);
  });
}
