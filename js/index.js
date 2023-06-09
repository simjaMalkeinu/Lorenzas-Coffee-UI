const form = document.getElementById("form");
const loader = document.getElementById("loader");
const btnLogin = document.getElementById("btn-login");
const rfc = document.getElementById("rfc");
const password = document.getElementById("password");
const alertCSS = document.getElementById("alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (rfc.value === "" || password.value === "") {
    alertCSS.innerHTML = `<div class="alert alert-danger " role="alert">
                            Los campos no pueden estar vacios
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
    return;
  }

  if (rfc.value.length > 13) {
    alertCSS.innerHTML = `<div class="alert alert-danger d-flex" role="alert">
                            El RFC no puede ser mayor a 13 caracteres
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
    return;
  }

  console.log("enviando formulario...");
  loader.classList.remove("visually-hidden");
  btnLogin.classList.add("visually-hidden");

  iniciarSesion();
});

const iniciarSesion = () => {
  const dataUser = {
    rfc: rfc.value,
    password: password.value,
  };

// https://lorenzas-coffee-api-production.up.railway.app/api/login
//http://localhost:3000/api/login

  postData("http://localhost:3000/api/login", dataUser)
    .then((data) => {
      console.log(data);

      if (data.status === "accepted") {
        const user = data.data;
        const name = user.nombre + " " + user.apellido_paterno + " " + user.apellido_materno;
        location.href =
          "login/" +
          name.replaceAll(' ', '-') +
          "/" +
          user.rfc +
          "/" +
          user.correo +
          "/" +
          user.tipo;
      } else
        alertCSS.innerHTML = `<div class="alert alert-danger d-flex justify-content-between" role="alert">
                                ${data.message}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`;
    })
    .finally(() => {
      loader.classList.add("visually-hidden");
      btnLogin.classList.remove("visually-hidden");
    })
    .catch((err) => console.log("Solicitud fallida", err));
};
