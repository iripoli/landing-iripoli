

var botonMenu = document.querySelector('.nav__btn');
var mostrarMenu=document.querySelector('header');
var menuDorsal=document.querySelector('.header__nav')
var tamañoPantalla=window.innerWidth;
var abrirMenu=document.querySelector('header__nav');

// Abrir el menu en pantallas menores a 1200px de ancho

botonMenu.addEventListener('click', function(){
    if (tamañoPantalla < 1000){
    mostrarMenu.classList.toggle('headerAmpliado');}
    else {menuDorsal.classList.toggle('nav__open');
    botonMenu.classList.toggle('nav__btnOpen')};
});
 botonMenu.addEventListener('click', function(event){
     console.log(event);
 })

var nombre = [];
var botonSubmit= document.getElementById('submit');
var inputNombre=document.getElementById('inputNombre')

botonSubmit.addEventListener('click',
function inputArray (event){
    event.preventDefault();
    var contenidoNombre = inputNombre.value;
    nombre.push(contenidoNombre)
    
}
) 

function myFunction(x) {
    x.classList.toggle("change");
  }


  document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
      console.log(this.nombre.value, this.email.value, this.empresa.value);
  })
  function validateName(nombre){
      return nombre.length>4 ? true : false
  }


// Abrir el menu desde el costado


// botonMenu.addEventListener('click', function(){
    
// });

// AGREGAR DATOS DE FORMULARIO AL DB.JSON

const url = 'http://localhost:8080/';

    