// // cards dinamicas =====>

let cards = document.getElementById("mainCards");

function planoCard(obj) {
  return `<div class="card mt-3 mb-3" style="width: 18rem;">
            <img src=${obj.image} class="card-img-top p-3" alt="food fair">
            <div class="card-body">
            <h5 class="card-title">${obj.name}</h5>
            <p class="cardp card-text">${obj.description}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
            <h6>Price: ${obj.price}</h6>
            <a href="../pages/details.html" class="btn btn-primary">Details</a>
            </div>
            </div> `;
}
function printCards(list, lugar) {
  let template = "";
  for (let temple of list) {
    template += planoCard(temple);
  }
  lugar.innerHTML += template;
}
printCards(data.events, cards);

// ==============================
// task 3

// checks dinamicos

let contenedorCheck = document.getElementById("contenedorCheck");
let inputSearch = document.getElementById("inputSearch");

function mostraCheckbox(data) {
  return `<div class="form-check d-flex">
<input class="form-check input" type="checkbox" value="${data}" id="${data}" >
<label class="form-check-label" for="${data}" >${data}</label>
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

function filtroSearch(array, valueSearch) {
  let filtroSearch = array.filter((item) =>
    item.name.toLowerCase().includes(valueSearch.toLowerCase())
  );
  return filtroSearch;
}

function filtroInput(eventos, category) {
  if (category.length == 0) {
    return eventos;
  }
  return eventos.filter((evento) => category.includes(evento.category));
}

function filtroDoble() {
  let checkeados = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((item) => item.value);
  let filtroSearch = filtrarSearch(data.events, inputSearch.value);
  let filtroInput = filtrarInput(filtroSearch, checkeados);
  printCard(filtroInput, cards);
}
let arrayFiltrado = data.events.map((item) => item.category);
console.log(arrayFiltrado);
let newArrayFiltrado = [...new Set(arrayFiltrado)];

printCheck(newArrayFiltrado, contenedorCheck);
