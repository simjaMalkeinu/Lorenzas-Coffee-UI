const table = document.getElementById("tabla-reportes");
const loader = document.getElementById("loader");

const btnNew = document.getElementById("btn-nuevo");
const form = document.forms["post"];
// const Modal = new bootstrap.Modal("#nuevo");

const alertCSS = document.getElementById("alert");

const thead = table.children[0];
const tbody = table.children[1];

const getReportes = () => {
  loader.classList.remove("visually-hidden");
  table.classList.add("visually-hidden");
  tbody.innerHTML = "";
  getData("http://localhost:3000/api/dashboard/reportes")
    .then((data) => {
      data.forEach((reporte) => {
        // {
        //     "id_registro": 1,
        //     "rfc_empleado": "ALFOSASA46A79",
        //     "id_operacion": 1,
        //     "operacion": "compra"
        // },

        tbody.innerHTML += `<tr>
                                <th scope="row">${reporte.id_registro}</th>
                                <td>${reporte.rfc_empleado}</td>
                                <td>${reporte.id_operacion}</td>
                                <td>${reporte.operacion}</td>
                                <th scope="row"><button type="button" onclick="updateR(${reporte.id_registro})" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button></th>
                                <th scope="row"><button type="button" onclick="seeR(${reporte.id_registro})" class="btn btn-outline-info"><i class="fa-solid fa-eye"></i></button></th>
                            </tr>`;
      });
    })
    .finally(() => {
      loader.classList.add("visually-hidden");
      table.classList.remove("visually-hidden");
    })
    .catch((err) => console.log("Solicitud fallida", err));
};

getReportes();

const seeR = (date) => {
  console.log(date);
};

const updateR = (date) => {
  console.log(date);
};
