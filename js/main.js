const typed = new Typed('.typed', {
	strings: [
		'<i>HTML</i>',
		'<i>CSS</i>',
		'<i>JAVASCRIPT</i>',
		'<i>METEDOLOGÍA SCRUM</i>',
	],

	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
const menu =document.querySelector('.menu')
const imgMenu=document.getElementById('menu--img')
const main = document.querySelector('.main')
const header = document.getElementById('header')
const logo = document.getElementById('logo')
const portada=document.getElementById('portada')
const aboutTexto=document.getElementById('about-texto')
const aboutImg=document.getElementById('about-img')
//modificar el main y sus hijos con respecto a la aparición del header
menu.addEventListener('click',()=>{
    let img=imgMenu.getAttribute('src').slice(10)
    if(img=="derecha.svg"){
        imgMenu.setAttribute('src','img/icono/izquierda.svg')
    }else if(img=="izquierda.svg"){
        imgMenu.setAttribute('src','img/icono/derecha.svg')
    }
        header.classList.toggle('header--modificado')
        main.classList.toggle('main--modificado')
        aboutTexto.classList.toggle('about-texto--modificado')
        aboutImg.classList.toggle('about-img--modificado')
})


window.addEventListener('scroll',()=>{
    // La propiedad de sólo lectura HTMLElement.offsetHeight devuelve el alto de un elemento, incluyendo el padding vertical y los bordes, en píxeles, como un número entero.
    let altoPortada=portada.offsetHeight - 80
    let scroll=window.pageYOffset
    if(scroll<altoPortada){
        logo.style.top= scroll*1.2+'px'
    }
})
//poner los datos de portafolio en una caja
const container=document.getElementById('container')
const datos__nombre=document.getElementById('datos__nombre')
const datos__estatus=document.getElementById('datos__estatus')
const datos__link=document.getElementById('datos__link')
datos__nombre.innerHTML=`Nombre:<br> <span> Veterinaria Villa Salud</span> `
datos__link.textContent=`GitHub`
container.addEventListener('mouseover',(e)=>{
    if(e.target.tagName=="IMG"){
        let nombre=e.target.parentElement.parentElement.dataset.nombre
        datos__nombre.innerHTML=`Nombre:<br> <span> ${nombre}</span> `
        datos__link.textContent=`GitHub`
        datos__link.setAttribute('href',e.target.parentElement.dataset.url)
        mover(nombre)
    }
})
const mover = (nombre)=>{
    let datos__elemento=datos__nombre.parentElement
    datos__elemento.classList.remove('datos__elemento--dos','datos__elemento--tres','datos__elemento--cuatro','datos__elemento--cinco')
    switch(nombre){
        case 'Hotel CuchiCuchi':
            datos__elemento.classList.add('datos__elemento--dos')
            break;
        case 'Seleccionar zapatilla':
            datos__elemento.classList.add('datos__elemento--tres')
            break;
        case 'Rick y Morty':
            datos__elemento.classList.add('datos__elemento--cuatro')
            break;
        case 'Audifonos Presentación':
            datos__elemento.classList.add('datos__elemento--cinco')
            break;
        default:
            console.log('no es un elemento');
            break;
    }
}
// quitar el header modificado para medida celular
const navegacion__links=document.getElementById('navegacion__links')
navegacion__links.addEventListener('click',()=>{
    if(window.innerWidth<=1100){
        header.classList.remove('header--modificado')
    }
})
//animaciones
const animar = id=>{
    let elemento = document.getElementById(id)
    if(id=='about__subtitle'){
        elemento.classList.replace('desanimado','animado--izquierda')
    } else if(id=='about-img'){
        elemento.classList.replace('desanimado','animado--derecha')
    } else if(id=='box1'){
        elemento.classList.replace('desanimado','animado--derecha')
    }else if(id=='box2'){
        elemento.classList.replace('desanimado','animado--derecha')
        elemento.classList.add('delay1')
    }else if(id=='box3'){
        elemento.classList.replace('desanimado','animado--derecha')
        elemento.classList.add('delay2')
    }else if(id=='box4'){
        elemento.classList.replace('desanimado','animado--derecha')
        elemento.classList.add('delay3')
    }else if(id=='box5'){
        elemento.classList.replace('desanimado','animado--derecha')
        elemento.classList.add('delay4')
    }
}
const observados=[...document.querySelectorAll('.observado')]
const cb = elements=>{
    elements.forEach(element=>{
        if(element.isIntersecting){
           animar(element.target.id)
        }
    })
}
const options ={
    threshold:0.5
}
const observer = new IntersectionObserver(cb,options)
observados.forEach(observado=>observer.observe(observado))