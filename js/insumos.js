const table = document.getElementById("tabla-insumos");
const loader = document.getElementById("loader");

const btnNew = document.getElementById("btn-nuevo");
const form = document.forms["post"];
const Modal = new bootstrap.Modal("#nuevo");

// const Modal = new bootstrap.Modal("#nuevoinsumo");

const alertCSS = document.getElementById("alert");

const thead = table.children[0];
const tbody = table.children[1];

// http://localhost:3000/api/dashboard/insumos
// https://lorenzas-coffee-api-production.up.railway.app/api/dashboard/insumos
const getInsumos = () => {
  loader.classList.remove("visually-hidden");
  table.classList.add("visually-hidden");
  tbody.innerHTML = "";
  getData(
    "http://localhost:3000/api/dashboard/insumos"
  )
    .then((data) => {
      data.forEach((insumo) => {
        const caducidad = new Date(insumo.caducidad);
        let estado = "";
        if (new Date() > caducidad)
          estado = `<p><span class="badge bg-danger">Caducado</span></p>`;
        else if (insumo.cantidad === 0)
          estado = `<p><span class="badge bg-danger">Sin existencias</span></p>`;
        else
          insumo.canmin > insumo.cantidad
            ? (estado = `<p><span class="badge bg-warning">Insuficiente</span></p>`)
            : (estado = `<p><span class="badge bg-success">Disponible</span></p>`);

        tbody.innerHTML += `<tr>
                                  <th scope="row">${insumo.id_insumo}</th>
                                  <td>${insumo.nombre}</td>
                                  <td>${
                                    caducidad.getDay() +
                                    "/" +
                                    caducidad.getMonth() +
                                    "/" +
                                    caducidad.getFullYear()
                                  }</td>
                                  <td>${estado}</td>
                                  <td>${insumo.costo}</td>
                                  <td>${
                                    insumo.cantidad + " " + insumo.unidad
                                  }</td>
                                  <th scope="row"><button type="button" onclick="updateI(${
                                    insumo.id_insumo
                                  })" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button></th>
                                  <th scope="row"><button type="button" onclick="deleteI(${
                                    insumo.id_insumo
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

getInsumos();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  const caducidad = document.getElementById("caducidad").value;
  const costo = parseFloat(document.getElementById("costo").value);
  const canmin = parseFloat(document.getElementById("canmin").value);
  const unidad = document.getElementById("unidad").value;

  const newSupplie = {
    nombre,
    caducidad,
    cantidad,
    costo,
    unidad,
    canmin,
  };

  console.log(newSupplie);
  postInsumo(newSupplie);
  form.reset();
});

const postInsumo = (dataSupplie) => {
  postData("http://localhost:3000/api/dashboard/insumo", dataSupplie)
    .then((response) => {
      console.log(response);
      if (response.status === "created")
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
      Modal.hide();
      getInsumos();
    })
    .catch((err) => console.log("Solicitud fallida", err));
};

// https://lorenzas-coffee-api-production.up.railway.app/api/dashboard/deleteProduct
// http://localhost:3000/api/dashboard/insumo

const deleteI = (date) => {
  window.confirm("Estas seguro de eliminar este producto? ")
    ? deleteData(
        "http://localhost:3000/api/dashboard/insumo",
        {
          id: date,
        }
      )
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

const updateI = (date) => {
  console.log(date);
};
