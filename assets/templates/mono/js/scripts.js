ymaps.ready(init);
var myMap, 
    myPlacemark;

function init(){ 
	var coordinates = $('.coordinates').attr('rel');
	var zoom = $('.coordinates').attr('title');
	// var $info = $('.contact_info').html();

	if(coordinates){
		var split = coordinates.split(',');	

	    myMap = new ymaps.Map("map", {
	        center: [split[0], split[1]],
	        zoom: zoom
	    }); 

	    myPlacemark = new ymaps.Placemark([split[0], split[1]], {
	        // balloonContent: $info
	    });
	    
	    myMap.geoObjects.add(myPlacemark);
	}
    
}




$(function(){

	$('.open_popup_conf').click(function(){

		$('.popup_conf').css({'top': $(window).scrollTop() + 100}).fadeIn();

		$('.bg_popup').fadeIn();



		$('.bg_popup').click(function(){

			$('.popup_conf').fadeOut();

			$('.bg_popup').fadeOut();

		});

	});

	$('.video_slider').each(function(){
		var $item = $('li', this);
		var $prev = $('.prev', this);
		var $next = $('.next', this);

		$item.first().addClass('active');

		if($item.length < 2){
			$prev.hide();
			$next.hide();
		}
		else{
			$prev.show();
			$next.show();
		}

		$prev.click(function(){
			var index = $item.filter('.active').index();
			if(index == 0){
				index = $item.length
			}
			$item.eq(index-1).addClass('active').siblings().removeClass('active');
		});

		$next.click(function(){
			var index = $item.filter('.active').index();
			if(index == $item.length-1){
				index = -1
			}
			$item.eq(index+1).addClass('active').siblings().removeClass('active');
		});
	});

	$('.catalog_btns button').click(function(){
		// $('.good_tab').eq($(this).index()).fadeIn().siblings().hide();
		var url = $(this).data('ajaxlink');
		$('.goods_tabs').html('');
		$('.goods_tabs').load(url, function(){

			// $('.ico_podarok').removeClass('on');

			// setTimeout(function(){
			// 	$('.ico_podarok').addClass('on');
			// }, 1000);

			$('.good_tab').each(function(){

				$('.btns_category button', this).click(function(){
					$(this).parent('.btns_category').siblings('.blocks_category').find('.block_category').eq($(this).index()).fadeIn().siblings().hide();
					$(this).addClass('active').siblings().removeClass('active');

					$('.ico_podarok').removeClass('on');

					setTimeout(function(){
						$('.ico_podarok').addClass('on');
					}, 100);
				}).first().click();

			});


			$('.btns_color').each(function(){
				var $btn = $('li', this);
				var $item = $(this).siblings('.goods').find('.good');

				$btn.click(function(){
					$item.eq($(this).index()).fadeIn().siblings().hide();
					$(this).addClass('active').siblings().removeClass('active');

					$('.ico_podarok').removeClass('on');

					setTimeout(function(){
						$('.ico_podarok').addClass('on');
					}, 100);
				}).first().click();

			});

			$('.gallery_goods').each(function(){
				var $item = $('li', this);
				var $prev = $('.prev', this);
				var $next = $('.next', this);

				$item.first().addClass('active');

				if($item.length < 2){
					$prev.hide();
					$next.hide();
				}
				else{
					$prev.show();
					$next.show();
				}

				$prev.click(function(){
					var index = $item.filter('.active').index();
					if(index == 0){
						index = $item.length
					}
					$item.eq(index-1).addClass('active').siblings().removeClass('active');
				});

				$next.click(function(){
					var index = $item.filter('.active').index();
					if(index == $item.length-1){
						index = -1
					}
					$item.eq(index+1).addClass('active').siblings().removeClass('active');
				});
			});

			$('.complectacia ul li').each(function(){
				if($(this).data('complect') == 0){
					$(this).remove();
				}
			});

			$('.open_popup_callback').click(function(){
				$('.popup_callback .form h3').text($(this).data('popuptitle'));
				$('.popup_callback').fadeIn();
				$('.bg_popup').fadeIn();

				$('.popup_callback input[type="hidden"]').val($(this).data('popuptitle'));

				$('.bg_popup').click(function(){
					$('.popup_callback').fadeOut();
					$('.bg_popup').fadeOut();
				});
			});

			$('.open_popup_otziv').click(function(){
				$('.popup_otziv').fadeIn();
				$('.bg_popup').fadeIn();

				$('.bg_popup').click(function(){
					$('.popup_otziv').fadeOut();
					$('.bg_popup').fadeOut();
				});
			});

		});
		$(this).addClass('active').siblings().removeClass('active');
	}).first().click();

	// if($('.complect form').data('check') == 0){
	// 	$('.complect .form, .complect h4').remove();
	// }

	// $('.list_video, .project_inset').each(function(){
	// 	var $link = $(this).text().split('com/');
	// 	$(this).html('<iframe class="player1" frameborder="0" scrolling="no" src="http://player.vimeo.com/video/'+$link[1]+'?controls=0&title=0&amp&byline=0&amp&portrait=0"></iframe>');
	// });

	// $('.open_popup_callback').click(function(){
	// 	$('.popup_callback').fadeIn();
	// 	$('.bg_popup').fadeIn();

	// 	$('.bg_popup').click(function(){
	// 		$('.popup_callback').fadeOut();
	// 		$('.bg_popup').fadeOut();
	// 	});
	// });

	$('.price_block button, .catalog_block ul li .img').click(function(){

		var $button = $(this);

		$('.popup_big input[name="goods"]').val($(this).parents('li').find('h3').text()+', '+'Цена: '+$(this).parents('li').find('.price_block div:first ins').text());
		$('.popup_big .popup_left .title').html($(this).parents('li').find('h3').html());
		$('.popup_big .desc').html($(this).parents('li').find('.goods_desc').html());
		$('.popup_big .char').html($(this).parents('li').find('.char').html());
		$('.popup_big .price').html('Цена: '+$(this).parents('li').find('.price_block div:first').html());
		$('.popup_big .colors').html($(this).parents('li').find('.colors').html());
		$('.popup_big .skidka').html($(this).parents('li').find('.skidka').html());

		$('.popup_big .skidka').each(function(){
			if($(this).text() == ''){
				$(this).hide();
			}
			else{
				$(this).show()
			}
		});

		$('.popup_big .colors').each(function(){
			if($(this).find('span').length == 1){
				$(this).hide();
			}
			else{
				$(this).show()
			}
		});


		$('.popup_big .gallery').html($(this).parents('li').find('.goods_imgs').html());

		$('.popup_big .gallery').each(function(){

			// if($(this).text() == ''){
			// 	$(this).hide();
			// }

			var $this = $(this);
			var string = $this.html().split('||');

			$this.html('');

			$(this).append('<div class="main_img" />');
			$(this).append('<div class="mini_img" />');

			$('.main_img').append('<img src="'+$button.parents('li').find('.img').find('img').attr('src')+'" >');
			$('.mini_img').append('<div><img src="'+$button.parents('li').find('.img').find('img').attr('src')+'" ></div>');

			for(var i = 0; i < string.length; i++){
				var current = string.slice(i, i+1);
				var dan = String(current).split('::');

				$this.find('.main_img').append('<img src="'+dan[0]+'" >');
				$this.find('.mini_img').append('<div><img src="'+dan[0]+'" ></div>');
			}

			var $btn = $('.mini_img div', this);
			var $main = $('.main_img img', this);

			$btn.click(function(){
				$main.eq($(this).index()).addClass('active').siblings().removeClass('active');
				$(this).addClass('active').siblings().removeClass('active');
			}).first().click();
		});

		$('.popup_big').css({'top': $(window).scrollTop() +100}).fadeIn();
		$('.bg_popup').fadeIn();

		$('.bg_popup').click(function(){
			$('.popup_big').fadeOut();
			$('.bg_popup').fadeOut();
		});
	});

	$('.catalog').each(function(){
		var $btns = $('.catalog_btns button', this);
		var $item = $('.catalog_block', this);

		$btns.click(function(){
			$item.eq($(this).index()).fadeIn().siblings().hide();
			$(this).addClass('active').siblings().removeClass('active');
		}).filter('.active').click();
	});

	$('.catalog_block ul li .char').each(function(){

		if($(this).text() == ''){
			$(this).hide();
		}

		var $this = $(this);
		var string = $this.html().split('||');

		$this.html('');

		for(var i = 0; i < string.length; i++){
			var current = string.slice(i, i+1);
			var dan = String(current).split('::');

			$this.append('<p>'+dan[0]+' <span>'+dan[1]+'</span></p>');
			
		}

		$(this).find('p').slice(6).addClass('hide');
	});

	// $('.photo_video ul').each(function(){

	// 	if($(this).text() == ''){
	// 		$(this).hide();
	// 	}

	// 	var $this = $(this);
	// 	var string = $this.html().split('||');

	// 	$this.html('');

	// 	for(var i = 0; i < string.length; i++){
	// 		var current = string.slice(i, i+1);
	// 		var dan = String(current).split('::');

	// 		$this.append('<li><a rel="gallery" class="fancy" style="background-image:url('+dan[0]+')" href="'+dan[0]+'"></a></li>');
			
	// 	}

	// 	$(this).find('p').slice(6).addClass('hide');
	// });

	// $('.video').each(function(){

	// 	if($(this).text() == ''){
	// 		$(this).hide();
	// 	}

	// 	var $this = $(this);
	// 	var string = $this.html();

	// 	$this.html('');
	// 	var current = String(string).split('=');
	// 	// var current = String(string[1]).split('&');
	// 	console.log(current);
	// 	$this.append('<iframe src="https://www.youtube.com/embed/'+current[0]+'?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');

	// 	$(this).find('p').slice(6).addClass('hide');
	// });

	$('.photo_video ul li a').fancybox();















	$('.catalog_block .colors').each(function(){

		if($(this).text() == ''){
			$(this).hide();
		}

		var $this = $(this);
		var string = $this.html().split('||');

		$this.html('');

		for(var i = 0; i < string.length; i++){
			var current = string.slice(i, i+1);
			var dan = String(current).split('::');

			$this.append('<span style="background: '+dan[0]+';"></span>');
			
		}
	});

	$('.triggers ul').each(function(){

		if($(this).text() == ''){
			$(this).hide();
		}

		var $this = $(this);
		var string = $this.html().split('||');

		$this.html('');

		for(var i = 0; i < string.length; i++){
			var current = string.slice(i, i+1);
			var dan = String(current).split('::');

			$this.append('<li><img src="'+dan[0]+'">'+dan[1]+'</li>');
			
		}
	});

	$('.circle_titles').each(function(){

		if($(this).text() == ''){
			$(this).hide();
		}

		var $this = $(this);
		var string = $this.html().split('||');

		$this.html('');

		for(var i = 0; i < string.length; i++){
			var current = string.slice(i, i+1);
			var dan = String(current).split('::');

			$this.append('<div><span>'+dan[1]+'</span><ins>'+dan[2]+'</ins></div>');
			
		}
	});

	$('.main_circle').each(function(){

		if($(this).text() == ''){
			$(this).hide();
		}

		var $this = $(this);
		var string = $this.html().split('||');

		$this.html('');

		for(var i = 0; i < string.length; i++){
			var current = string.slice(i, i+1);
			var dan = String(current).split('::');

			$this.append('<img src="'+dan[0]+'">');
			
		}
	});

	$('.what_pay ul').each(function(){

		if($(this).text() == ''){
			$(this).hide();
		}

		var $this = $(this);
		var string = $this.html().split('||');

		$this.html('');
		var w = 0;

		for(var i = 0; i < string.length; i++){
			var current = string.slice(i, i+1);
			var dan = String(current).split('::');
			w++

			$this.append('<li><img src="'+dan[0]+'"><p><span>'+w+'. </span>'+dan[1]+'</p><ins>'+dan[2]+'</ins></li>');
			
		}
	});

	$('.shema_mono ul').each(function(){

		if($(this).text() == ''){
			$(this).hide();
		}

		var $this = $(this);
		var string = $this.html().split('||');

		$this.html('');
		var w = 0;

		for(var i = 0; i < string.length; i++){
			var current = string.slice(i, i+1);
			var dan = String(current).split('::');
			w++

			$this.append('<li><ins>'+w+'</ins><span>'+dan[0]+'</span><p>'+dan[1]+'</p></li>');
			
		}
	});

	$('.shema_giro ul').each(function(){

		if($(this).text() == ''){
			$(this).hide();
		}

		var $this = $(this);
		var string = $this.html().split('||');

		$this.html('');
		var w = 0;

		for(var i = 0; i < string.length; i++){
			var current = string.slice(i, i+1);
			var dan = String(current).split('::');
			w++

			$this.append('<li><ins>'+w+'</ins><span>'+dan[0]+'</span><p>'+dan[1]+'</p></li>');
			
		}
	});

	$('.logos').each(function(){

		if($(this).text() == ''){
			$(this).hide();
		}

		var $this = $(this);
		var string = $this.html().split('||');

		$this.html('');
		var w = 0;

		for(var i = 0; i < string.length; i++){
			var current = string.slice(i, i+1);
			var dan = String(current).split('::');
			w++

			$this.append('<div class="logo"><img src="'+dan[0]+'" alt=""></div>');
			
		}
	});

	$('.faq ul').each(function(){

		if($(this).text() == ''){
			$(this).hide();
		}

		var $this = $(this);
		var string = $this.html().split('||');

		$this.html('');
		var w = 0;

		for(var i = 0; i < string.length; i++){
			var current = string.slice(i, i+1);
			var dan = String(current).split('::');
			w++

			// $this.append('<div class="logo"><img src="'+dan[0]+'" alt=""></div>');
			$this.append('<li><div><i>'+w+'</i>'+dan[0]+'</div><p><span>'+dan[1]+'</span></p></li>');
			
		}
	});


















	$('.catalog_block .skidka').each(function(){
		if($(this).text() == ''){
			$(this).remove()
		}
	});

	$('.price_block span').each(function(){
		if($(this).text() == ''){
			$(this).remove().siblings('<br>').remove()
		}
	});

	$(".menu_scroll a").click(function () { 
	    elementClick = $(this).attr("href");
	    destination = $(elementClick).offset().top-50;
        $('body, html').animate( { scrollTop: destination }, 1100 );
	    return false;
    });

    // $('.mono_giro').load('assets/templates/mono/mono_giro.html');

	var $animate = $('.animate');

	$('.triggers').addClass('on');
	var i = true;
	var cs = true;

	$(window).scroll(function(){

		$animate.each(function(){
			if($(window).scrollTop() + $(window).height() -100 > $(this).offset().top){
				$(this).addClass('on');
			}
		});

		// if($(window).scrollTop() + $(window).height() -100 > $('.carousel li').offset().top && i == true){
		// 	$('.carousel li').first().addClass('active');
		// 	i = false
		// }


		if($(window).scrollTop() >= $('.menu').offset().top){
			$('.menu_scroll').addClass('active');
		}
		else{
			$('.menu_scroll').removeClass('active');
		}

		$('section[id]').each(function(){
			var id = $(this).attr('id');
			// console.log($('.menu_scroll li[id="#'+id+'"]'))

			if($(window).scrollTop() > $(this).offset().top - 100){
				$('.menu_scroll li a[href="#'+id+'"]').parent('li').addClass('active').siblings().removeClass('active');
			}
			else{
				// $('.menu_scroll li').eq(0).removeClass('active');
				// $('.menu_scroll li').removeClass('active');
			}
		});

		// if($(window).scrollTop() >= $('.circle_slider').offset().top-$(window).height()/3 && cs == true){
		// 	circleSlider()
		// 	cs = false
		// }

	}).scroll();

	// setInterval(function(){
	// 	$('.up_left').click();
	// }, 5000);

	$('.faq').each(function(){
		var $item = $('li div', this);

		$('li', this).each(function(){
			$(this).find('i').text($(this).index()+1);
		});

		$item.click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active').siblings('p').slideUp();
			}
			else{
				$(this).addClass('active').siblings('p').slideDown();
				$(this).parent('li').siblings().find('p').slideUp().siblings('div').removeClass('active');
			}
		});
	});

	$('.tabs_block').each(function(){
		var $btn = $('.tabs_btns button', this);
		var $tab = $('.tab', this);

		$btn.click(function(){
			$tab.eq($(this).index()).fadeIn().siblings().hide();
			$(this).addClass('active').siblings().removeClass('active');
			$(window).resize();
		}).filter('.active').click();
	});

	$(window).load(function() {
	  $('.shtora1').twentytwenty();
	  $('.princit_top').addClass('active');

	  $('.shtora2').twentytwenty();
	  $('.princit_top').addClass('active');
	});

	$('img').each(function(){
		if($(this).attr('src') == ''){
			$(this).remove();
		}
	});

	$(window).resize(function(){
		$('header').height($(window).height());
		// $('.kolesa img').height($('header').height() / 2);

		if($(window).height() < 790){
			$('header').addClass('medium_height');
			// $('.kolesa img').height($('header').height() / 2.3);
		}
		else{
			$('header').removeClass('medium_height');
		}
	}).resize();

	// $('.komkol').each(function(){
	// 	var $this = $(this);
	// 	var $item1 = $('.block_img_1', this);
	// 	var $item2 = $('.block_img_2', this);
	// 	var $item3 = $('.block_img_3', this);
	// 	var $item4 = $('.block_img_4', this);
	// 	var $item5 = $('.block_img_5', this);
	// 	var $item6 = $('.block_img_6', this);

	// 	var $item7 = $('.block_img_7', this);
	// 	var $item8 = $('.block_img_8', this);
	// 	var $item9 = $('.block_img_9', this);
	// 	var $item10 = $('.block_img_10', this);
	// 	var $item11 = $('.block_img_11', this);

	// 	var $btn1 = $('.tab_btns button').first();
	// 	var $btn2 = $('.tab_btns button').last();

	// 	$(window).on('scroll', function(){
	// 		var scrollTop = $(window).scrollTop() - $('.complect').offset().top;

	// 		if(scrollTop > 0){

	// 			$('.ob').hide()

	// 			if(scrollTop < 1085){
	// 				$item1.css({'top': scrollTop});
	// 			}

	// 			if(scrollTop < 1054){
	// 				$item2.css({'top': scrollTop -30});
	// 			}

	// 			if(scrollTop < 1271-360){
	// 				$item3.css({'top': scrollTop +380});
	// 			}

	// 			if(scrollTop < 1254-330){
	// 				// $item4.css({'top': scrollTop +330, 'transform':'rotate('+scrollTop/20+'deg)'});
	// 				$item4.css({'top': scrollTop +330});
	// 			}

	// 			if(scrollTop < 1253-350){
	// 				$item5.css({'top': scrollTop +380});
	// 			}

	// 			if(scrollTop < 1253-350){
	// 				$item6.css({'top': scrollTop +350});
	// 			}


	// 			if(scrollTop < 1085+100){
	// 				$item7.css({'top': scrollTop});
	// 			}

	// 			if(scrollTop < 1054+60){
	// 				$item8.css({'top': scrollTop +100});
	// 			}

	// 			if(scrollTop < 1271-290){
	// 				$item9.css({'top': scrollTop +290});
	// 			}

	// 			if(scrollTop < 1254-250){
	// 				$item10.css({'top': scrollTop +280});
	// 			}

	// 			if(scrollTop < 1253-220){
	// 				$item11.css({'top': scrollTop +260});
	// 			}

	// 		}
	// 		else{
	// 			$('.ob').show();
	// 		}

	// 		// console.log(scrollTop)
	// 	});

	// 	$btn1.click(function(){
	// 		$('.komgiro_item').fadeIn();
	// 		$('.komkol_item').hide();
	// 		$('.ob_mono').hide();
	// 		$('.ob_giro').fadeIn();
	// 		$(this).addClass('active').siblings().removeClass('active');
	// 	});

	// 	$btn2.click(function(){
	// 		$('.komgiro_item').hide();
	// 		$('.komkol_item').fadeIn();
	// 		$('.ob_mono').fadeIn();
	// 		$('.ob_giro').hide();
	// 		$(this).addClass('active').siblings().removeClass('active');
	// 	}).click();
	// });

	$('.carousel').each(function(){
		var $prev = $(this).siblings('.btns').find('.prev');
		var $next = $(this).siblings('.btns').find('.next');
		var $item = $('li', this);

		// $item.first().addClass('active');

		$prev.click(function(){
			var index = $item.filter('.active').index();
			if(index == 0){
				index = $item.length
			}
			$item.eq(index-1).addClass('active').siblings().removeClass('active');
		});

		$next.click(function(){
			var index = $item.filter('.active').index();
			if(index == $item.length -1){
				index = -1
			}
			$item.eq(index+1).addClass('active').siblings().removeClass('active');
		});
	});

	$('.ob i').hover(function(){
		$(this).parent('span').addClass('hover');
	},
	function(){
		$(this).parent('span').removeClass('hover');
	}
	);

});

function circleSlider(){

	setTimeout(function(){

		$('.select_mono_giro button').click(function(){
			$('.mono_giro div').eq($(this).index()).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
		}).first().click();


		$('.circle_block').each(function(){
			var $btn_up_right = $('.up_right', this);
			var $btn_up_left = $('.up_left', this);

			var $circle = $('.circle', this);
			var $span = $('.circle span');
			var $mainCircle = $('.main_circle img');
			var $mono = $('.mono img');
			var $giro = $('.giro img');
			var $circle_titles = $('.circle_titles div');

			$span.first().addClass('active');
			$mainCircle.first().addClass('active');
			$mono.first().addClass('active');
			$giro.first().addClass('active');
			$circle_titles.first().addClass('active');

			var road = 0;

			 $('.road_left', this).click(function(){
				road = road - 45;
				$circle.css({'transform':'rotate('+road+'deg'+')'});

				var index = $span.filter('.active').index();
				if(index == $span.length - 1){
					index = -1
				}
				$span.eq(index+1).addClass('active').siblings().removeClass('active');
				$mainCircle.eq(index+1).addClass('active').siblings().removeClass('active');
				$circle_titles.eq(index+1).addClass('active').siblings().removeClass('active');


				var indexMono = $mono.filter('.active').index();

				if(indexMono == $mono.length - 1){
					indexMono = -1
				}

				var i = 0;

				var set = setInterval(function(){
					console.log(i)
					if(i < 3){
						$mono.eq(indexMono+1).addClass('active').siblings().removeClass('active');
						$giro.eq(indexMono+1).addClass('active').siblings().removeClass('active');
						i++
						indexMono++
					}
					else{
						clearInterval(set)
					}
				}, 70);
			});

			$('.road_right', this).click(function(){
				road = road + 45;
				$circle.css({'transform':'rotate('+road+'deg'+')'});

				var index = $span.filter('.active').index();
				if(index == 0){
					index = $span.length
				}
				$span.eq(index-1).addClass('active').siblings().removeClass('active');
				$mainCircle.eq(index-1).addClass('active').siblings().removeClass('active');
				$circle_titles.eq(index-1).addClass('active').siblings().removeClass('active');


				var indexMono = $mono.filter('.active').index();

				if(indexMono == 0){
					indexMono = $mono.length
				}

				var i = 0;

				var set = setInterval(function(){
					console.log(i)
					if(i < 3){
						$mono.eq(indexMono-1).addClass('active').siblings().removeClass('active');
						$giro.eq(indexMono-1).addClass('active').siblings().removeClass('active');
						i++
						indexMono--
					}
					else{
						clearInterval(set)
					}
				}, 70);
			});
		});
	});

}