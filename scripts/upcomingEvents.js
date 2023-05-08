let upcoming = document.getElementById("upcoming-cards");


function planoCards(objeto) {
  return `
      <img src="${objeto.image}" class="card-img-top object-fit-cover w-100" alt="cine img">
      <div class="card-body text-center">
      <h5 class="card-title">${objeto.name}</h5>
      <p class="card-text">${objeto.description}</p>
      </div>
      <div class="card-footer d-flex justify-content-between align-items-center">
      <h6 class="m-0">$${objeto.price}</h6>
      <a href="../pages/details.html" class="btn btn-primary">Details</a>
      </div>
  `;
}
// function filtros(arrayEventos, fecha) {
//   const eventosFiltrados = [];
//   for (let objetoEvento of arrayEventos) {
//       if (objetoEvento.date > fecha) {
//           eventosFiltrados.push(objetoEvento);
//       }
//   }
//   return eventosFiltrados;
// }
// filter(data.events, data.currentDate);
const eventosFiltrados = data.events.filter(event=>event.date > data.currentDate);


function printCards(list, lugar){
  let template = "";
  for(let temple of list){
      template += planoCards (temple)
}
lugar.innerHTML  += template
} 
    
printCards(eventosFiltrados, upcoming )
