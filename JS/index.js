const guardarButton = document.getElementById("guardarButton");
const validacionMensaje = document.getElementById("validacionMensaje");

const usuarioExistente = localStorage.getItem("usuario");
if (usuarioExistente) {
  const usuario = JSON.parse(usuarioExistente);
  document.getElementById("nombreInput").value = usuario.nombre;
  document.getElementById("emailInput").value = usuario.email;
  document.getElementById("celularInput").value = usuario.celular;
}

guardarButton.addEventListener("click", function () {
  const nombre = document.getElementById("nombreInput").value;
  const email = document.getElementById("emailInput").value;
  const celular = document.getElementById("celularInput").value;

  if (!nombre || !email || !celular) {
    Swal.fire({
      title: "ATENCION",
      text: "Debes cargar todos los campos",
    });
  } else {
    const usuario = {
      nombre: nombre,
      email: email,
      celular: celular,
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
    window.location.href = "/HTML/main.html";
  }
});
