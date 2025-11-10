/**
 * En la consola del navegador:
 */
//muestra la ruta completa de la página actual.
location.href;
//muestra el host de dicha página.
location.hostname;
//carga la página de Google a través del objeto location.
location.assign("https://www.google.es");
//vuelve a la página anterior.
history.back();
//obtén todas las propiedades width/height y availWidth/availHeight del objeto screen. Compara el valor devuelto con el que devuelven las propiedades innerWidth/innerHeight y outerWidth/outerHeight de window.
screen.width;
screen.availWidth;
window.outerWidth;
window.innerWidth;
screen.height;
screen.availHeight;
window.outerHeight;
window.innerHeight;