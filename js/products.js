// http://localhost:3000/api/dashboard/products

const table = document.getElementById("tabla-productos");
const loader = document.getElementById("loader");
const loader2 = document.getElementById("loader2");
const insumos = document.getElementById("insumos");
const btnNewProducto = document.getElementById("btn-nuevo-produto");
const addinsumo = document.getElementById("add-insumo");
const deleteInsumo = document.getElementById("delete-insumo");

let allInsumos = [];

const thead = table.children[0];
const tbody = table.children[1];


// https://lorenzas-coffee-api-production.up.railway.app/api/dashboard/products
// http://localhost:3000/api/dashboard/products
const products = () => {
  getData("https://lorenzas-coffee-api-production.up.railway.app/api/dashboard/products")
    .then((data) => {

      data.forEach((product) => {
        const caducidad = new Date(product.caducidad);
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
                            <td>${product.estado}</td>
                            <td>${product.costo}</td>
                            <td>${product.precio_venta}</td>
                            <td>${product.cantidad + " " + product.unidad}</td>
                            <th scope="row"><button type="button" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button></th>
                            <th scope="row"><button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></i></button></th>

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
  getData("https://lorenzas-coffee-api-production.up.railway.app/api/dashboard/insumos")
    .then((data) => {
      allInsumos = data;
    }).finally(()=> {
      loader2.classList.add('visually-hidden')
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
                              <select class="form-select" id="insumo">
                                  <option selected></option>`;

  allInsumos.forEach((insumo) => {
    insumoString += `<option value="${insumo.id_insumo}">${insumo.nombre}</option>`;
  });

  insumoString += `</select>
                    <label for="floatingSelect">Estado</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="Number" class="form-control" id="unidad"
                        placeholder="Cantidad">
                    <label for="floatingInput">Cantidad</label>
                  </div>
                  </div>`;

  insumos.innerHTML += insumoString;
});


deleteInsumo.addEventListener('click', () => {
  const insumosDom = document.getElementsByClassName('insumo');

  if(insumosDom.length <= 0) return;

  const lastChild = insumosDom[insumosDom.length - 1]
  insumos.removeChild(lastChild)
})