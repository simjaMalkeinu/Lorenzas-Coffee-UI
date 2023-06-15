const table = document.getElementById("tabla-ordenes");
const loader = document.getElementById("loader");

const btnNew = document.getElementById("btn-nuevo");
const form = document.forms["post"];
// const Modal = new bootstrap.Modal("#nuevo");

const alertCSS = document.getElementById("alert");

const thead = table.children[0];
const tbody = table.children[1];

const getOrdenes = () => {
  loader.classList.remove("visually-hidden");
  table.classList.add("visually-hidden");
  tbody.innerHTML = "";
  getData("http://localhost:3000/api/dashboard/ordenes")
    .then((data) => {
      data.forEach((orden) => {
        // {
        //     "id_orden_compra": 1,
        //     "estado": "pendiente",
        //     "rfc_empleado": "ALFOSASA46A79",
        //     "nombre": "Nescafe",
        //     "total": 30
        // },
        const fecha = new Date(orden.fecha);

        tbody.innerHTML += `<tr>
                                <th scope="row">${orden.id_orden_compra}</th>
                                <td>${orden.rfc_empleado}</td>
                                <td>${orden.estado}</td>
                                <td >${orden.nombre}</td>
                                <td>${orden.total}</td>
                                <th scope="row"><button type="button" onclick="updateOC(${orden.id_orden_compra})" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button></th>
                                <th scope="row"><button type="button" onclick="seeOC(${orden.id_orden_compra})" class="btn btn-outline-info"><i class="fa-solid fa-eye"></i></button></th>
                            </tr>`;
      });
    })
    .finally(() => {
      loader.classList.add("visually-hidden");
      table.classList.remove("visually-hidden");
    })
    .catch((err) => console.log("Solicitud fallida", err));
};

getOrdenes();

const seeOC = (date) => {
  console.log(date);
};

const updateOC = (date) => {
  console.log(date);
};
