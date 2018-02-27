$(document).ready(() => {
  fetch('https://api.mercadolibre.com/sites/MLC/search?q=ipod')
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
    console.log(data)
  })
});
var siteSelected = 'MLC';
$('#search').on('keypress', function(event) {
  if (event.which === 13) {
    search($('#search').val());
  }
});
function search(search) {
  $('#rowProductos').html('');
  fetch(`https://api.mercadolibre.com/sites/${siteSelected}/search?q=${search}`)
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
      console.log(data);
        $.each(data.results, function(i, producto) {
          
        
        $('#rowProductos').append(`<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${producto.thumbnail}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${producto.title}</h5>
                                      <p>${producto.price}</p>
                                    </div>
                                    </div>`);
  
      });
   });
}
$('#clothes').click(() =>{
  fetch('https://api.mercadolibre.com/categories/MLA1430')
  .then(response => {
    return response.json();
  })
  .then(data =>{
    showClothes(data);
    console.log(data);
    $.each(data.results, function(i, producto) {
          
        $('#showFilters').append(`<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${producto.thumbnail}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${producto.title}</h5>
                                      <p>${producto.price}</p>
                                    </div>
                                    </div>`);
  })
  .catch(error => {
    alert('Hubo un error en la API'); // Mensaje de error
 })
});