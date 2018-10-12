$(".owl-carousel")
	.owlCarousel({
		loop: true,
		autoWidth: false,
		items: 2,
		margin: 10,
		nav: true,
		dots: false,
		responsiveClass: true
	});

// noinspection JSUnresolvedFunction
$(".nav-link").on("click", function () {
	const eleId = $(this).attr("data-target");
	$("html, body").animate({
		scrollTop: $("#" + eleId).offset().top - 56
	}, 650);
});

$(".owl-prev")
	.empty()
	.append('<div class="row h-100"><div class="col my-auto"><i class="fas fa-chevron-circle-left"></i></div></div>');
$(".owl-next")
	.empty()
	.append('<div class="row h-100"><div class="col my-auto"><i class="fas fa-chevron-circle-right"></i></div></div>');

// noinspection JSUnresolvedFunction
$('.port-img').on("click", function () {
	var imgSrc = $(this).attr("src");
	var filename = imgSrc.substring(imgSrc.lastIndexOf('/') + 1);
	$('#portBigImg').attr("src", "img/portfolio/full-image/" + filename);
});

// noinspection JSUnresolvedFunction
$(".md-port-img").on("click", function () {
	var imgSrc = $(this).attr("src");
	var filename = imgSrc.substring(imgSrc.lastIndexOf('/') + 1);
	window.open("img/portfolio/full-image/" + filename);
});