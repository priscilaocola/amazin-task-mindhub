let past = document.getElementById("past-cards");
let contenedorCheck = document.getElementById("contenedorCheck");
let inputSearch = document.getElementById("inputSearch");

function planoCards(objeto) {
  return ` <div class="card mt-3 mb-3" style="width: 18rem;">
               <img src="${objeto.image}" class="card-img-top object-fit-cover p-3" alt="cine img">
                <div class="card-body text-center">
                  <h5 class="card-title">${objeto.name}</h5>
                  <p class="card-text">${objeto.description}</p>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center">
                  <h6 class="m-0">$${objeto.price}</h6>
                  <a href="../pages/details.html?_id=${objeto._id}" class="btn btn-primary">Details</a>
                  </div>
                  </div>
                  `;
}
const eventosFiltrados = data.events.filter(
  (event) => event.date < data.currentDate
);

function printCards(list, lugar) {
  let template = "";
  for (let temple of list) {
    template += planoCards(temple);
  }
  lugar.innerHTML = template;
}
printCards(eventosFiltrados, past);

// task 3 ====

function mostraCheckbox(data) {
  return `
  <div class="form-check d-flex">
<input class="form-check input" type="checkbox" value="${data}" id="${data}" >
<label class="form-check-label" for="${data}">${data}</label>
</div> `;
}

function printCheck(data, contenedorCheck) {
  let template = ``;
  for (let item of data) {
    template += mostraCheckbox(item);
  }
  contenedorCheck.innerHTML = template;
}
inputSearch.addEventListener("input", () => {
  filtroDoble();
});
contenedorCheck.addEventListener("change", () => {
  filtroDoble();
});

function filtroSearch(array, valueSearch) {
  let filtro = array.filter((item) => item.name.toLowerCase().includes(valueSearch.toLowerCase()));
  return filtro;
}

function filtroInput(eventos, category) {
  if (category.length == 0) {
    return eventos;
  }
  return eventos.filter((evento) => category.includes(evento.category));

}
let arrayFiltrado = data.events.map((item) => item.category);
console.log(arrayFiltrado);
let newArrayFiltrado = [...new Set(arrayFiltrado)];

printCheck(newArrayFiltrado, contenedorCheck)

function filtroDoble() {
  let checkeados = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((item) => item.value);
  let filtrobusqueda = filtroSearch(eventosFiltrados, inputSearch.value);
  let nuevofiltro = filtroInput(filtrobusqueda, checkeados);
  printCards(nuevofiltro,past);
}

