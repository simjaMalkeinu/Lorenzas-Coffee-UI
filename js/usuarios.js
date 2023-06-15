const table = document.getElementById("tabla-usuarios");
const loader = document.getElementById("loader");

const btnNew = document.getElementById("btn-nuevo");
const form = document.forms["post"];
// const Modal = new bootstrap.Modal("#nuevo");

const alertCSS = document.getElementById("alert");

const thead = table.children[0];
const tbody = table.children[1];

const getUsuarios = () => {
  loader.classList.remove("visually-hidden");
  table.classList.add("visually-hidden");
  tbody.innerHTML = "";
  getData("http://localhost:3000/api/dashboard/users")
    .then((data) => {
      data.forEach((usuario) => {
        // {
        //     "rfc": "YORKACJI46Y79",
        //     "correo": "yorkam@lorenzascoffee.com",
        //     "nombre": "York-am Acua Jimenez",
        //     "password": "$2a$10$UaFW87pugBLIIEVLXsz/9.thz8vbBht/NNwFqYkxcf9CL91.UZH1W",
        //     "tipo": "administrador",
        //     "desc": "puede acceder a todas las funciones del sistema"
        // },
        const fecha = new Date(usuario.fecha);

        tbody.innerHTML += `<tr>
                                <th scope="row">${usuario.rfc}</th>
                                <td>${usuario.nombre}</td>
                                <td>${usuario.correo}</td>
                                <td class="scroll contraseña">${usuario.password}</td>
                                <td>${usuario.tipo}</td>
                                <th scope="row"><button type="button" onclick="updateU('${usuario.rfc}')" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button></th>
                                <th scope="row"><button type="button" onclick="deleteU('${usuario.rfc}')" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button></th>
                            </tr>`;
      });
    })
    .finally(() => {
      loader.classList.add("visually-hidden");
      table.classList.remove("visually-hidden");
    })
    .catch((err) => console.log("Solicitud fallida", err));
};

getUsuarios();

const deleteU = (date) => {
  window.confirm("Estas seguro de eliminar esta venta? ")
    ? deleteData("http://localhost:3000/api/dashboard/user", {
        id: date,
      })
        .then((response) => {
          if (response.status === "deleted")
            alertCSS.innerHTML = `<div class="alert alert-info d-flex justify-content-between" role="alert">
                                  ${response.message}
                                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                              </div>`;
          else
            alertCSS.innerHTML = `<div class="alert alert-danger d-flex justify-content-between" role="alert">
                                      ${response.message}
                                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                  </div>`;
        })
        .finally(() => {
          console.log("peticion terminada");
          getInsumos();
        })
        .catch((err) => console.log("Solicitud fallida", err))
    : (alertCSS.innerHTML = `<div class="alert alert-warning d-flex justify-content-between" role="alert">
                                  Se cancelo la eliminacion del Insumo
                                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`);
};

const updateU = (date) => {
  console.log(date);
};
