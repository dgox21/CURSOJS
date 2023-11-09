document.addEventListener("DOMContentLoaded", function () {});

async function cargarContactos() {
  try {
    let url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("No se pudo obtener los datos de la API.");
    }
    const data = await response.json();

    localStorage.setItem("contactos", JSON.stringify(data));

    mostrarContactos();

    const botonContactos = document.getElementById("cargarContactos");
    botonContactos.textContent = "Ocultar Contactos";
    botonContactos.onclick = toggleContactos;
  } catch (error) {
    console.error(error);
    Swal.fire({
      icon: "error",
      title: "Problemas con la API",
      text: "No se pudieron obtener los contactos desde la API.",
    });
  }
}

function toggleContactos() {
  const contactosContainer = document.getElementById("tablaContactos");

  if (contactosContainer.style.display === "none") {
    cargarContactos();
  } else {
    contactosContainer.innerHTML = "";
    contactosContainer.style.display = "none";
    const botonContactos = document.getElementById("cargarContactos");
    botonContactos.textContent = "Cargar Contactos";
    botonContactos.onclick = cargarContactos;
  }
}

function mostrarContactos() {
  const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
  const contactosContainer = document.getElementById("tablaContactos");
  contactosContainer.innerHTML = "";

  const encabezado = document.createElement("tr");
  encabezado.innerHTML = "<th>Nombre</th><th>Teléfono</th>";
  contactosContainer.appendChild(encabezado);

  contactos.forEach(function (contacto) {
    const nombre = contacto.name;
    const telefono = contacto.phone;

    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${nombre}</td><td>${telefono}</td>`;
    contactosContainer.appendChild(fila);
  });

  contactosContainer.style.display = "block";
}
