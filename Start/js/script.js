// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon'); // permite selecionar elementos no DOM (Document Object Model) de uma página web.
let navbar = document.querySelector('.navbar'); //  buscar elementos no DOM com base em um seletor CSS.

// Aqui faremos a mudança do butão do menu.
menuIcon.onclick = () => {             
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')    //  toggle é um elemento de interface que permite alternar entre dois estados,
        
}


// scroll sections
let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // Ativar barra de links
            navLinks.forEach(links => {    // O método forEach() executa uma dada função em cada elemento de um array
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // Ativar sections para animação do scrollS
            sec.classList.add('show-animate');
        }
        // if quiser usar animação que se repete na rolagem, use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remova o ícone de toggle e a barra de navegação ao clicar nos links da barra de navegação (scroll)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

    // animation footer on scroll

}