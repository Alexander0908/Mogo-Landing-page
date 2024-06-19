$(function() {
    
    /* Чтобы менюшка Nav оставалась вверху закрепелнная, когда пролистывают страницу*/
	var header = $("#header"),
	    introH = $("#intro").innerHeight(),
	    scrollOffset = $(window).scrollTop();

	
	/* Fixed Header */
	checkScroll(scrollOffset);

	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
  
	});

    /* Это чтобы обновлялась сразу страница и при обновлении оставалась менюшка вверху*/
	function checkScroll(scrollOffset) {
		if( scrollOffset >= introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	/* Smoothe scroll*/
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});


	/* Menu nav toggle - Появление меню и исчезновение*/
	$("nav_toggle").on("click", function(event) {
		event.preventDefault();

		$("#nav").toggleClass("active");
		$("#nav").toggleClass("active");
	});


	/* Collapse */
	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('collapse');

			$this.toggleClass("active");
			/* $(blockId).slideToggle();  плавно открывает */
	})


	/* Slider */
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	})





});