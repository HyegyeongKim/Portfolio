$(function(){
    let options = {
        autoPlayDelay: 5000,
        loop: false,
        allowTouchMove: false,
        grabCursor: true,
        effect: "fade",
        speed: 100,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,// 사용자가 슬라이드에 간섭(상호작용)해도 다시 자동재생
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            init: function(){
                $(".prog").addClass("progAni");
            }
        }
    };

    let mySwiper = new Swiper(".swiper-container", options);

    // let slidersCount = mySwiper.params.loop ? mySwiper.slides.length - 2 : mySwiper.slides.length;
	// let widthParts = 100 / slidersCount;
	
    // $('.swiper-counter .total').html(slidersCount);
	// for(let i=0; i<slidersCount; i++){
	// 	$('.story-progress-container .progress-sections').append('<span></span>');
    //     $('.story-progress-container .progress-sections').children('span').addClass('prog');
	// }

    // function initProgressBar(){
	// 	let calcProgress = (slidersCount-1) * (autoPlayDelay + mySwiper.params.speed);
    //     calcProgress += autoPlayDelay;
	// 	$('.story-progress-container .progress').animate({
	// 		width: '100%'
	// 	}, calcProgress, 'linear');
	// }
	
	// initProgressBar();
	
	// mySwiper.on('slideChange', function () {
	// 	let progress = $('.story-progress-container .progress');
		
	// 	$('.swiper-counter .current').html(this.activeIndex + 1);
		
	// 	if( 
	// 		( 
	// 			this.progress == -0 || (this.progress == 1 && this.params.loop) 
	// 		) && !progress.parent().is('.stopped')
	// 	){
	// 		progress.css('width', '0');
	// 		if(this.activeIndex == 0){
    //         	initProgressBar();
    //         }
	// 	}
		
	// 	if(progress.parent().is('.stopped')){		   
	// 		progress.animate({
	// 			'width': Math.round(widthParts * (this.activeIndex + 1)) + '%'
	// 		}, this.params.speed, 'linear');
	// 	}
	// });
	
	// mySwiper.on('touchMove', function () {
	// 	$('.story-progress-container .progress').stop().parent().addClass('stopped');
	// });    

    
    
    const svgPlayBtn = $('.story-header__play-btn');
    const stopSvg = $('.stopSvg');
    const startSvg = $('.startSvg');

    $(function svgChange(){
        svgPlayBtn.on('click', function(){
            if(svgPlayBtn.value == 'start'){
                mySwiper.autoplay.stop();
                stopSvg.addClass('hide');
                startSvg.removeClass('hide');
                $('.story-progress-container .progress').stop().parent().addClass('stopped');
                svgPlayBtn.value = ('stop');
                return false;
            }else{
                mySwiper.autoplay.start();
                startSvg.addClass('hide');
                stopSvg.removeClass('hide');
                svgPlayBtn.value = ('start');
                // $('.story-progress-container .progress').stop().parent().removeClass('stopped');
                return false;
            } 
        })
    })
});

    