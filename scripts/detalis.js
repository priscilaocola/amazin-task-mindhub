let contenedor = document.getElementById("detalle");

let urlParametro = new URLSearchParams(location.search);
let getId = urlParametro.get("_id");
let buscadorId = data.events.find((id) => id._id == getId);

if (buscadorId) {
    contenedor.innerHTML =  `
      <div class="col-12 col-md-6">
        <img src=${buscadorId.image} class="w-100 h-100 object-fit-cover rounded-start" alt="...">
      </div>
      <div class="col-12 col-md-6">
        <div class="card-body d-flex flex-column align-items-center">
          <h5 class="card-title details-title mb-5">${buscadorId.name}</h5>
          <ul class="py-2">
            <li class="list">Date: ${buscadorId.date}</li>
            <li class="list">Description: ${buscadorId.description}</li>
            <li class="list">Category: ${buscadorId.category}</li>
            <li class="list">Place: ${buscadorId.place}</li>
            <li class="list">Capacity: ${buscadorId.capacity}</li>
            <li class="list">Price: $${buscadorId.price}</li>
          </ul>
        </div>;`
  }
  
  
  
  
  
  
  