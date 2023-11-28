/*JUAN CORTES*/

hamburger = document.querySelector(".hamburger");
hamburger.onclick= function() {
navbar = document.querySelector(".nav-bar");
navbar.classList.toggle("active");
}
/*JUAN CORTES FIN*/

/*PABLO*/
/*PABLO FIN*/

/*JUAN DE LA CRUZ*/
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
/*FIN JUAN DE LA CRUZ*/

/*ALAN INICIO*/

/*ALAN FIN*/