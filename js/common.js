//swiper
$(document).ready(function(){
    let swiper = new Swiper(".mySwiper", {
        loop: true,
        autoHeight : true,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

// top btn
$(function() {
    $(window).scroll(function(){
        const sectionOne = $('.section').eq(0).height();

        if($(this).scrollTop() > sectionOne){
            $('.topBtn').fadeIn();
            $('.headerBg').fadeIn();
        }else{
            $('.topBtn').fadeOut();
            $('.headerBg').fadeOut();
        }
    })
});

function goTop(){
	$('html, body').stop().animate({
		scrollTop: $('body').offset().top
	}, 400);
};


//menu btn
$(function(){
    $('.head-menu li').click(function(){
        let index = $('.head-menu li').index(this);
        if($(this).eq(index)){
            $('html, body').stop().animate({
                scrollTop: $('.headScroll' + (index + 1)).offset().top 
            }, 400);
        }
    })
});
    

/* sticky footer */
$(function(){
    $(window).scroll(function(){
    let scrollTop = $(window).scrollTop(); // scroll position
    let innerHeight = $(window).innerHeight(); // window heihgt
    let scrollHeight = $('body').prop('scrollHeight'); // scrolled height

        if(scrollTop + innerHeight >= scrollHeight - 50){
            $('.footer').fadeIn();
        }else{
            $('.footer').fadeOut();
        }
    })  
});


/* color theme*/
function colorTheme(self){
    let Element = document.documentElement;

    if(self.value === 'dark'){
        Element.setAttribute('color-theme', 'light');
        self.value = ('light');
    }else if(self.value === 'light'){
        Element.setAttribute('color-theme', 'dark');
        self.value = ('dark');
    }

    //mobile detect

    $(function(){
        if(window.matchMedia("screen and (min-width: 768px)").matches){
            if(self.value === 'dark'){
                self.innerText = '◐';
            }else if(self.value === 'light'){
                self.innerText = '◑';
            }
        }else{
            const mThemeBtn = document.getElementsByClassName('m-themeBtn');

            if(self.value === 'dark'){
                self.innerHTML = `<i class="fa-solid fa-sun"></i>` + '라이트모드';
            }else if(self.value === 'light'){
                self.innerHTML = `<i class="fa-solid fa-moon"></i>` + '다크모드';
            }
        }
    })     
}

/* head mobile */

$(function(){
    const $burger = $('.m-menu-icon-wrap');
    const $headerWrap = $('.header-wrap');
    const $headMenuWrap = $('.head-menu-wrap');
    const $footer = $('.footer-copy');
    const $topBtn = $('.topBtn');
    // const $this = $(this);

    $burger.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $headerWrap.toggleClass('header-bg');
        $headMenuWrap.toggleClass('open');
        $footer.toggleClass('opacity');
        $topBtn.toggleClass('opacity');
    })
})