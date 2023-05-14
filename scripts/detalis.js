const contenedor = document.getElementById("detalle");
let info = data.events;

let urlParametro = new URLSearchParams(location.search);
let getId = urlParametro.get("_id");
let buscadorId = info.find((d) => d._id == getId);

contenedor.innerHTML = `<div class="col-12 col-md-6">
        <img src=${buscadorId.image} class="w-100 h-100 object-fit-cover rounded-start" alt="...">
      </div>
      <div class="col-12 col-md-6">
        <div class="card-body d-flex flex-column align-items-center">
          <h5 class="card-title details-title mb-5"> ${buscadorId.name}</h5>
          <ul>
            <li class="list">Date: ${buscadorId.date}</li>
            <li class="list">Description: ${buscadorId.description}</li>
            <li class="list">Category:${buscadorId.category}</li>
            <li class="list">Place: ${buscadorId.place}</li>
            <li class="list">Capacity: ${buscadorId.capacity}</li>
            <li class="list">Price: ${buscadorId.price}</li>7u56u56u56i6rtfnmgyhtfyhtdthgyhhfsrgrdthdthngdyjmggjmhgfjggmfrtjnftjmrtjmhfgjhdthrhrdhdrxdhftghrtjyjtydhnsfrhnrethnrzxdvdg<hswurghVYAFCavgasyxmf
          </ul>
          </div>
        </div>`;
