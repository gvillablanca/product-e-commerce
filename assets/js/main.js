$(document).ready(() => {
  fetch('https://api.mercadolibre.com/sites/MLC/search?q=ipod')
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
    console.log(data)
  })
  
});
// variables globales
var siteSelected = 'MLC';
var categorie = ''
// llama a la funcion cuando al buscador se presiona un enter
$('#search').on('keypress', function(event) {
  if (event.which === 13) {
    search($('#search').val());
  }
});
// buscar todas las imagenes con palabra ingresada
function search(search) {
  $('#rowProductos').html('');
  fetch(`https://api.mercadolibre.com/sites/${siteSelected}/search?q=${search}`)
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
      console.log(data);
        $.each(data.results, function(i, producto) {
          
        
        $('#rowProductos').append(`<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 imgcont" data-index="${i}">
            <div class="col-md-4 col-lg-4">
              <img class="card-img-top img-${i}" src="${producto.thumbnail}">
            </div>
            <div class="col-md-8">
              <h5 class="card-title text-${i}">${producto.title}</h5>
              <p>${producto.price}</p>
            </div>
          </div> `);
  
      });
   });
}

function inicio(){
  fetch('https://api.mercadolibre.com/categories/MLC1168')
  .then(response => {
    return response.json();
  })
  .then(data =>{
    showClothes(data);
    console.log(data);
  });
 
 function showClothes(data) {
  for(let i = 1; i<=12 ; i++){
       $('#rowProductos').append(`<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${data.picture}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${data.name}</h5>
                                      <p>${data.total_items_in_this_category}</p>
        </div>
      </div>`);
    }
  }
 }

 inicio();

$('#clothes').click(() =>{
  fetch('https://api.mercadolibre.com/categories/MLC4970')
  .then(response => {
    return response.json();
  })
  .then(data =>{
    showClothes(data);
    console.log(data);
  });
  $('#rowProductos').empty();
});
 
 function showClothes(data) {
  for(let i = 1; i<=12 ; i++){
    $('#rowProductos').append(`<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${data.picture}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${data.name}</h5>
                                      <p>${data.total_items_in_this_category}</p>
                                    </div>
                                    </div>`);
  }
}
$('#house').click(() =>{
  fetch('https://api.mercadolibre.com/categories/MLC1574')
  .then(response => {
    return response.json();
  })
  .then(data =>{
    showHouse(data);
    console.log(data);
  });
  $('#rowProductos').empty();
});
 
 function showHouse(data) {
  for(let i = 1; i<=12; i++){
    $('#rowProductos').append(`<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${data.picture}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${data.name}</h5>
                                      <p>${data.total_items_in_this_category}</p>
                                    </div>
                                    </div>`);
  }
}
$('#tech').click(() =>{
  fetch('https://api.mercadolibre.com/categories/MLC1000')
  .then(response => {
    return response.json();
  })
  .then(data =>{
    showTech(data);
    console.log(data);
  });
  $('#rowProductos').empty();
});
 
 function showTech(data) {
  for(let i = 1; i<=12 ; i++){
    $('#rowProductos').append(`<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${data.picture}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${data.name}</h5>
                                      <p>${data.total_items_in_this_category}</p>
                                    </div>
                                    </div>`);
  }
}
$('#beauty').click(() =>{
  fetch('https://api.mercadolibre.com/categories/MLC1276')
  .then(response => {
    return response.json();
  })
  .then(data =>{
    showBeauty(data);
    console.log(data);
  });
  $('#rowProductos').empty();
});
 
 function showBeauty(data) {
  for(let i = 1; i<=12 ; i++){
    $('#rowProductos').append(`<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${data.picture}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${data.name}</h5>
                                      <p>${data.total_items_in_this_category}</p>
                                    </div>
                                    </div>`);
  }
}
$('#child').click(() =>{
  fetch('https://api.mercadolibre.com/categories/MLC1132')
  .then(response => {
    return response.json();
  })
  .then(data =>{
    showChild(data);
    console.log(data);
  });
  $('#rowProductos').empty();
});
 
 function showChild(data) {
  for(let i = 1; i<=12 ; i++){
    $('#rowProductos').append(`<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${data.picture}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${data.name}</h5>
                                      <p>${data.total_items_in_this_category}</p>
                                    </div>
                                    </div>`);
  }
}
$('#pet').click(() =>{
  fetch('https://api.mercadolibre.com/categories/MLC1071')
  .then(response => {
    return response.json();
  })
  .then(data =>{
    showPet(data);
    console.log(data);
  });
  $('#rowProductos').empty();
});
 
 function showPet(data) {
  for(let i = 1; i<=12 ; i++){
    $('#rowProductos').append(`<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${data.picture}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${data.name}</h5>
                                      <p>${data.total_items_in_this_category}</p>
                                    </div>
                                    </div>`);
  }
}
