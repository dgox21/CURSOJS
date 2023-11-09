function guardarPrestamo() {
  const objeto = document.getElementById("objeto").value;
  const persona = document.getElementById("persona").value;
  const celular = document.getElementById("celular").value;
  const fecha = document.getElementById("fecha").value;

  if (!objeto || !persona || !celular || !fecha) {
    Swal.fire({
      icon: "error",
      title: "Campos vacíos",
      text: "Por favor, complete todos los campos para guardar el préstamo.",
    });
    return;
  } else {
    Swal.fire({
      icon: "success",
      title: "Carga satisfactoria",
      text: "Los datos se han guardado exitosamente.",
    });
  }

  const nuevoPrestamo = { objeto, persona, celular, fecha };

  const prestamosAnteriores =
    JSON.parse(localStorage.getItem("prestamos")) || [];

  prestamosAnteriores.push(nuevoPrestamo);

  localStorage.setItem("prestamos", JSON.stringify(prestamosAnteriores));

  document.getElementById("objeto").value = "";
  document.getElementById("persona").value = "";
  document.getElementById("celular").value = "";
  document.getElementById("fecha").value = "";

  mostrarPrestamos();
}

function mostrarPrestamos() {
  const prestamosAnteriores =
    JSON.parse(localStorage.getItem("prestamos")) || [];
  const prestamosContainer = document.getElementById("datos");

  if (prestamosContainer) {
    prestamosContainer.innerHTML = "";

    prestamosAnteriores.forEach(function (prestamo, index) {
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

      if (prestamosContainer) {
        prestamosContainer.appendChild(contenedorPrestamo);
      }
    });
  }
}

function eliminarPrestamo(index) {
  const prestamosAnteriores =
    JSON.parse(localStorage.getItem("prestamos")) || [];

  prestamosAnteriores.splice(index, 1);

  localStorage.setItem("prestamos", JSON.stringify(prestamosAnteriores));

  mostrarPrestamos();
}

function cargarPrestamosVigentes() {
  mostrarPrestamosVigentes();
}

function cerrarSesion() {
  localStorage.removeItem("prestamos");
  localStorage.removeItem("datos");
  localStorage.removeItem("contactos");
  localStorage.removeItem("usuario");

  window.location.href = "/HTML/index.html";
}
