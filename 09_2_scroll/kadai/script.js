// Swiperを実行するプログラム
var mySwiper = new Swiper('.swiper-container', {
	loop: true,
	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
});

// AOSを実行するプログラムを記述。基本動作が出来たら、全体のオプションで動きの速度や遅延等のオプションを設定してみよう。
AOS.init();