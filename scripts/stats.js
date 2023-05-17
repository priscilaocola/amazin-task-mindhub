let infoDeApi
let tabla1 = document.getElementById("tablaEventos");
let tabla2 = document.getElementById("tablaFuture");
let tabla3 = document.getElementById("tablaPasado");


// fetch

fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
    .then(res => res.json())
    .then(datos => {
    infoDeApi = datos


    let arrayfiltro = infoDeApi.events.map(item => item.category)
    let newArrayFiltrado = [...new Set(arrayfiltro)]
    printCards(newArrayFiltrado, tabla2)
    printCheck(newArrayFiltrado, tabla3);

   


   })

// funciones

function table1(datos){
    return `<tr class="fw-semibold bg-light table-bordered border-primary text-center">
    <td>${(datos)}</td>
    <td></td>
    <td></td>
</tr> `
}

function table2(datos){
    return `<tr class="fw-semibold bg-light table-bordered border-primary text-center">
    <td>${(datos)}</td>
    <td></td>
    <td></td>
</tr> `
}

function table3(datos){
    return `<tr class="fw-semibold bg-light table-bordered border-primary text-center">
    <td>${(datos)}</td>
    <td></td>
    <td></td>
</tr> `
}

function printCards(list, lugar) {
    let template = "";
    for (let temple of list) {
      template += table1(temple)
    }
    lugar.innerHTML += template
  }




// // funcion pasado
// function tablaPasado(contenedor) {

//     let template =
// }
