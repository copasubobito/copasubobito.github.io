
let pilotos
fetch("pilotos.json")
    .then(results => results.json())
    .then(data => {
        pilotos = data
        console.log(pilotos)
    
    pilotos = pilotos.sort(({points:a}, {points:b}) => b-a);
    console.log(pilotos)
    document.getElementById("div-pilotos").innerHTML = `
    ${pilotos.map(function(piloto){
        return `
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
      
        <div class="card piloto ">
            <div class="img-holder">
            <img class="card-img-top" src="${piloto.photo}" >
            </div>
            <div class="card-body">
            <h4 class="card-title"> ${piloto.name}  <span> ${piloto.age} anos</span></h4> 
            <h5> <span> Cidade:</span> ${piloto.city}</h5> 
            <h5> <span>Peso:</span> ${piloto.weight}kg</h5>
            <h4 class = "points"> Pontos: ${piloto.points}</h4>
            </div>
        </div> 
        </div>
        
        `
    }).join('')}
    `
    
    
    })
   
    
   
    



