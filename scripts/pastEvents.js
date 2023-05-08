let past = document.getElementById("past-cards");

function planoCards(objeto) {
    return ` <div class="card mt-3 mb-3" style="width: 18rem;">
               <img src="${objeto.image}" class="card-img-top object-fit-cover w-100" alt="cine img">
                <div class="card-body text-center">
                  <h5 class="card-title">${objeto.name}</h5>
                  <p class="card-text">${objeto.description}</p>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center">
                  <h6 class="m-0">${objeto.price}</h6>
                  <a href="../pages/details.html" class="btn btn-primary">Details</a>
                  </div>
                  </div>
                  ` ;
                }
const eventosFiltrados = data.events.filter(event=>event.date < data.currentDate);

function printCards(list, lugar){
  let template = "";
  for(let temple of list){
      template += planoCards (temple)
}
lugar.innerHTML += template
} 
printCards(eventosFiltrados, past )


