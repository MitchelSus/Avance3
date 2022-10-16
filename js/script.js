/* 1 
acá declaramos las variables devolviendo el primer elemento del documento en este caso .header
*/
let navbar = document.querySelector('.header .flex .navbar');

/* caja de tres rayitas
luego le decimos al menu-btn que cuando hagamos click, active esas 2 clases, o sea la navbar y el profile
 */
document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

/* 2 
acá declaramos las variables devolviendo el primer elemento del documento en este caso .header
*/
let profile = document.querySelector('.header .flex .profile');

/* Perfil caja */
document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}
/* 3 
Devuelve el primer elemento del documento
aquí retornará el search-form dentro de flex y dentro de .header y si no encuentra condicidencias devuevle null.
*/
/* No sobrepone las cajitas */
let searchForm = document.querySelector('.header .flex');
document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   profile.classList.remove('active');
}
/* 4 
 Esto se puede usar para manipular la lista de clases.
 es una alternativa conveniente para acceder a la lista de clases de un elemento
*/
window.onscroll = () =>{
   profile.classList.remove('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
}
/* Aca simplemnte almacena los elmentos los profesores de demostración y con un Bucle itera sobre ellos y actualice o reemplaza el contenido del la imagen con innerHTML*/
document.querySelectorAll('.content-150').forEach(content => {
   if(content.innerHTML.length > 150) content.innerHTML = content.innerHTML.slice(0, 150);
});