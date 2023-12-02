document.addEventListener('DOMContentLoaded', function() {
    // Inicializar la barra lateral
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    // Inicializar el menú desplegable
    $(".dropdown-trigger").dropdown();
});

// Inicializar el menú desplegable para elementos añadidos dinámicamente
$(document).on('click', '.dropdown-trigger', function(){
    $(this).dropdown();
});



// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems);
//   });

//   // Or with jQuery

//   $(document).ready(function(){  
//     $(".dropdown-trigger").dropdown();
//     $('.sidenav').sidenav();
//   });

//    // Inicializar el menú desplegable para elementos añadidos dinámicamente
//    $(document).on('click', '.dropdown-trigger', function(){
//     $(".dropdown-trigger").dropdown();
//  });
        