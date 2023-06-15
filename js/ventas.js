const table = document.getElementById("tabla-ventas");
const loader = document.getElementById("loader");

const btnNew = document.getElementById("btn-nuevo");
const form = document.forms["post"];
// const Modal = new bootstrap.Modal("#nuevo");

const alertCSS = document.getElementById("alert");

const thead = table.children[0];
const tbody = table.children[1];

const getVentas = () => {
  loader.classList.remove("visually-hidden");
  table.classList.add("visually-hidden");
  tbody.innerHTML = "";
  getData("http://localhost:3000/api/dashboard/ventas")
    .then((data) => {
      data.forEach((venta) => {
        // {
        //     "idventa": 1,
        //     "id_registro": 1,
        //     "fecha": "2023-06-15T05:00:00.000Z",
        //     "rfc_empleado": "ALFOSASA46A79",
        //     "operacion": "compra",
        //     "total": 120
        // },
        const fecha = new Date(venta.fecha);

        tbody.innerHTML += `<tr>
                                <th scope="row">${venta.idventa}</th>
                                <td>${venta.id_registro}</td>
                                <td>${
                                    fecha.getDay() +
                                    "/" +
                                    fecha.getMonth() +
                                    "/" +
                                    fecha.getFullYear()
                                }</td>
                                <td>${venta.rfc_empleado}</td>
                                <td>${venta.total}</td>
                                <th scope="row"><button type="button" onclick="updateV(${
                                    venta.idventa
                                })" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button></th>
                                <th scope="row"><button type="button" onclick="deleteV(${
                                    venta.idventa
                                })" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></i></button></th>
                            </tr>`;
      });
    })
    .finally(() => {
      loader.classList.add("visually-hidden");
      table.classList.remove("visually-hidden");
    })
    .catch((err) => console.log("Solicitud fallida", err));
};

getVentas();

const deleteV = (date) => {
  window.confirm("Estas seguro de eliminar esta venta? ")
    ? deleteData("http://localhost:3000/api/dashboard/venta", {
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

const updateV = (date) => {
  console.log(date);
};
