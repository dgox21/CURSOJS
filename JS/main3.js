function mostrarPrestamosVigentes() {
  const prestamosVigentes = JSON.parse(localStorage.getItem("prestamos")) || [];
  const prestamosVigentesContainer = document.getElementById(
    "prestamosVigentesContainer"
  );

  prestamosVigentesContainer.innerHTML = "";

  if (prestamosVigentes.length === 0) {
    Swal.fire({
      icon: "info",
      title: "No hay datos",
      text: "No hay préstamos vigentes para mostrar.",
    });
  } else {
    prestamosVigentes.forEach(function (prestamo, index) {
      const objeto = prestamo.objeto;
      const persona = prestamo.persona;
      const celular = prestamo.celular;
      const fecha = prestamo.fecha;

      const texto =
        "Objeto: " +
        objeto +
        ", Persona: " +
        persona +
        ", Celular: " +
        celular +
        ", Fecha del Préstamo: " +
        fecha;

      const elementoP = document.createElement("p");
      elementoP.textContent = texto;

      const eliminarButton = document.createElement("button");
      eliminarButton.innerHTML = "Eliminar Préstamo";
      eliminarButton.addEventListener("click", function () {
        eliminarPrestamo(index);
      });

      const contenedorPrestamo = document.createElement("div");
      contenedorPrestamo.appendChild(elementoP);
      contenedorPrestamo.appendChild(eliminarButton);
      prestamosVigentesContainer.appendChild(contenedorPrestamo);
    });

    const prestamosVigentesButton = document.getElementById(
      "prestamosVigentesButton"
    );
    prestamosVigentesButton.innerHTML = "Ocultar";
    prestamosVigentesButton.onclick = ocultarPrestamosVigentes;
  }
}

function ocultarPrestamosVigentes() {
  const prestamosVigentesContainer = document.getElementById(
    "prestamosVigentesContainer"
  );
  prestamosVigentesContainer.innerHTML = "";

  const prestamosVigentesButton = document.getElementById(
    "prestamosVigentesButton"
  );
  prestamosVigentesButton.innerHTML = "P. Vigentes";
  prestamosVigentesButton.onclick = mostrarPrestamosVigentes;
}

function eliminarPrestamo(index) {
  const prestamosVigentes = JSON.parse(localStorage.getItem("prestamos")) || [];

  prestamosVigentes.splice(index, 1);

  localStorage.setItem("prestamos", JSON.stringify(prestamosVigentes));

  mostrarPrestamosVigentes();
}

mostrarPrestamosVigentes();
