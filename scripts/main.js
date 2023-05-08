let cards = document.getElementById("mainCards");

function planoCard(obj){
    return `<div class="card mt-3 mb-3" style="width: 18rem;">
            <img src=${obj.image} class="card-img-top p-4" alt="food fair">
            <div class="card-body">
            <h5 class="card-title">${obj.name}</h5>
            <p class="cardp card-text">${obj.description}</p>
            <h6>Price: ${obj.price}</h6>
            <a href="../pages/details.html" class="btn btn-primary btn2">Details</a>
            </div>
            </div> `
}
function printCards(list, lugar){
    let template = "";
    for(let temple of list){
        template += planoCard (temple)
}
lugar.innerHTML  += template
} 
printCards(data.events, cards )

