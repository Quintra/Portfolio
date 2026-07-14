$(document).ready(function(){
    // Centralizando as funções de scroll em um único bloco de performance
    $(window).scroll(function(){
        var scrollY = this.scrollY;

        // Navbar Sticky
        if(scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Botão de Scroll Up
        if(scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

        // Mudança dinâmica de cor do Logo baseado no scroll
        if (scrollY > 600) {
            $('.navbar .logo a').css('color','blueviolet');
            $('.navbar .logo a span').css('color','#0B2FC3');
        } else {
            $('.navbar .logo a').css('color','#0B2FC3');
            $('.navbar .logo a span').css('color','blueviolet');
        }
    });

    // Ação do botão scroll top
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0}, "smooth");
    });

    // Efeito de digitação (Typed.js)
    var typed = new Typed(".typing", {
        strings: ["Meu nome é"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Menu Mobile toggle
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn ion-icon').toggleClass("active");
    });
});