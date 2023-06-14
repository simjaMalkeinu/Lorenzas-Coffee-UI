// http://localhost:3000/api/dashboard/products

const table = document.getElementById("tabla-productos");
const loader = document.getElementById("loader");
const loader2 = document.getElementById("loader2");
const insumos = document.getElementById("insumos");
const btnNewProducto = document.getElementById("btn-nuevo-produto");
const addinsumo = document.getElementById("add-insumo");
const deleteInsumo = document.getElementById("delete-insumo");
const Modal = new bootstrap.Modal("#nuevoProducto");

const alertCSS = document.getElementById("alert");

const form = document.forms["post"];

let allInsumos = [];

const thead = table.children[0];
const tbody = table.children[1];

// https://lorenzas-coffee-api-production.up.railway.app/api/dashboard/products
// http://localhost:3000/api/dashboard/products
const products = () => {
  loader.classList.remove("visually-hidden");
  table.classList.add("visually-hidden");
  tbody.innerHTML = "";
  getData(
    "https://lorenzas-coffee-api-production.up.railway.app/api/dashboard/products"
  )
    .then((data) => {
      data.forEach((product) => {
        const caducidad = new Date(product.caducidad);
        let estado = "";
        if (new Date() > caducidad)
          estado = `<p><span class="badge bg-danger">Caducado</span></p>`;
        else if (product.cantidad === 0)
          estado = `<p><span class="badge bg-danger">Sin existencias</span></p>`;
        else
          product.canmin > product.cantidad
            ? (estado = `<p><span class="badge bg-warning">Insuficiente</span></p>`)
            : (estado = `<p><span class="badge bg-success">Disponible</span></p>`);

        tbody.innerHTML += `<tr>
                              <th scope="row">${product.id_producto}</th>
                              <td>${product.nombre}</td>
                              <td>${
                                caducidad.getDay() +
                                "/" +
                                caducidad.getMonth() +
                                "/" +
                                caducidad.getFullYear()
                              }</td>
                              <td>${estado}</td>
                              <td>${product.costo}</td>
                              <td>${product.precio_venta}</td>
                              <td>${
                                product.cantidad + " " + product.unidad
                              }</td>
                              <th scope="row"><button type="button" onclick="updateP(${
                                product.id_producto
                              })" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button></th>
                              <th scope="row"><button type="button" onclick="deleteP(${
                                product.id_producto
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

// https://lorenzas-coffee-api-production.up.railway.app/api/dashboard/insumos
// http://localhost:3000/api/dashboard/insumos
const getInsumos = () => {
  getData(
    "https://lorenzas-coffee-api-production.up.railway.app/api/dashboard/insumos"
  )
    .then((data) => {
      allInsumos = data;
    })
    .finally(() => {
      loader2.classList.add("visually-hidden");
    })
    .catch((err) => console.log("Solicitud fallida", err));
};

products();
getInsumos();

btnNewProducto.addEventListener("click", () => {
  insumos.innerHTML = "";
});

addinsumo.addEventListener("click", () => {
  var insumoString = `<div class="insumo">
                          <div class="form-floating mb-3">
                              <select class="form-select" name="insumo">
                                  <option selected></option>`;

  allInsumos.forEach((insumo) => {
    insumoString += `<option value="${insumo.id_insumo}">${insumo.nombre}</option>`;
  });

  insumoString += `</select>
                    <label for="floatingSelect">Estado</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="number" step="any" class="form-control" name="insumo-cantidad"
                        placeholder="Cantidad">
                    <label for="floatingInput">Cantidad</label>
                  </div>
                  </div>`;

  insumos.innerHTML += insumoString;
});

deleteInsumo.addEventListener("click", () => {
  const insumosDom = document.getElementsByClassName("insumo");

  if (insumosDom.length <= 0) return;

  const lastChild = insumosDom[insumosDom.length - 1];
  insumos.removeChild(lastChild);
});
// https://lorenzas-coffee-api-production.up.railway.app/api/dashboard/newProduct
// http://localhost:3000/api/dashboard/newProduct
const postProducto = (dataProduct) => {
  postData(
    "https://lorenzas-coffee-api-production.up.railway.app/api/dashboard/newProduct",
    dataProduct
  )
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
      products();
    })
    .catch((err) => console.log("Solicitud fallida", err));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  const caducidad = document.getElementById("caducidad").value;
  const costo = parseFloat(document.getElementById("costo").value);
  const precio_venta = parseFloat(
    document.getElementById("precio_venta").value
  );
  const canmin = parseFloat(document.getElementById("canmin").value);
  const unidad = document.getElementById("unidad").value;
  const insumosDom = document.getElementsByName("insumo");
  const insumosDomCantidad = document.getElementsByName("insumo-cantidad");

  const n = document.getElementsByClassName("insumo");

  const newProduct = {
    nombre,
    caducidad,
    cantidad,
    costo,
    precio_venta,
    unidad,
    canmin,
  };

  newProduct.insumos = [];

  for (let i = 0; i < n.length; i++) {
    const ins = {
      id: parseInt(insumosDom[i].value),
      cantidad: parseFloat(insumosDomCantidad[i].value),
    };

    newProduct.insumos.push(ins);
  }
  console.log(newProduct);
  postProducto(newProduct);
  form.reset();
});

// https://lorenzas-coffee-api-production.up.railway.app/api/dashboard/deleteProduct
// http://localhost:3000/api/dashboard/deleteProduct
const deleteP = (date) => {
  window.confirm("Estas seguro de eliminar este producto? ")
    ? deleteData(
        "https://lorenzas-coffee-api-production.up.railway.app/api/dashboard/deleteProduct",
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
          products();
        })
        .catch((err) => console.log("Solicitud fallida", err))
    : (alertCSS.innerHTML = `<div class="alert alert-warning d-flex justify-content-between" role="alert">
                                Se cancelo la eliminacion del Producto
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                              </div>`);
};

const updateP = (date) => {
  console.log(date);
};
